import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const name = "Tom Hermans";
export const siteTitle = "Tom's Blog";

export default function Header2() {
	return (
		<header className={"text-center mb-4 pt-4"}>
			<ThemeToggle />
			<>
				<Link href="/">
					<a class="flex items-center ">
						<img
							src="/images/tomhermans-logo.svg"
							className={
								"rounded-full h-10 w-10 ml-4 inline-block align-middle shadow-2xl"
							}
							alt={name}
						/>
						<span class="ml-3 pt-1 font-bold hidden sm:inline-block sm:visible">
							{name}
						</span>
					</a>
				</Link>
			</>
		</header>
	);
}
