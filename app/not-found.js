import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex h-fit max-h-screen flex-col justify-center content-center items-center">
			<h2 className="h2 self-center">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
