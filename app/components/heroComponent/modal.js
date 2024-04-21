"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FetchDataProvider } from "@/app/context/context";
import Link from "next/link";
import Buttons from "@/app/atoms/buttons";
import crossIcon from "/public/icons/crossIcon.webp";
import { MyContext } from "../../context/context";
import { useFetchData } from "@/app/hooks/fetchData";

function Modal() {
	const { info, text, setText, loading, error } = useFetchData(); // FetchDataProvider();

	const { myState, setMyState } = useContext(MyContext);

	const searchParams = useSearchParams();
	const router = useRouter();
	const modal = searchParams.get("modal");
	const pathname = usePathname();

	const handleSubmit = () => {
		router.push(`/country/${encodeURIComponent(text)}`);
		console.log(text);
	};

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			{modal && (
				<section className="fixed left-0 top-0 w-screen h-screen bg-[#DBCCFC] z-50 overflow-auto backdrop-blur flex flexa-col justify-center items-center">
					<div className="">
						<Link href={pathname}>
							<Buttons
								icon={true}
								src={crossIcon}
								className="justify-self-end"
							/>
						</Link>
						<h2 className="h2 font-druk text-center">
							SEARCH FOR YOUR DESTINATION
						</h2>
						<div className="bg-white m-auto p-8 rounded-lg">
							<div className="flex flex-row ontent-end">
								<div className="flex flex-col">
									<p className="small font-bold tracking-tight font-gta">
										Destination Country
									</p>

									<input
										className="text-slate-800 rounded-lg border border-black focus:border-[#794DFF] w-[25vw] p-2 min-w-fit"
										type="search"
										placeholder="search your country"
										onChange={handleChange}
										value={text}
									/>
									<div className="text-black">
										{info.slice(0, 5).map(
											(country) =>
												text !== country.name.common && (
													<ul key={country.name.common}>
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
															<li>
																{country.flag}
																{country.name.common}
															</li>
														</Link>
													</ul>
												)
										)}
									</div>
								</div>
								<div className="">
									<Buttons
										onClick={handleSubmit}
										ctaBtn={true}
										children="submit"
										className="bg-black text-white rounded-md p-2"
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
