import Head from "next/head";
import Header from "../components/header.js";

import Wrapper from "../components/wrapper";
import { getPostsIDs, getPostData } from "../lib/posts";
// import Date from "../components/date";

export default function Post({ postData }) {
	return (
		<Wrapper>
			<Header />
			<Head>
				<title>{postData.title}</title>
			</Head>
			<div className={"bg-blue-200 p-6"}>
				<h1 className={"text-4xl font-black"}>{postData.title}</h1>
				<small>{/* Posted on <Date dateString={postData.date} /> */}</small>
			</div>
			<br />
			<div className={"bg-blue-100 p-6 prose"}>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
			</div>
		</Wrapper>
	);
}

export async function getStaticPaths() {
	const paths = getPostsIDs();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.postID);

	return {
		props: {
			postData,
		},
	};
}
