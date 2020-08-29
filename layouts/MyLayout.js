import React, { useState } from "react";

export default function MyLayout({ children }) {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div>{children}</div>
			<p>
				<button onClick={() => setCounter(counter + 1)}>
					Clicked {counter} Times
				</button>
			</p>
		</>
	);
}
