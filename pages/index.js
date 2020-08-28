import Link from "next/link";
import Head from "next/head";
import Wrapper, { siteTitle } from "../components/wrapper";
import Container from "../components/container";

export default function Home() {
	return (
		<Wrapper>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div class="p-8 bg-green-300">
				<Link href="/about">
					<a class="p-2 bg-red-500 text-white">About</a>
				</Link>
				<br />
				Hello World.{" "}
			</div>
		</Wrapper>
	);
}
