import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
export default function AnimatedHamburger() {
	const [active, setActive] = useState(false);

	return (
		<MotionConfig
			transition={{
				duration: "0.5",
				ease: "easeInOut",
			}}
		>
			<motion.button
				initial={false}
				onClick={() => setActive((pv) => !pv)}
				className="relative h-10 w-20 transition-colors"
				animate={active ? "open" : "closed"}
			>
				<motion.span
					style={{
						left: "50%",
						top: "35%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-1 w-10 bg-black"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "50%",
						top: "50%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-1 w-10 bg-black"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "calc(50% + 10px)",
						bottom: "35%",
						x: "-50%",
						y: "50%",
					}}
					className="absolute h-1 w-5 bg-black"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							left: "50%",
							bottom: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							left: "calc(50% + 10px)",
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
}
