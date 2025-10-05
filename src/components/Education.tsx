/** @format */

"use client";
import { motion } from "framer-motion";
import { School, University } from "lucide-react";
import { useState } from "react";

type EducationItem = {
	id: number;
	title: string;
	school: string;
	description: string;
	date: string;
	achievements: string[];
	icon: React.ReactNode;
};

const education: EducationItem[] = [
	{
		id: 1,
		title: "Matriculation",
		school: "G.H.S Limbe",
		description: "Completed with Science stream",
		date: "2013 – 2018",
		achievements: [
			"Enhanced ability to adapt to programming",
			"Built strong foundation in core subjects",
		],
		icon: <School />,
	},
	{
		id: 2,
		title: "Bachelor's Degree",
		school: "University Of Buea, Cameroon 🇨🇲",
		description: "Specialized in Software Engineering with Merit",
		date: "2018 – 2022",
		achievements: [
			"Strengthened critical thinking and analytical skills.",
			"   Improved communication and teamwork while working on group projects.",
		],
		icon: <School />,
	},
	{
		id: 3,
		title: "Master's Degree",
		school: "Edge Hill University, Ormskirk 🇬🇧",
		description: "Currently undergoing Msc Cybersecurity",
		date: "2025 – Present",
		achievements: [
			"  Gaining knowledge of cybersecurity frameworks and standards",
			"Developing advanced expertise in network security, ethical hacking, and penetration testing.",
		],
		icon: <University />,
	},
];

export default function EducationTimeline() {
	const [hoveredId, setHoveredId] = useState<number | null>(null);

	return (
		<section className="bg-[#0e0e0e] text-white py-20">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
					<span className="h-[2px] w-12 bg-white"></span> EDUCATION{" "}
					<span className="text-[#FFAE00]">JOURNEY</span>
				</h2>

				<div className="relative">
					{/* Timeline vertical line */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-neutral-700"></div>

					<div className="space-y-16">
						{education.map((edu, index) => {
							const isHovered = hoveredId === edu.id;

							return (
								<div
									key={edu.id}
									className={`relative flex w-full ${
										index % 2 === 0 ? "justify-start" : "justify-end"
									}`}
									onMouseEnter={() => setHoveredId(edu.id)}
									onMouseLeave={() => setHoveredId(null)}>
									{/* Timeline dot */}
									<div className="absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center font-bold">
										{edu.id}
									</div>

									{/* Card */}
									<motion.div
										initial={false}
										animate={{
											height: isHovered ? 250 : 150,
										}}
										transition={{ duration: 0.35, ease: "easeInOut" }}
										className={`overflow-hidden w-[45%] bg-gradient-to-br from-[#141414] to-[#1a1a1a] 
                                        rounded-2xl shadow-lg p-6 relative z-20 border 
                                        ${
																					isHovered
																						? "border-[#FFAE00] shadow-[0_0_25px_#FFAE00]"
																						: "border-transparent shadow-none"
																				}
                                      `}>
										<div className="flex justify-between items-center mb-2">
											<h3 className="font-bold text-lg">{edu.title}</h3>
											<span className="text-sm bg-neutral-800 rounded-full px-3 py-1">
												{edu.date}
											</span>
										</div>
										<p className="text-sm text-neutral-300 mb-1 flex items-center gap-2">
											{edu.icon} {edu.school}
										</p>
										<p className="text-sm text-neutral-300 mb-5 flex items-center gap-2">
											{edu.description}
										</p>

										{/* Description: fades + expands only on hover */}
										<motion.div
											initial={false}
											animate={{
												opacity: isHovered ? 1 : 0,
												height: isHovered ? "auto" : 0,
												marginTop: isHovered ? 8 : 0,
											}}
											className="w-full  border-t ">
											<p className="font-semibold pt-2">Achievements:</p>
											{/* Achievements list: appears smoothly on hover */}
											{isHovered && (
												<motion.ul
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.3 }}
													className="mt-3 list-disc list-inside space-y-1 text-neutral-400 text-sm">
													{edu.achievements.map((item, i) => (
														<li key={i}>{item}</li>
													))}
												</motion.ul>
											)}
										</motion.div>
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
