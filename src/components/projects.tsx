import { ArrowUpRight } from "lucide-react";
import { getPortfolioProjects } from "../content/portfolio";
import { GithubIcon } from "../icons/Github";

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
							<article
								key={p.title}
								className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors ease-out"
							>
								{/** biome-ignore lint/a11y/useAnchorContent: aria-label is populated, biome doesen't seem to recognise that */}
								<a
									href={`/portfolio/${p.slug}`}
									className="absolute inset-0 z-10"
									aria-label={`View ${p.title}`}
								/>
								<div className="mb-3 pr-6 pointer-events-none">
									<div>
										<h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
											{p.title}
										</h3>
										<p className="font-mono text-xs text-muted-foreground mt-0.5">
											{p.period}
										</p>
									</div>
								</div>
								<p className="text-sm text-muted-foreground font-[Figtree,sans-serif] leading-relaxed mb-4 pointer-events-none">
									{p.blurb}
								</p>
								<div className="flex flex-wrap gap-2 pr-8 pointer-events-none">
									{p.tags?.map((tag) => (
										<span
											key={tag}
											className="font-mono text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
										>
											{tag}
										</span>
									))}
								</div>

								<span className="absolute bottom-5 right-5 font-mono text-[11px] text-primary opacity-0 group-hover:opacity-90 transition-opacity ease-out">
									Read More
								</span>
								{p.source && (
									<a
										href={p.source}
										target="_blank"
										rel="noopener noreferrer"
										className="absolute top-5 right-5 z-20 text-muted-foreground hover:text-primary transition-colors"
										aria-label="Source code"
									>
										<GithubIcon size={16} />
									</a>
								)}
							</article>
						))}
				</div>
			</div>
		</section>
	);
}
