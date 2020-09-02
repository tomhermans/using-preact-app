import React, { useState } from "react";

export default function MyLayout({ children }) {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div>{children}</div>
			<p>
				<button
					onClick={() => {
						setCounter(counter + 1);
						var style = getComputedStyle(document.body);
						console.log(
							"cssprop",
							style.getPropertyValue("--theme-ui-colors-background")
						);
					}}
				>
					Clicked {counter} Times
				</button>
			</p>
		</>
	);
}
