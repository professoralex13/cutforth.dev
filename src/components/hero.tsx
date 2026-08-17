"use client";

import { ChevronDown } from "lucide-react";
import Headshot from "../assets/headshot.jpg";
import TerminalRewrite from "./terminal-rewrite";

const ROLES = [
	"Software Developer",
	"Robotics Engineer",
	"Embedded Systems Developer",
	"Flight Sim Nerd",
];

export default function Hero() {
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: Aesthetic interaction
		<section
			id="hero"
			role="presentation"
			className="relative min-h-screen flex flex-col justify-center px-6 pt-14 overflow-hidden grid-backdrop"
			onMouseMove={(e) => {
				// Interaction for hoverable grid effect
				const rect = e.currentTarget.getBoundingClientRect();

				// Subtract element offsets from absolute mouse positions
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				// Hand off the calculated coordinates directly to CSS variables
				e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
				e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
			}}
		>
			<div className="max-w-5xl mx-auto w-full relative">
				<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
					<div>
						<p className="font-mono text-primary text-sx tracking-[0.25em] uppercase mb-6">
							Hello, I&apos;m
						</p>
						<h1
							className="font mono font-bold leading-none tracking-tight text-foreground"
							style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
						>
							Alex Cutforth
						</h1>
						<div className="mt-4 h-10 ">
							<span className="font-mono text-2xl text-primary">
								<TerminalRewrite items={ROLES} />
								<span className="animate-pulse">▌</span>
							</span>
						</div>
						<p className="mt-8 text-muted-foreground font-[Figtree, sans-serif] text-lg max-w-xl leading-relaxed">
							Based in Christchurch, New Zealand. I build precise, performant
							software — from geospatial algorithms to full-stack web tools —
							with a particular love for Rust and TypeScript.
						</p>
						<div className="mt-10 flex gap-4">
							<a
								href="/portfolio"
								className="bg-primary text-primary-foreground font-mono text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity font-semibold"
							>
								Portfolio
							</a>
							<a
								href="#contact"
								className="bg-background border border-border text-foreground font-mono text-sm px-5 py-2.5 rounded hover:border-primary/50 hover:text-primary transition-colors"
							>
								Get in touch
							</a>
						</div>
					</div>

					<div className="flex justify-center md:justify-end">
						<div className="relative">
							{/* Accent ring */}
							<div className="absolute -inset-1 rounded-full bg-linear-to-br from-primary/40 via-primary/10 to-transparent" />
							{/* Photo frame */}
							<div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-primary/20 bg-secondary flex items-center justify-center">
								<img
									src={Headshot.src}
									alt="Alex Cutforth"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a
				href="#about"
				className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
			>
				<ChevronDown size={20} className="animate-bounce" />
			</a>
		</section>
	);
}
