import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";

import MyLayout from "../layouts/MyLayout";

export default function About() {
	return (
		<MyLayout>
			<div class="p-8">
				<Link href="/">
					<a class="p-2 bg-orange-500 text-white">Home</a>
				</Link>
				<br />
				About us
				<br />
				SVG, even and odd circles differently colored based on the
				theme-ui-colors (text / background). But not getting the vars set in the
				body...🤔 <br />
				You're seeing the fallbacks (red, resp. blue)
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					width="60px"
					height="60px"
					viewBox="0 0 512 512"
				>
					<path d="M104 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M256 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M408 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M104 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M256 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M408 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M104 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M256 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
					<path d="M408 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" />
				</svg>
			</div>
		</MyLayout>
	);
}

About.Layout = MyLayout;
