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
		<div className="relative bg-black min-h-fit">
			<div className="p-4 md:px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col justify-center items-center">
					<h4 className="h4 font-druk text-white text-center">MONEY MATTERS</h4>
					<p className="p font-gta text-white text-center">
						Their currency is called{" "}
						<em className="text-[#BEF300]">{currencyNames[0].name}</em>. Watch
						out for the symbol{" "}
						<strong className="text-[#794DFF]">
							{" "}
							{currencyNames[0].symbol}{" "}
						</strong>{" "}
						for money
					</p>
				</div>
			</div>
		</div>
	);
}
