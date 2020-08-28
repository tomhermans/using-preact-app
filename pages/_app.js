import "../styles.css";

function App({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
