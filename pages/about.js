import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";
import { PageTransition } from "next-page-transitions";

import MyLayout from "../layouts/MyLayout";

export default function About() {
	return (
		<>
			<div class="p-8 bg-blue-200">
				<Link href="/">
					<a class="p-2 bg-orange-500 text-white">Home</a>
				</Link>
				<br />
				About us
			</div>
		</>
	);
}

About.Layout = MyLayout;
