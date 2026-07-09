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
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center px-6 pt-14 overflow-hidden"
		>
			{/* Background Grid */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage:
						"linear-gradient(rgba(82,221,180,1) 1px, transparent 1px), linear-gradient(90deg, rgba(82,221,180,1) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
				}}
			/>

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
								href="#contact"
								className="bg-primary text-primary-foreground font-mono text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity font-semibold"
							>
								Get in touch
							</a>
							<a
								href="#projects"
								className="border border-border text-foreground font-mono text-sm px-5 py-2.5 rounded hover:border-primary/50 hover:text-primary transition-colors"
							>
								See my work
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
									src={Headshot}
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
