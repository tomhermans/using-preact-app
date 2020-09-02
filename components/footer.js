import Link from "next/link";
import Nav from "./nav";

export default function Footer() {
	return (
		<footer
			class="fixed text-center pt-24 p-16 block bottom-0 bg-blue-400"
			style="z-index: -1"
		>
			<p>Footer with logo etc..</p>
			<Nav />
			<Link href="/">
				<a>Back Home</a>
			</Link>
		</footer>
	);
}
