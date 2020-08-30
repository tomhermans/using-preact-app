import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const name = "Tom Hermans";
export const siteTitle = "Tom's Blog";

export default function Header() {
	return (
		<header className={"text-center mb-4 pt-10"}>
			<ThemeToggle />
			<>
				<img
					src="/images/profile.jpg"
					className={
						"rounded-full h-20 w-20 inline-block align-middle shadow-2xl"
					}
					alt={name}
				/>
				<h1 className={"text-6xl"}>{name}</h1>
				<h6 className={"tracking-wider italic"}>'Building ideas'</h6>
			</>
		</header>
	);
}
