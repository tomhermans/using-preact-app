import { useEffect } from "react";
import theme from "../layouts/Theme.js";
import Style from "../layouts/Style.js";

import { useRouter } from "next/router";
import Transition from "./Transition";

import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

import { Box } from "theme-ui";
import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.js";

// inject inline styles on the body before the page is rendered to avoid the flash of light if we are in dark mode
let codeToRunOnClient = false;
if (theme.colors.modes && theme.colors.modes.length !== 0) {
	codeToRunOnClient = `
  (function() {
    const theme = ${JSON.stringify(theme)}
    let mode = localStorage.getItem("theme-ui-color-mode")
    if (!mode) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      if (typeof mql.matches === 'boolean' && mql.matches) {
        mode = "dark"
      }
    }
    if (mode && typeof theme.colors.modes === "object" && typeof theme.colors.modes[mode] === "object") {
      const root = document.documentElement
      console.log('modes :', theme.colors.modes);
      console.log('this mode :', theme.colors.modes[mode]);

      Object.entries(theme.colors.modes[mode]).map(([key, value]) => {
        // console.log(key, value);
        document.body.style.setProperty(
          "--theme-ui-colors-"+key, 
          value,
          "var(--theme-ui-colors-primary)",
        )
      }
      )
    }
  })()`;
}

const name = "Tom Hermans";
export const siteTitle = "Tom's Blog";

export default function Layout({ props, children, home }) {
	const router = useRouter();
	useEffect(() => {
		// the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
		document.body.removeAttribute("style");
	}, []);

	return (
		<div>
			<Head {...props}>
				{codeToRunOnClient && (
					<script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
				)}
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="A blog written by Catalin Pit" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header className={"text-center mb-4 pt-10"}>
				<ThemeToggle />
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							className={
								"rounded-full h-20 w-20 inline-block align-middle shadow-2xl"
							}
							alt={name}
						/>
						<h1 className={"text-6xl"}>{name}</h1>
						<h6 className={"tracking-wider italic"}>'Building ideas'</h6>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile.jpg"
									className={
										"rounded-full h-20 w-20 inline-block align-middle shadow-2xl"
									}
									alt={name}
								/>
							</a>
						</Link>
						<h2>
							<Link href="/">
								<a className={"text-6xl"}>{name}</a>
							</Link>
						</h2>
						<h6 className={"tracking-wider italic"}>'Be kind or be quiet'</h6>
					</>
				)}
			</header>

			<Style />
			<Nav />

			<Transition location={router.pathname}>
				<main
					className={"container mx-auto max-w-xl pt-200 min-h-screen text-xl"}
				>
					{children}
				</main>
			</Transition>
			{!home && (
				<div>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
