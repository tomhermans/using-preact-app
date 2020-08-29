import Link from "next/link";

export default function Header() {
	return (
		<header>
			<Link href="/">
				<a class="px-2">Home</a>
			</Link>
			<Link href="/about">
				<a class="px-2">About</a>
			</Link>
			{/* <Link href="/post02">
				<a class="px-2">Post 02</a>
			</Link>
			<Link href="/post03">
				<a class="px-2">Post 03</a>
			</Link> */}
			<Link href="/index2">
				<a class="px-2">Index2</a>
			</Link>
		</header>
	);
}
