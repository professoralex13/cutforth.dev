const SKILLS = [
	{
		category: "Languages",
		items: [
			{ name: "TypeScript", link: "https://www.typescriptlang.org/" },
			{ name: "Rust", link: "https://www.rust-lang.org/" },
			{ name: "Python", link: "https://www.python.org/" },
			{ name: "C/C++", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
			{ name: "C#", link: "https://learn.microsoft.com/dotnet/csharp/" },
			{ name: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
		],
	},
	{
		category: "Frontend",
		items: [
			{ name: "React", link: "https://react.dev/" },
			{ name: "HTML/CSS", link: "https://developer.mozilla.org/docs/Web" },
			{
				name: "SVG/Canvas",
				link: "https://developer.mozilla.org/docs/Web/API/Canvas_API",
			},
		],
	},
	{
		category: "Data",
		items: [
			{ name: "PostGIS", link: "https://postgis.net/" },
			{ name: "PostgreSQL", link: "https://www.postgresql.org/" },
			{ name: "Prisma ORM", link: "https://www.prisma.io/" },
			{ name: "tRPC", link: "https://trpc.io/" },
			{ name: "NestJS", link: "https://nestjs.com/" },
		],
	},
	{
		category: "Systems",
		items: [
			{ name: "Embedded Rust", link: "https://embassy.dev/" },
			{
				name: "Embedded C/C++",
				link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			},
			{ name: "Unity Engine", link: "https://unity.com/" },
			{ name: "Godot Engine", link: "https://godotengine.org/" },
		],
	},
	{
		category: "CAD/EDA",
		items: [
			{ name: "OnShape", link: "https://www.onshape.com/" },
			{ name: "SolidWorks", link: "https://www.solidworks.com/" },
			{ name: "KiCad", link: "https://www.kicad.org/" },
		],
	},
	{
		category: "Platforms",
		items: [
			{ name: "Git", link: "https://git-scm.com/" },
			{ name: "Linux", link: "https://kernel.org/" },
			{ name: "AWS", link: "https://aws.amazon.com/" },
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-28 px-6 border-t border-border bg-secondary/30"
		>
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 slide-enter right">
				<div>
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						02
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						Skills
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{SKILLS.map((group) => (
						<div key={group.category} className="space-y-3">
							<p className="font-mono text-xs text-primary tracking-widest uppercase">
								{group.category}
							</p>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<a
										key={item.name}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="font-mono text-xs bg-card border border-border text-foreground px-2.5 py-1 rounded hover:border-primary/50 hover:text-primary transition-colors"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
