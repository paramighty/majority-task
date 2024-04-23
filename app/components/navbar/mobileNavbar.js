import Link from "next/link";
import Buttons from "@/app/atoms/buttons";

import Image from "next/image";
import majorityLogo from "/public/images/Majority.webp";
import AnimatedHamburger from "./animatedhamburger";
import { useState, useEffect } from "react";

export default function MobileNavbar() {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {};
	}, [active]);

	const toggle = () => {
		setActive((pv) => !pv);
	};
	return (
		<>
			<section
				id="majorityMobileNav"
				className="fixed top-0 w-full z-76 bg-white md:hidden flex flex-row items-center justify-between p-3"
			>
				<div className="flex flex-row w-full justify-between items-center">
					<div className="relative">
						<Link href="/">
							{" "}
							<Image
								className="max-w-28"
								src={majorityLogo}
								alt="this is the company logo"
							/>
						</Link>
					</div>
					<AnimatedHamburger active={active} toggle={toggle} />
				</div>
			</section>
			<section className="fixed top-0 w-[80%] z-75 bg-white md:hidden flex flex-row items-center overflow-y-hidden justify-between p-3">
				{active === true && (
					<div className="w-full h-screen bg-white flex left-0 items-center justify-between p-3 overflow-y-hidden">
						<nav className="h-full flex justify-between pt-12 pb-32">
							<div className="flex items-start pt-10">
								<ul className="flex flex-col gap-y-10">
									{[
										["BANKING", "/banking"],
										["SERVICE", "/services"],
										["HELP", "/help"],
									].map(([title, url]) => (
										<Link
											key={url}
											href={url}
											className="rounded-lg items-center px-3 py-2 text-slate-700 font-gta hover:bg-slate-100 hover:text-slate-900"
										>
											{title}
										</Link>
									))}
								</ul>
							</div>
						</nav>
					</div>
				)}
			</section>
		</>
	);
}
