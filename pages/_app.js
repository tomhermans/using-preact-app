import "../styles.css";
import { ThemeProvider } from "theme-ui";
import theme from "../layouts/Theme.js";
import Layout from "../components/layout.js";

export default function App({ Component, pageProps, router }) {
	// const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
