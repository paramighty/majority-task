"use client";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function GlobalError({ error, reset }) {
	return (
		<html>
			<body className="min-h-screen">
				<Navbar />
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
				<Footer />
			</body>
		</html>
	);
}
