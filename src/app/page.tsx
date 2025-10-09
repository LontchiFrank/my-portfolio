/** @format */

"use client";

import Navbar from "@/components/Navbar";
import TypingText from "@/components/Typing";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import EducationTimeline from "@/components/Education";
import SkillsSection from "./pages/Skills";
import Project from "./pages/Project";

const clicker = Clicker_Script({
	weight: "400", // this font only has one weight
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div
			className=" w-[100vw] h-[100vh]  "
			style={{
				backgroundImage: "url('./bg1.webp')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			// bg-[#0E0B07]
		>
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
					<div className="md:w-1/2 w-full md:h-full h-64 flex justify-start items-center">
						<h2 className="text-white md:text-5xl text-4xl md:text-left text-center">
							Hello 👋🏿
							<br className="md:block hidden" /> I&lsquo;m{" "}
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
				<div className="w-full flex justify-center bg-amber-600">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white absolute -bottom-12 z-20">
						About Me
					</h1>
				</div>
			</div>
			{/* <h3 className="text-white">Hello 👋🏿</h3> */}
			{/* bg-white/30 backdrop-blur-md border border-white/40   absolute md:-bottom-[23rem] -bottom-[46rem] z-30  */}
			<div className="w-full relative  bg-[#0e0e0e]  h-full pt-12">
				{/* <div className="container mx-auto max-w-6xl pt-20">
					<About />
				</div> */}
				{/* <div className="w-full flex justify-center ">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white ">
						About Me
					</h1>
				
				</div> */}
				<div
					className={`relative max-w-6xl container mx-auto rounded-2xl 
					bg-[#141414cc] p-6 flex flex-col justify-center items-center
					before:content-[''] before:absolute before:inset-0 before:rounded-2xl 
					before:[background:radial-gradient(circle_at_right_top,rgba(255,255,255,0.1),transparent_80%)]
					before:z-0`}>
					<div className="grid md:grid-cols-3 grid-cols-2 text-white ">
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center ">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								🌏
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								United Kingdom 🇬🇧
							</span>
						</div>
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								🗣️
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								English, French & Dutsch
							</span>
						</div>
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								💻
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								Software Developer
							</span>
						</div>
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								🚀
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								Determined
							</span>
						</div>
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								🎓
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								University of Buea
							</span>
						</div>
						<div className="py-5 px-4 flex md:flex-row flex-col gap-2 items-center">
							<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors duration-300">
								✨
							</span>
							<span className="text-center md:text-md text-sm font-bold">
								Techie
							</span>
						</div>
					</div>
					<div className=" w-full flex justify-center flex-col items-center gap-2">
						{/* Logo placeholder: Rounded (rounded-full), size (w-12 h-12), darker background (bg-neutral-800), center text. */}
						{/* <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl flex-shrink-0">
							<Image
								src="/3.png" // replace with your image
								alt="About me"
								fill
								className="object-cover"
							/>
						</div> */}
						<div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
							<Image
								src="/dev.jpg" // replace with your image
								alt="About me"
								fill
								className="object-cover"
							/>
						</div>

						{/* Title and details: Margin left (ml-4). */}
						<div className="ml-4 text-white">
							<p className="md:text-md text-sm mb-4">
								Hi, I’m{" "}
								<span className={` text-[#FFAE00] font-semibold`}>Franky</span>,
								a passionate Software Developer. I love building web
								applications that are fast, responsive, and user-friendly. I
								enjoy learning new technologies, solving problems, and turning
								ideas into real-world solutions. My goal is to craft digital
								experiences that delight users and make an impact.
							</p>

							<p className="md:text-md text-sm"></p>
						</div>
					</div>
				</div>
				<EducationTimeline />
				<div className="w-full flex justify-center bg-[#0e0e0e]">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white ">
						Skills
					</h1>
				</div>
				<SkillsSection />
				<Project />
			</div>
		</div>
	);
}
