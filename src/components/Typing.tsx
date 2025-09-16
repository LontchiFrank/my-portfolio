/** @format */

"use client";

import React, { useEffect, useState } from "react";

type Segment = { text: string; color?: string };
type Phrase = Segment[];

interface Props {
	phrases: Phrase[]; // array of phrases, each phrase = array of segments
	speed?: number; // ms per character
	startDelay?: number; // ms before typing starts
	eraseDelay?: number; // ms to wait before erasing
	cursor?: boolean;
	className?: string;
}

export default function TypingText({
	phrases,
	speed = 70,
	startDelay = 300,
	eraseDelay = 1500,
	cursor = true,
	className = "",
}: Props) {
	const [phraseIdx, setPhraseIdx] = useState(0);
	const [segIdx, setSegIdx] = useState(0);
	const [charIdx, setCharIdx] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [started, setStarted] = useState(false);
	const [cursorVisible, setCursorVisible] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setStarted(true), startDelay);
		return () => clearTimeout(t);
	}, [startDelay]);

	useEffect(() => {
		const id = setInterval(() => setCursorVisible((v) => !v), 500);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (!started) return;

		const phrase = phrases[phraseIdx];
		const seg = phrase[segIdx];

		if (!isDeleting) {
			if (charIdx < seg.text.length) {
				const id = setTimeout(() => setCharIdx((c) => c + 1), speed);
				return () => clearTimeout(id);
			} else if (segIdx < phrase.length - 1) {
				// move to next segment
				const id = setTimeout(() => {
					setSegIdx((s) => s + 1);
					setCharIdx(0);
				}, 150);
				return () => clearTimeout(id);
			} else {
				// phrase finished, wait then delete
				const id = setTimeout(() => setIsDeleting(true), eraseDelay);
				return () => clearTimeout(id);
			}
		} else {
			if (charIdx > 0) {
				const id = setTimeout(() => setCharIdx((c) => c - 1), speed);
				return () => clearTimeout(id);
			} else if (segIdx > 0) {
				const id = setTimeout(() => {
					setSegIdx((s) => s - 1);
					setCharIdx(phrases[phraseIdx][segIdx - 1].text.length);
				}, 100);
				return () => clearTimeout(id);
			} else {
				// phrase deleted, go to next
				setIsDeleting(false);
				setPhraseIdx((p) => (p + 1) % phrases.length);
			}
		}
	}, [
		started,
		charIdx,
		segIdx,
		isDeleting,
		phraseIdx,
		phrases,
		speed,
		eraseDelay,
	]);

	const rendered = phrases[phraseIdx].map((s, i) => {
		if (i < segIdx) {
			return (
				<span key={i} style={s.color ? { color: s.color } : undefined}>
					{s.text}
				</span>
			);
		}
		if (i === segIdx) {
			return (
				<span key={i} style={s.color ? { color: s.color } : undefined}>
					{isDeleting ? s.text.slice(0, charIdx) : s.text.slice(0, charIdx)}
				</span>
			);
		}
		return <span key={i} />;
	});

	return (
		<span className={className}>
			{rendered}
			{cursor && (
				<span
					style={{
						opacity: cursorVisible ? 1 : 0,
						marginLeft: "2px",
					}}>
					|
				</span>
			)}
		</span>
	);
}
