import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const name = "Tom Hermans";
export const siteTitle = "Tom's Blog";

export default function Header2() {
	return (
		<header className={"text-center mb-4 pt-10"}>
			<ThemeToggle />
			<>
				<Link href="/">
					<a>
						<img
							src="/images/profile.jpg"
							className={
								"rounded-full h-20 w-20 inline-block align-middle shadow-2xl"
							}
							alt={name}
						/>
					</a>
				</Link>
				<h2>
					<Link href="/">
						<a className={"text-6xl"}>{name}</a>
					</Link>
				</h2>
				<h6 className={"tracking-wider italic"}>'Be kind or be quiet'</h6>
			</>
		</header>
	);
}
