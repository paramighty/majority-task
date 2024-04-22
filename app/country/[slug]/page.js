"use client";

import CountryIntro from "./countryIntro";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import CountryContinent from "./countryContinent";
import Subscription from "./subscription";
import Currency from "./currency";

export default function Country({ params }) {
	const { myState, setMyState } = useContext(MyContext);

	useEffect(() => {
		const fetchCountry = async () => {
			const name = myState?.selectedCountry?.name?.common;
			if (!name && !!params?.slug) {
				const response = await fetch(
					`https://restcountries.com/v3.1/name/${params.slug}`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();

				const country = data[0];
				setMyState({
					selectedCountry: country,
				});
			}
		};

		fetchCountry();
	}, []);

	return (
		<div>
			{/* {myState?.selectedCountry?.name?.common} */}
			{/* My Post: {params.slug} */}
			<CountryIntro />
			<CountryContinent />
			<Currency />
			<Subscription />
		</div>
	);
}
