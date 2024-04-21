import { useState, useEffect } from "react";

// Custom hook for fetching data
export function useFetchData() {
	const [text, setText] = useState("");
	const [info, setInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!text?.trim()) return; // Also handles spaces as empty queries

			try {
				const response = await fetch(
					`https://restcountries.com/v3.1/name/${text}`
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				console.log(data); // Debugging log to inspect the structure

				// Check if data is an array before setting it
				if (Array.isArray(data)) {
					setInfo(data);
				} else {
					console.error("Expected an array of countries, but got:", data);
					setInfo([]); // Reset or set to a default array to avoid type errors
					setError(null);
				}
			} catch (error) {
				setError(error.message);
				console.log("Failed to fetch countries", error);
				setInfo([]); // Reset on error
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [text]);

	return { text, setText, info, loading, error };
}
