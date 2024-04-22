"use client";

import { useContext } from "react";
import { MyContext } from "../../context/context";

export default function Currency() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	console.log(country);

	if (!country?.name?.common) {
		return <></>;
	}

	const currencyCodes = Object.keys(country.currencies);
	const currencyNames = Object.values(country.currencies);

	return (
		<div className="relative bg-black max-h-screen">
			<div className="px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col justify-center items-center">
					<h4 className="h4 font-druk text-white">MONEY MATTERS</h4>
					<p className="p font-gta text-white">
						Their currency is called{" "}
						<em className="text-[#BEF300]">{currencyNames[0].name}</em>. Watch
						out for the symbol "{currencyNames[0].symbol}" for money
					</p>
				</div>
			</div>
		</div>
	);
}
