export type PortfolioProject = {
	title: string;
	slug: string;
	blurb: string;
	image: string | null;
	period?: string;
	tags?: string[];
	link?: string;
	source?: string;
};

export const PROJECTS: PortfolioProject[] = [
	{
		title: "Synaptic Simulations A220",
		slug: "synaptic-simulations-a220",
		blurb:
			"Avionics GUI components, ARINC 424 flight planning, and a canvas-based aircraft map for a high-fidelity Airbus A220 simulation",
		image: "/images/synaptic-airport-map.webp",
		period: "2021 - 2023",
		tags: ["TypeScript", "React", "SVG", "Canvas"],
		link: "https://synapticsim.com/",
	},
	{
		title: "Robocup",
		slug: "robocup",
		blurb:
			"Advanced autonomous robot software, LIDAR based navigation, object detection, and pathfinding",
		image: "/images/robocup-telemetry.png",
		period: "April 2026 - Present",
		tags: ["C++", "Robotics", "LIDAR", "Pathfinding", "Algorithms"],
		source: "https://github.com/professoralex13/robocup",
	},
	{
		title: "Vex Robotics",
		slug: "vex-robotics",
		blurb:
			"Competitive robotics work spanning mechanical design, manufacturing, and C++/Rust firmware in a multidisciplinary team",
		image: "/images/pushback-model.png",
		period: "2019 - 2026",
		tags: ["Rust", "C++", "Mechanical Design", "Team Management"],
		// link: "https://cad.onshape.com/documents/35463539fe10d3fbafed19bb/w/a1e20fdecf0eedca9d9fc5cd/e/78434d35a8633518594bfa82?renderMode=0&uiState=6a4f20c86ef2740900cb262c",
		// source: "https://github.com/UCCR1",
	},
	{
		title: "Taxiway Routing",
		slug: "taxiway-routing",
		blurb:
			"Large scale work project encompassing Geographic Information Systems, user interface design, and standards conformance/research",
		period: "Feb 2024 - Present",
		tags: ["PostGIS", "SQL", "UI/UX", "React", "Typescript"],
		image: "/images/stands-overview.png",
	},
	{
		title: "Harmony Waitaha Website",
		slug: "harmony-waitaha-website",
		blurb:
			"Collaborated to develop a public-facing website with a lightweight custom CMS",
		image: "/images/harmony-waitaha-pr.png",
		period: "Aug 2023 - March 2025",
		tags: ["React", "TypeScript", "CMS"],
		link: "https://www.harmonywaitaha.co.nz/",
		source: "https://github.com/baritone-designs/harmony-waitaha-website",
	},
	{
		title: "CosplayCore",
		slug: "cosplaycore",
		blurb:
			"Miniature wearable electronics platform designed to support cosplayers with hearing difficulties while in costume",
		image: "/images/cosplaycore.png",
		period: "Sep 2025 - Feb 2026",
		tags: ["Embedded Systems", "Rust", "KiCad", "IOT"],
		source: "https://github.com/professoralex13/CosplayCore",
	},
	{
		title: "Flight Sim Autopilot Panel",
		slug: "autopilot-panel",
		blurb:
			"PCB design, embedded sytems design, and casing design in CAD to replicate an A220 autopilot panel for my own personal use when playing flight sim",
		image: "/images/autopilot-panel.png",
		period: "June 2026 - Present",
		tags: ["KiCad", "OnShape", "Manufacturing consideration"],
	},
	{
		title: "Tennis Scoreboard",
		slug: "tennis-scoreboard",
		blurb:
			"Designed an easily manufacturable scoreboard using addressable LEDs, bike battery power systems, and ESP32 for wireless control",
		image: "/images/scoreboard.jpg",
		period: "Nov 2025 - Present",
		tags: ["Embedded Systems", "Rust", "KiCad", "Manufacturing consideration"],
		source: "https://github.com/professoralex13/tennis-scoreboard",
	},
];
