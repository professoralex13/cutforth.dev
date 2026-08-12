import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../data/projects";

type PortfolioProjectPageProps = {
	slug: string;
};

export default function PortfolioProjectPage({
	slug,
}: PortfolioProjectPageProps) {
	const project = PROJECTS.find((item) => item.slug === slug);

	if (!project) {
		return (
			<div className="min-h-screen bg-background text-foreground px-6 py-20">
				<div className="max-w-3xl mx-auto">
					<a
						href="/portfolio"
						className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
					>
						<ArrowLeft size={14} />
						Back to Portfolio
					</a>
					<h1 className="font-mono text-3xl md:text-5xl leading-none mt-8">
						Project Not Found
					</h1>
					<p className="mt-4 text-muted-foreground font-[Figtree,sans-serif]">
						No project matches this URL yet.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background text-foreground px-6 py-20">
			<div className="max-w-3xl mx-auto">
				<a
					href="/portfolio"
					className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
				>
					<ArrowLeft size={14} />
					Back to Portfolio
				</a>
				<h1 className="font-mono text-3xl md:text-5xl leading-none mt-8">
					{project.title}
				</h1>
				<p className="mt-6 text-muted-foreground font-[Figtree,sans-serif] leading-relaxed max-w-prose">
					This dedicated project page is intentionally a placeholder so you can
					implement the full case study content manually.
				</p>
			</div>
		</div>
	);
}
