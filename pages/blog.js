import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getPosts } from "../lib/posts";
import Date from "../components/date";
import MyLayout from "../layouts/MyLayout";

export default function Blog({ postsData }) {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={"mt-6"}>
				<h1 className="text-4xl">Blog</h1>
				<h2 className={"mb-1"}>Have a look at my articles...</h2>
				<ul>
					{postsData.map(({ postID, title, date, excerpt }) => (
						<li key={postID}>
							<div className={"p-6"}>
								<Link href="/[postID]" as={`/${postID}`}>
									<a className={"text-xl font-black"}>{title}</a>
								</Link>
								<br />
								<small>
									<Date dateString={date} />
								</small>
								<hr className={"mt-2 mb-2"} />
								<div>{excerpt}</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const postsData = getPosts();
	// console.log(postsData);
	return {
		props: {
			postsData,
		},
	};
}

Blog.Layout = MyLayout;
