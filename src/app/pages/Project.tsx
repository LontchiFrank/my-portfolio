/** @format */

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// const companyProjects = [
// 	{
// 		id: 1,
// 		title: "Mansar Website",
// 		description:
// 			"A responsive and modern corporate website built for Mansar Company, focusing on SEO and performance.",
// 		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
// 		image: "/Mansar.png",
// 		link: "https://usemansar.xyz/", // replace with actual company site
// 	},
// 	{
// 		id: 2,
// 		title: "DivineTech Website",
// 		description:
// 			"A dynamic company website showcasing tech solutions and digital services, optimized for mobile and desktop.",
// 		tech: ["Next.js", "Tailwind CSS", "Vercel"],
// 		image: "/divine.png",
// 		link: "https://divinetech.vercel.app/",
// 	},
// 	{
// 		id: 3,
// 		title: "YUP Website",
// 		description:
// 			"A dynamic company website showcasing tech solutions and digital services, optimized for mobile and desktop.",
// 		tech: ["Next.js", "Tailwind CSS", "Vercel"],
// 		image: "/yup.png",
// 		link: "https://yup-web.vercel.app/market",
// 	},
// ];

const personalProjects = [
	{
		id: 5,
		title: "Mansar Website",
		description:
			"A responsive and modern corporate website built for Mansar Company, focusing on SEO and performance.",
		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
		image: "/Mansar.png",
		link: "https://usemansar.xyz/", // replace with actual company site
	},
	{
		id: 6,
		title: "DivineTech Website",
		description:
			"A dynamic company website showcasing tech solutions and digital services, optimized for mobile and desktop.",
		tech: ["Next.js", "Tailwind CSS", "Vercel"],
		image: "/divine.png",
		link: "https://divinetech.vercel.app/",
	},

	{
		id: 7,
		title: "YUP Website",
		description:
			"A dynamic company website showcasing tech solutions and digital services, optimized for mobile and desktop.",
		tech: ["Next.js", "Tailwind CSS", "Vercel"],
		image: "/yup.png",
		link: "https://yup-web.vercel.app/market",
	},
	{
		id: 1,
		title: "Portfolio Website",
		description:
			"A modern and responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
		image: "/pic.jpg",
		link: "https://pixabay.com/photos/man-face-cigarette-portrait-2179358/",
		code: "https://github.com/your-username/portfolio", // example
	},
	{
		id: 2,
		title: "Cybersecurity Dashboard",
		description:
			"An interactive dashboard that visualizes threat data and network activity in real-time.",
		tech: ["Next.js", "Chart.js", "Tailwind CSS"],
		image: "/poexa.png",
		link: "https://pixabay.com/photos/man-face-cigarette-portrait-2179358/",
		code: "https://github.com/your-username/cybersecurity-dashboard",
	},
	{
		id: 3,
		title: "Restaurant Management Application",
		description:
			"A dynamic company website showcasing tech solutions and digital services, optimized for mobile and desktop.",
		tech: ["Next.js", "Tailwind CSS", "Vercel"],
		image: "/african.png",
		link: "https://fodjo-resto-lnf6.vercel.app/",
	},
	{
		id: 4,
		title: "Casino UI",
		description:
			"An interactive dashboard that visualizes threat data and network activity in real-time.",
		tech: ["Next.js", "Chart.js", "Tailwind CSS"],
		image: "/casino.png",
		link: "https://casino-gules.vercel.app/",
		code: "https://github.com/your-username/cybersecurity-dashboard",
	},
];

const ProjectCard = ({
	project,
	index,
	showCodeButton = true,
}: {
	project: any;
	index: number;
	showCodeButton?: boolean;
}) => (
	<motion.div
		key={project.id}
		className="group relative overflow-hidden bg-gradient-to-br from-[#141414] to-[#1a1a1a]
			rounded-2xl border border-transparent hover:border-[#FFAE00]
			shadow-lg hover:shadow-[0_0_25px_#FFAE00] transition-all duration-300
			w-full max-w-sm text-left"
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay: index * 0.15 }}
		whileHover={{ scale: 1.03 }}>
		{/* Image with overlay */}
		<div className="relative h-48 w-full overflow-hidden">
			<Image
				src={project.image}
				alt={project.title}
				fill
				className="object-cover transition-transform duration-500 group-hover:scale-110"
			/>
			{/* Overlay layer */}
			<div
				className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 
					opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<Link
					href={project.link}
					target="_blank"
					className="bg-[#FFAE00] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#ffb833] transition">
					Live Demo
				</Link>

				{/* Only show this button for personal projects */}
				{showCodeButton && project.code && (
					<Link
						href={project.code}
						target="_blank"
						className="bg-black border border-[#FFAE00] text-[#FFAE00] font-semibold px-4 py-2 rounded-lg hover:bg-[#FFAE00] hover:text-black transition">
						View Code
					</Link>
				)}
			</div>
		</div>

		{/* Card content */}
		<div className="p-6">
			<h3 className="text-xl font-semibold mb-2 text-[#FFAE00]">
				{project.title}
			</h3>
			<p className="text-neutral-300 text-sm mb-4">{project.description}</p>
			<div className="flex flex-wrap gap-2">
				{project.tech.map((tech: string, i: number) => (
					<span
						key={i}
						className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">
						{tech}
					</span>
				))}
			</div>
		</div>
	</motion.div>
);

export default function ProjectsSection() {
	const [showAll, setShowAll] = useState(false);
	// const allProjects = [...personalProjects];
	// Show 6 or all depending on state
	const displayedProjects = showAll
		? personalProjects
		: personalProjects.slice(0, 6);

	return (
		<section id="projects" className="bg-[#0e0e0e] text-white py-20">
			<div className="max-w-6xl mx-auto px-4 text-center">
				{/* Section title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-6xl font-bold mb-16">
					PROJECTS
				</motion.h2>

				{/* Company Websites */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
						<span className="h-[2px] w-12 bg-white"></span> Featured{" "}
						<span className="text-[#FFAE00]">Websites</span>
					</h2>
					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
						{companyProjects.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								showCodeButton={false}
							/>
						))}
					</div> */}
				</div>

				{/* Personal Projects */}
				<div>
					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
						{personalProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div> */}
					{/* Project grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
						{displayedProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>

					{/* Show more button */}
					{personalProjects.length > 6 && (
						<div className="mt-10 flex justify-center cursor-pointer">
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-[#FFAE00] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#ffb833] transition-all duration-300">
								{showAll ? "Show Less" : "View All Projects"}
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
