"use client";

import Navbar from "./components/navbar/navbar";
import HeroComponent from "./components/heroComponent/heroComponent";
import { MyContext, MyContextProvider } from "./context/context";
import { useContext } from "react";
import Footer from "./components/footer/footer";
import SearchBar from "./components/heroComponent/searchBar";

export default function Home() {
	return (
		<main className="flex flex-col justify-center content-center">
			<HeroComponent />
		</main>
	);
}
