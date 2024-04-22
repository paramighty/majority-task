"use client";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import mapAfrica from "/public/images/Map-of-Continent-Africa.webp";
import mapNorthAmerica from "/public/images/Map-of-North-America.webp";
import mapAsia from "/public/images/Map-of-Asia.webp";
import mapOceania from "/public/images/Map-of-Australia.webp";
import mapEurope from "/public/images/Map-of-Europe.webp";
import mapAntarctica from "/public/images/Map of Antarctica.png";
import mapSouthAmerica from "/public/images/Map of Antarctica.png";

import Image from "next/image";

export default function CountryContinent() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	if (!country?.name?.common) {
		return <></>;
	}

	const languageNames = Object.values(country.languages);
	const regionNames = Object.values(country.region);

	console.log(`${languageNames[0]}`);

	return (
		<div className="relative bg-[#DBCCFC] max-h-screen">
			<div className="px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col md:flex-row justify-center">
					<div className="grid md:max-w-[50%] md:min-w-[50%] grid-cols-1 md:grid-cols-6 ">
						<Image
							className="md:col-start-2 md:col-span-4 self-center justify-self-center"
							src={mapAfrica}
							alt="map of the continent"
						/>
					</div>
					<div className="grid grid-cols-6 md:max-w-[50%] md:min-w-[50%]">
						<h4 className="h4 leading-none font-druk gap-4 col-start-2 col-span-4 self-center">
							{country?.name?.common}, a country in {country?.subregion}
						</h4>
						<p className="p font-gta col-start-2 col-span-4 self-center ">
							A person from {country?.name?.common} is referred to as{" "}
							{country?.demonyms?.eng?.f}. The country{" "}
							{country?.landlocked?.true ? "do not have" : "has"} its waterbody{" "}
							{country?.landlocked?.true ? "unlike" : "like"} most other
							countries. It shares border with{" "}
							{country?.borders?.length > 0 ? length : "no"} neighbours. People
							speak {languageNames[0]} here and so remember to learn a word or
							two in {languageNames[0]}. And, important - they drive on the{" "}
							{country?.car?.side} side of the road. If you are not comfortable,
							better to hire a chauffer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
