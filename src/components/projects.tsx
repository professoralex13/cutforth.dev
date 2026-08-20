import { getPortfolioProjects } from "../content/portfolio";
import ProjectCard from "./project-card";

export default function Projects() {
	const projects = getPortfolioProjects();

	return (
		<section
			id="projects"
			className="py-28 px-6 border-t border-border bg-secondary/30 overflow-x-hidden"
		>
			<div className="max-w-5xl mx-auto bottom slide-enter space-y-6">
				<div>
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						04
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						Projects
					</h2>
					<a
						className="font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
						href="/portfolio"
					>
						View full portfolio
					</a>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projects
						.filter((x) => x.home)
						.map((p) => (
							<ProjectCard key={p.slug} project={p} />
						))}
				</div>
			</div>
		</section>
	);
}
