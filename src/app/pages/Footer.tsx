/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#0e0e0e] text-neutral-400 py-10 border-t border-neutral-800">
			<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
				{/* Left side */}
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm">
					© {new Date().getFullYear()}{" "}
					<span className="text-[#FFAE00] font-semibold">Fodjo Frank</span>. All
					rights reserved.
				</motion.p>

				{/* Right side - social icons */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="flex items-center gap-6">
					<a
						href="https://github.com/LontchiFrank"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FFAE00] transition">
						<Github size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/fodjo-frank-38a458221/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FFAE00] transition">
						<Linkedin size={20} />
					</a>
					<a
						href="mailto:fodjolontchifrank@gmail.com"
						className="hover:text-[#FFAE00] transition">
						<Mail size={20} />
					</a>
				</motion.div>
			</div>
		</footer>
	);
}
