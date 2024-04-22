import Link from "next/link";
import Buttons from "@/app/atoms/buttons";

import Image from "next/image";
import majorityLogo from "/public/images/Majority.webp";
import AnimatedHamburger from "./animatedhamburger";
import { useState } from "react";

export default function MobileNavbar() {
	const [active, setActive] = useState(false);

	const toggle = () => {
		setActive((pv) => !pv);
	};
	return (
		<>
			<section
				id="majorityMobileNav"
				className="w-full z-20 bg-white sticky md:hidden flex flex-row items-center justify-between p-3"
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
			<section>
				{active === true && (
					<div className="w-1/2 h-screen bg-white flex left-0 items-center justify-between p-3">
						<nav className="h-full flex justify-between pt-12 pb-32">
							<div className="flex items-start pt-10">
								<ul className="flex flex-col gap-y-10">
									{[
										["BANKING", "/dashboard"],
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
