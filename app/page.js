"use client";
import Navbar from "./molecules/navbar/navbar";
import HeroComponent from "./components/heroComponent/heroComponent";

export default function Home() {
	return (
		<main className="flex flex-col justify-center content-center min-h-screen">
			<Navbar />
			<HeroComponent />
		</main>
	);
}
