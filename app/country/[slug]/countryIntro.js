"use client";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import Image from "next/image";

export default function CountryIntro() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	console.log(country);

	if (!country?.name?.common) {
		return <></>;
	}

	return (
		<div className="h-screen relative bg-[#794DFF] max-h-[1060px]">
			<div className="px-0 h-full m-auto w-screen max-w-[1680px] ">
				<div className="flex flex-col md:flex-row items-center justify-around h-full w-full px-8 pb-12 pt-8 2xl:px-16">
					<div className="flex flex-col justify-start items-start">
						<h1 className="h1 font-druk hero-title leading-none uppercase text-center text-[#E7F3E7]">
							{country?.name?.common}
						</h1>
						<p className="p font-gta font-bold text-left">
							Capital: {country?.capital?.[0]}
						</p>
					</div>

					<div className="block bg-[#C1EE38]">
						<Image
							className=" border-[#C1EE38]"
							width={500}
							height={500}
							src={country?.flags?.png}
							alt={country?.flags?.alt}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
