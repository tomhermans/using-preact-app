import "../styles.css";
import { ThemeProvider } from "theme-ui";
import theme from "../layouts/Theme.js";

export default function App({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
