"use client";

import Navbar from "./components/navbar/navbar";
import HeroComponent from "./components/heroComponent/heroComponent";
import { MyContext, MyContextProvider } from "./context/context";
import { useContext } from "react";

export default function Home() {
	return (
		<main className="flex flex-col justify-center content-center min-h-screen">
			<Navbar />
			<HeroComponent />
		</main>
	);
}
