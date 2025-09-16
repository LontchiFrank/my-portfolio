/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clicker_Script } from "next/font/google";

const clicker = Clicker_Script({
	weight: "400", // this font only has one weight
	subsets: ["latin"],
});

export default function About() {
	return (
		<section className=" flex flex-col md:flex-row items-center justify-center p-8  text-[#0E0B07]">
			{/* Text section */}
			<motion.div
				className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}>
				<h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
				<p className="text-lg md:text-xl mb-4">
					Hi, I’m{" "}
					<span className={` text-[#FFAE00] font-semibold`}>Franky</span>, a
					passionate Software Developer. I love building web applications that
					are fast, responsive, and user-friendly.
				</p>

				<p className="text-lg md:text-xl">
					I enjoy learning new technologies, solving problems, and turning ideas
					into real-world solutions. My goal is to craft digital experiences
					that delight users and make an impact.
				</p>
			</motion.div>

			{/* Animated image */}
			<motion.div
				className="md:w-1/2 w-full flex justify-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}>
				<div className="relative w-64 h-64 md:w-80 md:h-[30rem] rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFAE00]">
					<Image
						src="/3.png" // replace with your image
						alt="About me"
						fill
						className="object-cover"
					/>
				</div>
			</motion.div>
		</section>
	);
}
