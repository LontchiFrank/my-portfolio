/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
	href: string;
	label: string;
};

const NAV_ITEMS: NavItem[] = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/work", label: "Work" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full z-40 transition-colors duration-300 backdrop-blur-sm
        ${
					scrolled
						? "bg-white/80 dark:bg-slate-900/70 shadow-sm"
						: "bg-transparent"
				}`}
			aria-label="Main navigation">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Brand / Logo */}
					<div className="flex items-center gap-4">
						<Link href="/" className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold">
								FF
							</div>
							<div className="hidden sm:block">
								<span className="font-semibold text-white">Fodjo Frank</span>
								<div className="text-xs text-slate-500">Portfolio</div>
							</div>
						</Link>
					</div>

					{/* Desktop nav */}
					<div className="hidden md:flex md:items-center md:space-x-6">
						{NAV_ITEMS.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`relative px-2 py-1 font-medium transition-colors duration-200 
                    ${
											active
												? "text-[#ffb703] dark:text-[#ffb703]"
												: "text-white dark:text-slate-200 hover:text-[#ffd363]"
										}`}>
									{item.label}
									{active && (
										<motion.span
											layoutId="underline"
											className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#ffb703] dark:bg-[#ffb703] rounded"
										/>
									)}
								</Link>
							);
						})}

						<Link
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="ml-2 inline-block rounded-md px-3 py-1.5 border border-[#ffb703] text-[#ffb703] text-sm font-medium hover:bg-indigo-50 dark:hover:bg-slate-800">
							Resume
						</Link>
					</div>

					{/* Mobile controls */}
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setMobileOpen((s) => !s)}
							aria-label="Toggle menu"
							className="p-2 rounded-md text-white hover:bg-slate-100 dark:hover:bg-slate-800">
							{mobileOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu - animated */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.18 }}
						className="md:hidden">
						<div className="px-4 pt-2 pb-4 space-y-2 border-t bg-white/95 dark:bg-slate-900/95">
							{NAV_ITEMS.map((item) => {
								const active = pathname === item.href;
								return (
									<Link
										key={item.href}
										href={item.href}
										className={`block px-3 py-2 rounded-md font-medium transition-colors duration-150
                      ${
												active
													? "bg-indigo-50 dark:bg-slate-800 text-indigo-600"
													: "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
											}`}>
										{item.label}
									</Link>
								);
							})}

							<Link
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="block px-3 py-2 rounded-md font-medium border border-indigo-600 text-indigo-600 text-center">
								Resume
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
