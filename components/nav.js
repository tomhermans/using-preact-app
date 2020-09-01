import Link from "next/link";
// import { getPosts } from "../lib/posts";

export default function Nav({}) {
	return (
		<nav class="text-center p-4">
			<Link href="/">
				<a class="px-2">Home</a>
			</Link>
			<Link href="/about">
				<a class="px-2">About</a>
			</Link>
			<Link href="/blog">
				<a class="px-2">Blog</a>
			</Link>
			<Link href="/index2">
				<a class="px-2">Index2</a>
			</Link>
		</nav>
	);
}
