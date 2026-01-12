/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fodjo Frank | Software Developer Portfolio",
	description:
		"Fodjo Frank - Full Stack Software Developer specializing in web applications. Experienced in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch.",
	keywords: [
		"Fodjo Frank",
		"Software Developer",
		"Full Stack Developer",
		"Frontend Developer",
		"React Developer",
		"Next.js",
		"TypeScript",
		"Web Developer",
		"Portfolio",
	],
	authors: [{ name: "Fodjo Frank" }],
	creator: "Fodjo Frank",
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Fodjo Frank | Software Developer Portfolio",
		description:
			"Full Stack Software Developer specializing in modern web applications and technologies.",
		siteName: "Fodjo Frank Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fodjo Frank | Software Developer Portfolio",
		description:
			"Full Stack Software Developer specializing in modern web applications and technologies.",
		creator: "@fodjofrank",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable}  antialiased`}>
				{children}
			</body>
		</html>
	);
}
