/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = (props) => (
	<button
		disabled={props.disabled}
		sx={{
			fontSize: 3,
			px: 3,
			py: 2,
			bg: "black",
			color: "#fff",
			boxShadow: "none",
			borderRadius: "4px",
			border: "none",
			cursor: "pointer",
		}}
		{...props}
	/>
);

export default Button;
