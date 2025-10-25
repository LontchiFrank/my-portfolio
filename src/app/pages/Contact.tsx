/** @format */

"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);

	useEffect(() => {
		// Initialize EmailJS once with your public key
		emailjs.init("qEPbDcJbTvNX3kRmh");
	}, []);

	// ✅ Handle both inputs and textareas
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resultData = {
		from_name: formData.name,
		from_email: formData.email,
		message: formData.message,
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(null);

		emailjs
			.send(
				"service_qbfnriq",
				"template_101i6ot",
				resultData,
				"qEPbDcJbTvNX3kRmh"
			)
			.then(() => {
				setSuccess("✅ Your message has been sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			})
			.catch(() => {
				setSuccess("❌ Something went wrong. Please try again later.");
			})
			.finally(() => setLoading(false));
	};

	return (
		<section id="contact" className="bg-[#0e0e0e] text-white py-20">
			<div className="max-w-5xl mx-auto px-6 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold mb-16">
					CONTACT <span className="text-[#FFAE00]">ME</span>
				</motion.h2>

				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-800 max-w-2xl mx-auto text-left">
					<div className="space-y-6">
						{/* Name */}
						<div>
							<label
								htmlFor="name"
								className="block text-sm text-neutral-400 mb-2">
								Name
							</label>
							<div className="relative">
								<User
									className="absolute left-3 top-3 text-neutral-400"
									size={18}
								/>
								<input
									type="text"
									id="name"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									className="w-full bg-neutral-900 text-white pl-10 pr-4 py-3 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#FFAE00] transition"
									placeholder="Your full name"
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm text-neutral-400 mb-2">
								Email
							</label>
							<div className="relative">
								<Mail
									className="absolute left-3 top-3 text-neutral-400"
									size={18}
								/>
								<input
									type="email"
									id="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="w-full bg-neutral-900 text-white pl-10 pr-4 py-3 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#FFAE00] transition"
									placeholder="you@example.com"
								/>
							</div>
						</div>

						{/* Message */}
						<div>
							<label
								htmlFor="message"
								className="block text-sm text-neutral-400 mb-2">
								Message
							</label>
							<div className="relative">
								<MessageSquare
									className="absolute left-3 top-3 text-neutral-400"
									size={18}
								/>
								<textarea
									id="message"
									name="message"
									required
									value={formData.message}
									onChange={handleChange}
									rows={5}
									className="w-full bg-neutral-900 text-white pl-10 pr-4 py-3 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#FFAE00] transition resize-none"
									placeholder="Type your message..."></textarea>
							</div>
						</div>

						{/* Submit button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="submit"
							disabled={loading}
							className="w-full bg-[#FFAE00] text-black font-semibold py-3 rounded-lg hover:bg-[#ffb833] transition">
							{loading ? "Sending..." : "Send Message"}
						</motion.button>

						{/* Feedback message */}
						{success && (
							<p
								className={`text-center mt-4 ${
									success.includes("✅") ? "text-green-400" : "text-red-400"
								}`}>
								{success}
							</p>
						)}
					</div>
				</motion.form>

				{/* Contact Info */}
				<div className="mt-16 text-neutral-400">
					<p>
						Or reach me directly via{" "}
						<a
							href="mailto:fodjolontchifrank@gmail.com"
							className="text-[#FFAE00] hover:underline">
							fodjolontchifrank@gmail.com
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
