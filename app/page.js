"use client";
import Image from "next/image";
import Buttons from "./components/buttons";
import Navbar from "./molecules/navbar";
import twitter from "/public/icons/twitterIcon.webp";

export default function Home() {
	return (
		<main className="">
			<Navbar />
			<div className="w-full font-druk"> does this work?</div>
			<Buttons
				children="Search"
				icon={false}
				ctaBtn={true}
				className="btn-CTA"
				onClick={() => console.log("open modal")}
			/>
			<Buttons
				icon={true}
				src={twitter}
				onClick={() => print("Done icon+button")}
			/>
		</main>
	);
}
