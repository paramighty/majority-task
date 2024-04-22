"use client";

import { useContext } from "react";
import { MyContext } from "../../context/context";
import majorityApp from "/public/images/MajorityApp.webp";
import rightIcon from "/public/icons/correctIcon.webp";
import Image from "next/image";

export default function Subscription() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	console.log(country);

	if (!country?.name?.common) {
		return <></>;
	}

	return (
		<div className="relative bg-white max-h-screen">
			<div className="px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col-reverse md:flex-row justify-center items-center">
					<div className="md:max-w-[50%] md:min-w-[50%] flex flex-col items-center gap-4">
						<div className="flex flex-col justify-center content-center">
							{" "}
							<h5 className="h5 leading-none font-druk  text-center md:text-left text-[#6748F8]">
								LIFETIME SUBSCRIPTION
							</h5>
							<h5 className="h5 leading-none font-druk text-center md:text-left">
								ONLY $14.99
							</h5>
						</div>
						<div className="place-content-center">
							<ul className="max-w-md font-gta space-y-1 text-black">
								<li className="flex items-center">
									<Image src={rightIcon} alt="icon of right sign" />
									TIPS ON BEST WAY TO COMMUTE
								</li>
								<li className="flex items-center">
									<Image src={rightIcon} alt="icon of right sign" />
									RECHARGE PHONE ANYWHERE
								</li>
								<li className="flex items-center">
									<Image src={rightIcon} alt="icon of right sign" />
									LEARN LOCAL GESTURES
								</li>
								<li className="flex items-center">
									<Image src={rightIcon} alt="icon of right sign" />
									CONTACT LOCAL AUTHORITY
								</li>
								<li className="flex items-center">
									<Image src={rightIcon} alt="icon of right sign" />
									CANCEL ANYTIME
								</li>
							</ul>
						</div>
					</div>

					<div className="grid md:max-w-[50%] md:min-w-[50%] grid-cols-1 md:grid-cols-6 bg-[#E6F0E4]">
						<Image
							className="md:col-start-2 md:col-span-4 self-center justify-self-center"
							src={majorityApp}
							alt="subscription"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
