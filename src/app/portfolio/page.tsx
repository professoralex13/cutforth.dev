import ProjectCard from "@/components/project-card";
import { getPortfolioProjects } from "@/content/portfolio";

export default function Page() {
	const projects = getPortfolioProjects();

	return (
		<div className="min-h-screen bg-background text-foreground">
			<main className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24">
				<div className="mb-12 md:mb-16">
					<h1 className="font-mono text-4xl md:text-6xl leading-none tracking-tight text-foreground">
						Portfolio
					</h1>
					<p className="mt-5 text-muted-foreground max-w-2xl font-[Figtree,sans-serif] leading-relaxed">
						Welcome to my portfolio! On this page you will find a selection of
						my favorite projects from the last few years.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projects.map((project) => (
						<ProjectCard
							key={project.slug}
							project={project}
							showBackgroundImage
						/>
					))}
				</div>
			</main>
		</div>
	);
}
