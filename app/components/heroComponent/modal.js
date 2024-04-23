"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Link from "next/link";
import Buttons from "@/app/atoms/buttons";
import crossIcon from "/public/icons/crossIcon.webp";
import { MyContext } from "../../context/context";
import { useFetchData } from "@/app/hooks/fetchData";

function Modal() {
	const { info, text, setText, loading, error, setError } = useFetchData(); // FetchDataProvider();

	const { myState, setMyState } = useContext(MyContext);

	const searchParams = useSearchParams();
	const router = useRouter();
	const modal = searchParams.get("modal");
	const pathname = usePathname();

	const handleSubmit = () => {
		const matchedCountry = info.find(
			(country) => country.name.common.toLowerCase() === text.toLowerCase()
		);
		if (matchedCountry) {
			router.push(`/country/${encodeURIComponent(matchedCountry.name.common)}`);
			console.log(text);
		} else {
			setError("No matching country found. Try again"); // Setting an error state
			console.log("No match found");
		}
	};

	const handleChange = (event) => {
		setText(event.target.value);
		if (error) setError("");
	};

	return (
		<>
			{modal && (
				<section className="fixed left-0 top-0 w-screen h-screen bg-[#DBCCFC] z-50 overflow-auto backdrop-blur flex flex-col justify-center items-center px-2">
					<div className="flex flex-col">
						<Link href={pathname} className="self-end">
							<Buttons icon={true} src={crossIcon} />
						</Link>
						<h2 className="h2 font-druk text-center">
							SEARCH FOR YOUR DESTINATION
						</h2>

						<div
							key={{ error }}
							initial={{ height: "fit" }}
							animate={{ height: "auto" }}
							className="bg-white m-auto p-5 rounded-lg w-full overflow-hidden"
						>
							<div className="flex flex-col relative">
								<div className="flex flex-col px-2 gap-4">
									<p className="small font-bold tracking-tight font-gta pl-3">
										Destination Country
									</p>

									<input
										type="search"
										placeholder="Search your country"
										onChange={handleChange}
										value={text}
										required
										className="small text-slate-800 rounded-lg border border-slate-400 focus:border-[#794DFF] w-full p-3"
									/>

									<div className="text-black bg-transparent font-gta pl-3">
										{info.slice(0, 1).map(
											(country) =>
												text !== country.name.common && (
													<ul
														className="overflow-hidden"
														key={country.name.common}
													>
														<Link
															key={country.name.common}
															href={country}
															onClick={() => {
																setText(country.name.common);
																setMyState({
																	selectedCountry: country,
																});
															}}
														>
															<li className="h-fit absolute">
																{country.flag}
																{country.name.common}
															</li>
														</Link>
													</ul>
												)
										)}
										{error && (
											<p className="text-red-500 small absolute font-bold tracking-tight font-gta pl-3">
												{error}
											</p>
										)}
									</div>
								</div>
								<div className="self-center pt-[1.5rem] pl-2">
									<Buttons
										onClick={handleSubmit}
										ctaBtn={true}
										children="Look Up"
										className="bg-black text-white rounded-md p-2
										  end-2.5 bottom-2.5 focus:ring-blue-300 hover:bg-black-800 focus:ring-4  focus:outline-none  font-medium text-sm px-4 py-2"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default Modal;
