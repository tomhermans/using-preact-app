import React from "react";

export default function BlogLayout({ children }) {
	return (
		<>
			<p>This is the BLOG layout</p>
			<hr />
			{children}
		</>
	);
}
