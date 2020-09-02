import {
	TransitionGroup,
	Transition as ReactTransition,
} from "react-transition-group";
const TIMEOUT = 200;
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0,
		transform: `translateY(60px)`,
	},
	entered: {
		transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
		opacity: 1,
		transform: `translateX(0px)`,
	},
	exiting: {
		transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
		opacity: 0,
		transform: `translateY(-40px)`,
	},
};
const Transition = ({ children, location, style }) => {
	console.log(children, location);

	return (
		<TransitionGroup
			id="tg"
			class="transition-group"
			style={{
				position: "relative",
				"background-color": "var(--theme-ui-colors-background)",
			}}
		>
			<ReactTransition
				key={location}
				timeout={{
					enter: TIMEOUT,
					exit: TIMEOUT,
				}}
			>
				{(status) => (
					<div
						style={{
							...getTransitionStyles[status],
						}}
					>
						{children}
					</div>
				)}
			</ReactTransition>
		</TransitionGroup>
	);
};
export default Transition;
