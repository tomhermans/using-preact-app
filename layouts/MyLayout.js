import React, { useState } from "react";
import Header from "../components/header.js";

export default function MyLayout({ children }) {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<Header />
			<div>{children}</div>
			<p>
				<button onClick={() => setCounter(counter + 1)}>
					Clicked {counter} Times
				</button>
			</p>
		</>
	);
}
