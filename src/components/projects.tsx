import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/Github";

const PROJECTS = [
	{
		title: "Synaptic Simulations A220",
		period: "2021 – 2023",
		tags: ["TypeScript", "React", "SVG", "Canvas"],
		description:
			"Collaborated remotely with an international team to recreate the Airbus A220 in Microsoft Flight Simulator. Built a complete avionics GUI component library, a class-based Flight Plan Management system with ARINC 424 procedure support, and a staggered-projection aircraft map using HTML canvas.",
		link: "https://synapticsim.com/",
		source: null,
	},
	{
		title: "Harmony Waitaha Website",
		period: "Aug 2023 – Present",
		tags: ["React", "TypeScript", "CMS"],
		description:
			"Public-facing site for a Christchurch Barbershop chapter, built with a lightweight custom CMS so committee members can update content without touching code.",
		link: "https://www.harmonywaitaha.co.nz/",
		source: "https://github.com/baritone-designs/harmony-waitaha-website",
	},
	{
		title: "CosplayCore",
		period: "2025 - Present",
		tags: ["Embedded Systems", "Rust", "KiCad"],
		description:
			"Designed and manufactured a miniature wearable electronics system meant for aiding cosplayers with difficulty hearing in their costumes",
		link: null,
		source: "https://github.com/professoralex13/CosplayCore",
	},
	{
		title: "UC Robotics",
		period: "2024 - 2026",
		tags: ["Rust", "C++", "Mechanical Design", "Team Management"],
		description:
			"Worked in a team to develop advanced competitive robots. Used OnShape for mechanical design, used 3D printing, laser-cutting, and CNC routing for manufacturing, and C++ and Rust for robot firmware.",
		link: "https://cad.onshape.com/documents/35463539fe10d3fbafed19bb/w/a1e20fdecf0eedca9d9fc5cd/e/78434d35a8633518594bfa82?renderMode=0&uiState=6a4f20c86ef2740900cb262c",
		source: "https://github.com/UCCR1",
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-28 px-6 border-t border-border bg-secondary/30 overflow-x-hidden"
		>
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 slide-enter bottom">
				<div>
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						04
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						Projects
					</h2>
				</div>
				<div className="space-y-6">
					{PROJECTS.map((p) => (
						<div
							key={p.title}
							className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-200"
						>
							<div className="flex items-start justify-between gap-4 mb-3">
								<div>
									<h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
										{p.title}
									</h3>
									<p className="font-mono text-xs text-muted-foreground mt-0.5">
										{p.period}
									</p>
								</div>
								<div className="flex gap-3 shrink-0">
									{p.source && (
										<a
											href={p.source}
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-foreground transition-colors"
											aria-label="Source code"
										>
											<GithubIcon size={16} />
										</a>
									)}
									{p.link && (
										<a
											href={p.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-primary transition-colors"
											aria-label="Live site"
										>
											<ExternalLink size={16} />
										</a>
									)}
								</div>
							</div>
							<p className="text-sm text-muted-foreground font-[Figtree,sans-serif] leading-relaxed mb-4">
								{p.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{p.tags.map((tag) => (
									<span
										key={tag}
										className="font-mono text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
