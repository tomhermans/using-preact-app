import Link from "next/link";

export default function Home() {
	return (
		<div class="p-8 bg-blue-300">
			<Link href="/about">
				<a>About</a>
			</Link>
			<br />
			Hello World.{" "}
		</div>
	);
}
