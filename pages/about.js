import Link from "next/link";
import Head from "next/head";
import Wrapper, { siteTitle } from "../components/wrapper.js";
import { PageTransition } from "next-page-transitions";

import MyLayout from "../layouts/MyLayout";

export default function About() {
	return (
		<Wrapper>
			<Head>
				<title>{siteTitle} - About</title>
			</Head>
			<div class="p-8 bg-blue-200">
				<Link href="/">
					<a class="p-2 bg-orange-500 text-white">Home</a>
				</Link>
				<br />
				About us
			</div>
		</Wrapper>
	);
}

About.Layout = MyLayout;
