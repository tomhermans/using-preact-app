import React from "react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const siteName = "Tom Hermans";
export const siteTitle = "Tom's Blog";

export default function Wrapper({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div class="p-4 bg-gray-100">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content={siteTitle} />
				<meta name="description" content="A blog written by Tom Hermans" />
			</Head>
			<Header />
			<div class="">
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
}
