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
		return null;
	}

	const languageNames = Object.values(country?.languages || {});
	const regionDetails = country?.subregion || "mystry";
	const demonyms = country?.demonyms?.eng?.f || "your friend";
	const hasWaterbody = country?.landlocked ? "do not have" : "has";
	const relativeToWater = country?.landlocked ? "unlike" : "like";
	const driveSide = country?.car?.side || "unknown";
	const borderingCountries = country?.borders?.length
		? `${country.borders.length} neighbours`
		: "no neighbours";
	const languageText = languageNames.length
		? `People speak ${languageNames[0]} here and so remember to learn a word or two in ${languageNames[0]}`
		: "There is no specific language that people speak here.";

	if (country.subregion === "Africa") {
		console.log("it is a great match");
	}

	return (
		<div className="relative bg-[#DBCCFC] min-h-fit">
			<div className="p-4 md:px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col md:flex-row justify-center">
					<div className="grid md:max-w-[50%] md:min-w-[50%] grid-cols-1 md:grid-cols-6 ">
						<Image
							className="md:col-start-2 md:col-span-4 self-center justify-self-center"
							src={mapAfrica}
							alt="map of the continent"
						/>
					</div>

					<div className="grid grid-cols-6 md:max-w-[50%] md:min-w-[50%]">
						<h4 className="h4 leading-none font-druk gap-4 col-start-2 col-span-4 text-center">
							{country?.name?.common}, a country in {regionDetails}
						</h4>
						<p className="p font-gta col-start-2 col-span-4 text-center">
							If you meet someone from {country?.name?.common}, you can refer to
							them as {demonyms}. The country {hasWaterbody} its waterbody{" "}
							{relativeToWater} most other countries. It shares border with
							{borderingCountries}. {languageText}. And, important -{" "}
							{country?.car
								? `they drive on the ${country?.car.side} side of
							the road.`
								: "they don't have much roads there."}{" "}
							If you are not comfortable, better to hire a chauffer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
