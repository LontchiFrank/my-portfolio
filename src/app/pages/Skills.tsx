/** @format */

import React, { ReactElement } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaDocker,
	FaGitAlt,
	FaLinux,
	FaFigma,
	FaAws,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiPostgresql,
	SiMongodb,
	SiGraphql,
	SiJest,
	SiWebpack,
	SiRedux,
	SiFirebase,
	SiVercel,
	SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
// Define the structure for each skill
interface Skill {
	icon: ReactElement;
	name: string;
}

// Define props for SkillCard
interface SkillCardProps {
	icon: React.ElementType; // For passing a React component as the icon
	title: string;
	skills: Skill[];
	color?: string; // optional in case you don't always pass it
}

const SkillCard: React.FC<SkillCardProps> = ({
	icon: Icon,
	title,
	skills,
	color,
}) => (
	<div className="group relative overflow-hidden bg-gradient-to-br from-[#141414] to-[#1a1a1a]   hover:scale-[1.02] transition-all duration-300 border border-transparent  hover:border-[#FFAE00] rounded-2xl">
		<div className="absolute inset-0 before:[background:radial-gradient(circle_at_right_top,rgba(255,255,255,0.1),transparent_80%)]  animate-shimmer"></div>
		<div className="p-6 relative z-10">
			<div className="flex items-center gap-4 mb-6">
				<div
					className={`p-3 rounded-xl before:[background:radial-gradient(circle_at_right_top,rgba(255,255,255,0.1),transparent_80%)] ${
						color ?? ""
					} group-hover:scale-110 transition-transform duration-300`}>
					<Icon className="w-8 h-8" />
				</div>
				<h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
					{title}
				</h3>
			</div>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill, index) => (
					<Badge
						key={index}
						variant="outline"
						className="group/badge relative before:[background:radial-gradient(circle_at_right_top,rgba(255,255,255,0.1),transparent_80%)] hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
						<span className="transform group-hover/badge:scale-110 transition-transform duration-300">
							{skill.icon}
						</span>
						<span className="font-medium">{skill.name}</span>
					</Badge>
				))}
			</div>
		</div>
	</div>
);

const SkillsSection = () => {
	const skillCategories = [
		{
			icon: Code2,
			title: "Frontend Development",
			color: "text-blue-400",
			skills: [
				{ name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
				{
					name: "Next.js",
					icon: <SiNextdotjs className="w-4 h-4 text-white" />,
				},
				{
					name: "TypeScript",
					icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
				},
				{
					name: "Tailwind CSS",
					icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
				},
				{
					name: "HTML5",
					icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
				},
				{
					name: "CSS3",
					icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
				},
			],
		},
		{
			icon: Database,
			title: "Backend Development",
			color: "text-green-400",
			skills: [
				{
					name: "Node.js",
					icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
				},
				{
					name: "MongoDB",
					icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
				},
				{
					name: "REST APIs",
					icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
				},
				{
					name: "GraphQL",
					icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
				},
			],
		},

		{
			icon: Cpu,
			title: "Tools & Technologies",
			color: "text-pink-400",
			skills: [
				{
					name: "VS Code",
					icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
				},
				{
					name: "Webpack",
					icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
				},
				{ name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
				{
					name: "Firebase",
					icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
				},
				{ name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
				{ name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
			],
		},
		{
			icon: Cloud,
			title: "Cloud & DevOps",
			color: "text-orange-400",
			skills: [
				{
					name: "Docker",
					icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
				},
				{ name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
				{ name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
			],
		},
	];

	return (
		<main className="pt-15 lg:pt-0 text-white min-h-screen relative bg-[#0e0e0e]">
			{/* Grid Background */}
			<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

			<section className="container mx-auto px-4 py-11 relative z-10">
				<div className="flex justify-center items-center ">
					<IconCloudDemo />
				</div>
				{/* max-w-6xl  */}
				<div className="max-w-6xl mx-auto flex justify-center">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
						{skillCategories.map((category, index) => (
							<SkillCard
								key={index}
								icon={category.icon}
								title={category.title}
								skills={category.skills}
								color={category.color}
							/>
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				@keyframes shimmer {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(100%);
					}
				}
				.animate-shimmer {
					animation: shimmer 2s infinite;
				}
				.bg-grid-pattern {
					background-image: linear-gradient(
							to right,
							rgba(100, 100, 255, 0.1) 1px,
							transparent 1px
						),
						linear-gradient(
							to bottom,
							rgba(100, 100, 255, 0.1) 1px,
							transparent 1px
						);
					background-size: 30px 30px;
				}
			`}</style>
		</main>
	);
};

export default SkillsSection;
