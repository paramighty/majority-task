import TextAnimation from "./textAnimation";
import Buttons from "@/app/atoms/buttons";
import globeIcon from "/public/icons/worldIcon.webp";
import HeroModal from "./modal";
import Link from "next/link";

export default function HeroComponent() {
	return (
		<div className="h-screen relative bg-[#794DFF] max-h-[1060px]">
			<div className="px-0 h-full m-auto w-screen max-w-[1680px] ">
				<div className="h-full">
					<div className="flex flex-col items-center justify-center h-full w-full px-8 pb-12 pt-8 2xl:px-16">
						<h1 className="h1 font-druk hero-title leading-none uppercase text-center text-[#E7F3E7]">
							TRAVELLING TO
						</h1>
						<div className="flex flex-col-reverse relative h-[80px] 2xl:h-[120px] w-full justify-center overflow-hidden">
							<TextAnimation />
						</div>
						<p className="p text-white font-light mt-4 text-center max-w-[720px] leading-7">
							Locals appreciate when you know about their country. Learn about
							any country before visiting it. Be respectful.
						</p>

						<Link href="?modal=true">
							<Buttons
								icon={true}
								ctaBtn={true}
								src={globeIcon}
								className="bg-[#BEF300] font-gta font-medium p-4 rounded-full m-8 flex flex-row gap-2"
								children="search your travel destination"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
