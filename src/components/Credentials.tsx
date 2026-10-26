"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ArrowUpRight, Download, ShieldCheck } from "lucide-react";
import { credentials, credlyProfile, microsoftProfile, type Credential } from "@/data/credentials";

const filters = ["All", "Credly", "Microsoft Learn"] as const;
const linkStyle = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFAE00]";

function BadgeCard({ credential }: { credential: Credential }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-gradient-to-br from-[#191919] to-[#121212] p-6 transition-colors hover:border-[#FFAE00]/60">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2">
          {imageFailed ? <Award className="h-12 w-12 text-amber-600" aria-label="Badge artwork unavailable" /> : <Image unoptimized src={credential.image} alt={`${credential.title} badge`} width={80} height={80} className="h-20 w-20 object-contain" onError={() => setImageFailed(true)} />}
        </div>
        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{credential.provider}</span>
      </div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#FFAE00]">{credential.kind}</p>
      <h3 className="text-lg font-semibold leading-snug">{credential.title}</h3>
      <p className="mt-3 text-sm text-neutral-400">Earned <time dateTime={credential.date}>{new Date(`${credential.date}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time></p>
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5 text-sm">
        <a href={credential.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#FFAE00] hover:underline focus-visible:outline-2 focus-visible:outline-[#FFAE00]">
          {credential.provider === "Credly" ? "Verify badge" : "Explore training"}<ArrowUpRight size={16} aria-hidden="true" />
        </a>
        {credential.provider === "Microsoft Learn" && <a href={microsoftProfile} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:underline focus-visible:outline-2 focus-visible:outline-[#FFAE00]">View achievement profile</a>}
      </div>
    </article>
  );
}

export default function Credentials() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = credentials.filter(item => filter === "All" || item.provider === filter);
  const visible = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="scroll-mt-20 bg-[#0e0e0e] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#FFAE00]"><ShieldCheck size={18} aria-hidden="true" /> Continuous learning</p>
            <h2 id="credentials-heading" className="text-3xl font-bold sm:text-4xl">Certifications <span className="text-[#FFAE00]">& Badges</span></h2>
            <p className="mt-4 leading-relaxed text-neutral-400">Building practical expertise in software engineering, cloud technology and cybersecurity. Explore my completed training and earned credentials.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={credlyProfile} target="_blank" rel="noopener noreferrer" className={`${linkStyle} border border-neutral-700 hover:border-[#FFAE00]`}>Credly profile <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={microsoftProfile} target="_blank" rel="noopener noreferrer" className={`${linkStyle} border border-neutral-700 hover:border-[#FFAE00]`}>Microsoft Learn <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>

        <article className="mb-12 grid overflow-hidden rounded-2xl border border-[#FFAE00]/30 bg-[#171717] md:grid-cols-2">
          <a href="/credentials/skyscanner-forage-certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white p-4 focus-visible:outline-4 focus-visible:outline-[#FFAE00]" aria-label="Open Skyscanner certificate PDF in a new tab">
            <Image src="/credentials/skyscanner-forage-certificate.png" alt="Skyscanner and Forage certificate of completion awarded to Fodjo Frank for the Front-End Software Engineering Job Simulation" width={1263} height={893} className="h-auto w-full" />
          </a>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFAE00]">Certificate of completion</p>
            <h3 className="text-2xl font-bold">Front-End Software Engineering Job Simulation</h3>
            <p className="mt-3 font-medium text-neutral-200">Skyscanner · Forage</p>
            <p className="mt-2 text-sm text-neutral-400">Completed <time dateTime="2026-09-07">7 September 2026</time></p>
            <p className="mt-5 leading-relaxed text-neutral-300">Practical experience creating a Backpack React web app through Skyscanner’s job simulation on Forage.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/credentials/skyscanner-forage-certificate.pdf" target="_blank" rel="noopener noreferrer" className={`${linkStyle} bg-[#FFAE00] text-black hover:bg-amber-400`}>View certificate <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="/credentials/skyscanner-forage-certificate.pdf" download="Fodjo-Frank-Skyscanner-Certificate.pdf" className={`${linkStyle} border border-neutral-600 hover:border-[#FFAE00]`}>Download PDF <Download size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </article>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter badges by provider" className="flex flex-wrap gap-2">
            {filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => { setFilter(item); setExpanded(false); }} className={`${linkStyle} ${filter === item ? "bg-[#FFAE00] text-black" : "border border-neutral-700 text-neutral-300 hover:border-[#FFAE00]"}`}>{item} <span className="opacity-70">{item === "All" ? credentials.length : credentials.filter(c => c.provider === item).length}</span></button>)}
          </div>
          <p aria-live="polite" className="text-sm text-neutral-400">Showing {visible.length} of {filtered.length} achievements</p>
        </div>
        <div id="credential-badges" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(credential => <BadgeCard key={credential.url} credential={credential} />)}
        </div>
        {filtered.length > 6 && <div className="mt-8 text-center"><button type="button" aria-expanded={expanded} aria-controls="credential-badges" onClick={() => setExpanded(value => !value)} className={`${linkStyle} border border-neutral-600 hover:border-[#FFAE00]`}>{expanded ? "Show fewer badges" : `Show all ${filtered.length} achievements`}</button></div>}
        <p className="mt-6 text-sm text-neutral-500">Microsoft Learn badges and trophies recognise completed modules and learning paths.</p>
      </div>
    </section>
  );
}
