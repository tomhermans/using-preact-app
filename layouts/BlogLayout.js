import React from "react";
import Header from "../components/header.js";

export default function BlogLayout({ children }) {
	return (
		<>
			<Header />
			<p>This is the BLOG layout</p>
			<hr />
			{children}
		</>
	);
}
