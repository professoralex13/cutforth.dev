import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { GithubIcon } from "../icons/Github";

export default function Projects() {
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
								{p.blurb}
							</p>
							<div className="flex flex-wrap gap-2">
								{p.tags?.map((tag) => (
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
