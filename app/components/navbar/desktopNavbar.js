import Link from "next/link";
import Image from "next/image";
import majorityLogo from "/public/images/Majority.webp";

import Buttons from "../../atoms/buttons";

export default function DesktopNavbar() {
	return (
		<>
			<section
				id="majorityNav"
				className="w-full hidden md:block md:fixed	 top-0 h-fit"
			>
				<div className="flex justify-between items-center m-auto w-full max-w-[1440px] py-2 px-4 md:px-6 lg:px-14">
					<div className="">
						<Link href="/">
							{" "}
							<Image
								className="max-w-36"
								src={majorityLogo}
								alt="this is the company logo"
							/>
						</Link>
					</div>
					<nav className="h-full pl-2.5 pr-2.5 py-2 bg-white flex flex-row items-center justify-between rounded-full">
						<div className="flex flex-row items-center gap-x-10">
							<ul className="flex gap-x-10">
								{[
									["Banking", "/dashboard"],
									["Services", "/services"],
									["Help", "/help"],
								].map(([title, url]) => (
									<Link
										key={url}
										href={url}
										className="rounded-lg items-center px-3 py-2 text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900"
									>
										{title}
									</Link>
								))}
							</ul>
							<Buttons
								ctaBtn={true}
								children="Sign up"
								className="btn-primary"
							/>
						</div>
					</nav>
				</div>
			</section>
		</>
	);
}
