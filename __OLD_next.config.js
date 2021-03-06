const withPrefresh = require("@prefresh/next");
const mdxPrism = require("mdx-prism");
const rehypePrism = require("@mapbox/rehype-prism");

const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
	layoutPath: "layouts",
	defaultLayout: true,
	fileExtensions: ["mdx", "md"],
	remarkPlugins: [
		// require("remark-autolink-headings"),
		// require("remark-slug"),
		// require("remark-code-titles"),
		// require("./utils/title-style"),
	],
	rehypePlugins: [mdxPrism],
	usesSrc: false,
	extendFrontMatter: {
		process: (mdxContent, frontMatter) => ({
			wordCount: mdxContent.split(/\s+/gu).length,
			readingTime: readingTime(mdxContent),
		}),
		phase: "prebuild|loader|both",
	},
})(
	withPrefresh({
		webpack(config, { dev, isServer }) {
			// Move Preact into the framework chunk instead of duplicating in routes:
			const splitChunks =
				config.optimization && config.optimization.splitChunks;
			if (splitChunks) {
				const cacheGroups = splitChunks.cacheGroups;
				const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
				if (cacheGroups.framework) {
					cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
						test,
					});
					// if you want to merge the 2 small commons+framework chunks:
					// cacheGroups.commons.name = 'framework';
				}
			}

			if (isServer) {
				// mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
				config.externals.push(
					/^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
				);
			}

			// Install webpack aliases:
			const aliases = config.resolve.alias || (config.resolve.alias = {});
			aliases.react = aliases["react-dom"] = "preact/compat";

			// Automatically inject Preact DevTools:
			if (dev && !isServer) {
				const entry = config.entry;
				config.entry = () =>
					entry().then((entries) => {
						entries["main.js"] = ["preact/debug"].concat(
							entries["main.js"] || []
						);
						return entries;
					});
			}

			return config;
		},
	})
);
