/** @format */

"use client";

import Navbar from "@/components/Navbar";
import TypingText from "@/components/Typing";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

import ReactTypingEffect from "react-typing-effect";
import About from "./pages/About";
import { Clock, Globe, GraduationCap, MapPin } from "lucide-react";

const clicker = Clicker_Script({
	weight: "400", // this font only has one weight
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className=" w-[100vw] h-[100vh] bg-[#0E0B07]">
			<Navbar />

			<div className="container mx-auto max-w-6xl px-8 pt-20 w-full h-full ">
				<div className={`${clicker.className} text-[#FFAE00] text-2xl `}>
					<p> &lt; h1 &gt; </p>
				</div>
				<p
					className={`${clicker.className} text-[#FFAE00] md:block hidden text-2xl absolute top-[20%] left-0`}>
					{" "}
					&lt; h2 &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] md:block hidden text-2xl absolute top-[20%] right-0`}>
					{" "}
					&lt; br /&gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] md:block hidden text-2xl absolute top-[50%] right-20`}>
					{" "}
					&lt;/ p &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] md:block hidden text-2xl absolute top-[80%] right-40`}>
					{" "}
					&lt;/ title &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] text-2xl  absolute top-[10%] right-[20%]`}>
					{" "}
					&lt; html &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] md:block hidden text-2xl absolute top-[40%] right-[60%]`}>
					{" "}
					&lt; footer &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] text-2xl absolute md:top-[40%] top-[30%] left-30`}>
					{" "}
					&lt; body &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] text-2xl absolute top-[70%] left-30`}>
					{" "}
					&lt;/ head &gt;{" "}
				</p>
				<p
					className={`${clicker.className} text-[#FFAE00] text-2xl absolute top-[90%] left-[50%]`}>
					{" "}
					&lt; div &gt;{" "}
				</p>
				<div className="w-full h-full flex md:flex-row flex-col">
					{/* <div className=" md:w-1/2 w-full md:h-full h-64 flex justify-start items-center">
						<h2 className=" text-white md:text-5xl text-4xl md:text-left text-center">
							Hello 👋🏿
							<br className="md:block hidden" /> I'm{" "}
							<span
								className={`${clicker.className} text-[#FFAE00] md:text-6xl text-5xl `}>
								Franky
							</span>
							, <br className="md:block hidden" />
							<span style={{ color: "rgb(255, 174, 0)" }}>Soft</span>ware Devel
							<span style={{ color: "rgb(255, 174, 0)" }}>oper</span>.
						</h2>
						
					</div> */}
					<div className="md:w-1/2 w-full md:h-full h-64 flex justify-start items-center">
						<h2 className="text-white md:text-5xl text-4xl md:text-left text-center">
							Hello 👋🏿
							<br className="md:block hidden" /> I'm{" "}
							<span
								className={`${clicker.className} text-[#FFAE00] md:text-6xl text-5xl font-bold`}>
								Franky
							</span>
							, <br className="md:block hidden" />
							<TypingText
								phrases={[
									[
										{ text: "Soft", color: "#FFAE00" },
										{ text: "ware Devel" },
										{ text: "oper", color: "#FFAE00" },
									],
									[
										{ text: "Front", color: "#FFAE00" },
										{ text: "end Devel" },
										{ text: "oper", color: "#FFAE00" },
									],
									[
										{ text: "Full", color: "#FFAE00" },
										{ text: " Stack Devel" },
										{ text: "oper", color: "#FFAE00" },
									],
								]}
								speed={80}
								eraseDelay={2000}
								startDelay={500}
							/>
						</h2>
					</div>
					{/* <div className="md:w-1/2 w-full h-full flex items-start md:items-center">
						<Image src="/suits.png" alt="me" width={1000} height={1000} />
					</div> */}
					<div className="relative md:w-1/2 w-full flex justify-center items-center">
						{/* Orange background box */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="absolute w-80 h-[25rem] md:w-[26rem] md:h-[36rem] bg-[#FFAE00] rounded-[2rem] z-0"
						/>

						{/* Circle on the left side */}
						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{ repeat: Infinity, duration: 3 }}
							className="absolute -left-4  top-[25%] w-12 h-12 bg-[#FFAE00] rounded-full md:block hidden"
						/>
						{/* Circle on the left side in small screens */}
						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{ repeat: Infinity, duration: 3 }}
							className="absolute -left-5 top-[15%] w-8 h-8 bg-[#FFAE00] rounded-full md:hidden block"
						/>

						{/* Waveform lines at bottom right */}
						<div className="absolute md:-right-0 -right-4 top-[75%] flex flex-row gap-2 rotate-90 ">
							{[0, 1, 2].map((i) => (
								<React.Fragment key={i}>
									<motion.div
										key={`desktop-${i}`}
										animate={{ height: ["10px", "50px", "20px"] }}
										transition={{
											repeat: Infinity,
											duration: 1.2,
											delay: i * 0.2,
											ease: "easeInOut",
										}}
										className="w-2 bg-[#FFAE00] rounded-md md:block hidden"
									/>
									<motion.div
										key={`mobile-${i}`}
										animate={{ height: ["10px", "30px", "10px"] }}
										transition={{
											repeat: Infinity,
											duration: 1.2,
											delay: i * 0.2,
											ease: "easeInOut",
										}}
										className="w-2 bg-[#FFAE00] rounded-md md:hidden block"
									/>
								</React.Fragment>
							))}
						</div>
						{/* Waveform lines at bottom right in small screens */}
						{/* <div className="absolute -right-4 top-[80%] flex flex-row gap-2 rotate-90 md:hidden block">
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									animate={{ height: ["10px", "30px", "10px"] }}
									transition={{
										repeat: Infinity,
										duration: 1.2,
										delay: i * 0.2,
										ease: "easeInOut",
									}}
									className="w-2 bg-[#FFAE00] rounded-md"
								/>
							))}
						</div> */}

						{/* Your image in front */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, delay: 0.3 }}
							className="relative z-10 mb-[7.3rem] pb-0 md:block hidden">
							<Image
								src="/4.png" // replace with your photo path
								alt="Franky"
								width={370}
								height={370}
								className="object-contain"
							/>
						</motion.div>

						{/* Your image in front */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, delay: 0.3 }}
							className="relative z-10 mb-[4.3rem] md:hidden block">
							<Image
								src="/4.png" // replace with your photo path
								alt="Franky"
								width={250}
								height={250}
								className="object-contain"
							/>
						</motion.div>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center">
				<div
					className="w-[70%] container mx-auto  h-32 absolute -bottom-16 rounded-2xl z-30
					bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex justify-center ">
					<div className="p-10">
						<div className="flex justify-center">
							{" "}
							<MapPin color="white" className="text-[8rem]" />
						</div>
						<span className="text-center text-2xl font-bold">Cameroon 🇨🇲</span>
					</div>
					<div className="p-10">
						<div className="flex justify-center">
							{" "}
							<GraduationCap color="white" className="text-[8rem]" />
						</div>
						<span className="text-center text-2xl font-bold">
							University of Buea
						</span>
					</div>
					<div className="p-10">
						<div className="flex justify-center">
							{" "}
							<Globe color="white" className="text-[8rem]" />
						</div>
						<span className="text-center text-2xl font-bold">
							English, French & German
						</span>
					</div>
					<div className="p-10">
						<div className="flex justify-center">
							{" "}
							<Clock color="white" className="text-[8rem]" />
						</div>
						<span className="text-center text-2xl font-bold">GMT+1</span>
					</div>
				</div>
			</div>
			<div className="w-full relative bg-[#eae0d5] h-full">
				<div className="container mx-auto max-w-6xl pt-20">
					<About />
				</div>
			</div>
		</div>
	);
}
