import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex sm:justify-center space-x-4">
			{[
				["Home", "/dashboard"],
				["Team", "/team"],
				["Projects", "/projects"],
				["Reports", "/reports"],
			].map(([title, url]) => (
				<Link
					key={url}
					href={url}
					className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
				>
					{title}
				</Link>
			))}
		</nav>
	);
}
