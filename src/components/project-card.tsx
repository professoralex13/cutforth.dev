import clsx from "clsx";

type ProjectCardData = {
	slug: string;
	title?: string;
	period?: string;
	blurb?: string;
	tags?: string[];
	source?: string;
	image?: string;
};

type ProjectCardProps = {
	project: ProjectCardData;
	showBackgroundImage?: boolean;
};

export default function ProjectCard({
	project,
	showBackgroundImage = false,
}: ProjectCardProps) {
	return (
		<article
			className={clsx(
				"flex flex-col justify-end group relative bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors ease-out overflow-hidden",
				showBackgroundImage && "h-80",
			)}
		>
			{/** biome-ignore lint/a11y/useAnchorContent: aria-label is populated, biome doesen't seem to recognise that */}
			<a
				href={`/portfolio/${project.slug}`}
				className="absolute inset-0 z-10"
				aria-label={`View ${project.title}`}
			/>
			<div className="mb-3 pr-6 pointer-events-none z-10">
				<div>
					<h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
						{project.title}
					</h3>
					<p className="font-mono text-xs text-muted-foreground mt-0.5">
						{project.period}
					</p>
				</div>
			</div>
			<p className="text-sm text-muted-foreground font-[Figtree,sans-serif] leading-relaxed mb-4 pointer-events-none z-10">
				{project.blurb}
			</p>
			<div className="flex flex-wrap gap-2 items-end pointer-events-none mr-16 z-10">
				{project.tags?.map((tag) => (
					<span
						key={tag}
						className="font-mono text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
					>
						{tag}
					</span>
				))}
			</div>

			<span className="absolute bottom-5 right-5 leading-[0.8] font-mono text-[11px] text-primary opacity-0 group-hover:opacity-90 transition-opacity ease-out z-10">
				Read More
			</span>
			{project.source && (
				<a
					href={project.source}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute top-5 right-5 z-20 text-muted-foreground hover:text-primary transition-colors"
					aria-label="View source repository"
				>
					<span className="font-mono text-[10px] tracking-[0.2em] uppercase">
						Source
					</span>
				</a>
			)}

			{showBackgroundImage && (
				<>
					{project.image && (
						<img
							src={project.image}
							alt={project.title}
							className="absolute inset-0 h-full w-full object-cover"
						/>
					)}
					<div className="absolute inset-0 bg-linear-to-t from-background via-background/90 to-background/20" />
				</>
			)}
		</article>
	);
}
