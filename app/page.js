"use client";
import Image from "next/image";
import Buttons from "./components/buttons";
import Navbar from "./molecules/navbar/navbar";
import twitter from "/public/icons/twitterIcon.webp";

import Test from "./molecules/navbar/test";

export default function Home() {
	return (
		<main className="flex flex-col content-center min-h-screen">
			<Navbar />
		</main>
	);
}
