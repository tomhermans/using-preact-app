import Link from "next/link";

export default function About() {
	return (
		<div class="p-8 bg-blue-700">
			<Link href="/">
				<a>Home</a>
			</Link>
			<br />
			About us
		</div>
	);
}
