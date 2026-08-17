import { ArrowUpRight } from "lucide-react";
import { getPortfolioProjects } from "@/content/portfolio";
import { GithubIcon } from "@/icons/Github";
import { LinkedinIcon } from "@/icons/Linkedin";

export default function Page() {
	const projects = getPortfolioProjects();

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="sticky top-0 z-30 backdrop-blur-sm bg-background/90 border-b border-border">
				<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
					<a
						href="/"
						className="font-mono text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
					>
						cutforth.dev
					</a>
					<div className="hidden md:flex items-center gap-7">
						<a
							href="https://github.com/professoralex13"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<GithubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/alex-cutforth-5133b4299/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<LinkedinIcon />
						</a>
					</div>
				</div>
			</header>

			<main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
				<div className="mb-12 md:mb-16">
					<h1 className="font-mono text-4xl md:text-6xl leading-none tracking-tight text-foreground">
						Portfolio
					</h1>
					<p className="mt-5 text-muted-foreground max-w-2xl font-[Figtree,sans-serif] leading-relaxed">
						A focused showcase of work. Each card links to its own dedicated
						project page path, ready for deeper writeups.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projects.map((project, index) => (
						<a
							key={project.slug}
							href={`/portfolio/${project.slug}`}
							className="portfolio-card group relative overflow-hidden rounded-xl border border-border min-h-64 p-6 md:p-7 flex flex-col justify-end"
						>
							<div className="portfolio-blur absolute inset-0" />
							{project.image && (
								<img
									src={project.image}
									alt={project.title}
									className="absolute inset-0 h-full w-full object-cover opacity-55"
								/>
							)}
							<div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-transparent" />
							<div className="relative z-10">
								<p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
									{String(index + 1).padStart(2, "0")}
								</p>
								<h2 className="font-mono text-xl md:text-2xl text-foreground leading-tight pr-6">
									{project.title}
								</h2>
								<p className="mt-3 text-sm text-muted-foreground font-[Figtree,sans-serif] leading-relaxed max-w-prose">
									{project.blurb}
								</p>
							</div>
							<div className="absolute top-5 right-5 z-10 text-muted-foreground group-hover:text-primary transition-colors">
								<ArrowUpRight size={16} />
							</div>
						</a>
					))}
				</div>
			</main>
		</div>
	);
}
