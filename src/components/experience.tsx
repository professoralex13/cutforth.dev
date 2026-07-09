import clsx from "clsx";

const EXPERIENCE = [
	{
		position: "Software Developer",
		company: "Navigraph",
		link: "navigraph.com",
		skills: ["Rust", "TypeScript", "React", "PostGIS", "WebAssembly", "GIS"],
		period: "December 2023 - Present",
		description: `Remote position with a hybrid Stockholm team. Work spans
            geospatial algorithm development using PostGIS, navigation data
            processing against industry-standard aviation formats,
            open-source WebAssembly plugin work in Rust, and React-based
            product tooling. Projects have been showcased at FlightSimExpo
            2025.`,
		ongoing: true,
	},
	{
		position: "Robotics Technician",
		company: "Robomate",
		link: "robomate.co.nz",
		skills: [
			"Customer Interaction",
			"Mechanical Diagnostics",
			"Field Testing",
			"Electrical Diagnostics",
		],
		period: "November 2025 - February 2026 (Internship)",
		ongoing: false,
		description: `In Person position at the Christchurch workshop & storefront. Handled diagnostics and repair of broken mowers bought in by customers.
            Gained valuable experience in customer interaction and progress reporting.`,
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-28 px-6 border-t border-border">
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
				<div>
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						03
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						Work Experience
					</h2>
				</div>
				<div className="space-y-10">
					{EXPERIENCE.map((experience, i) => (
						<div
							key={`${experience.company}/${experience.position}`}
							className="grid grid-cols-[min-content_1fr]"
						>
							<div className="space-y-4.5 pr-3 pt-1.5">
								<div
									className={clsx(
										"size-3 rounded-full mx-auto",
										experience.ongoing
											? "bg-primary"
											: "border-3 border-border",
									)}
								/>
								{i !== EXPERIENCE.length - 1 && (
									<div className="w-1 rounded-full bg-border h-full mx-auto" />
								)}
							</div>
							<div>
								<div className="flex flex-wrap items-baseline gap-3 mb-1">
									<h3 className="font-mono text-base font-semibold text-foreground">
										{experience.position}
									</h3>
									<span className="font-mono text-xs text-primary">
										{experience.company}
									</span>
									<span className="font-mono text-xs text-muted-foreground ml-auto">
										{experience.period}
									</span>
								</div>
								<p className="text-sm text-muted-foreground font-[Figtree,sans-serif] leading-relaxed">
									{experience.description}
								</p>
								<div className="flex flex-wrap gap-2 mt-3">
									{experience.skills.map((t) => (
										<span
											key={t}
											className="font-mono text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
