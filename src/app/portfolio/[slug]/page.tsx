import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPortfolioMarkdown, getPortfolioSlugs } from "@/content/portfolio";

type PortfolioProjectRouteProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return getPortfolioSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
};

export default async function Page({ params }: PortfolioProjectRouteProps) {
	const { slug } = await params;

	const markdown = getPortfolioMarkdown(slug);

	if (!markdown) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background text-foreground px-6 py-20">
			<div className="max-w-5xl mx-auto px-6">
				<h1 className="font-mono text-3xl md:text-5xl leading-none mt-8">
					{markdown.title ?? slug}
				</h1>
				{(markdown.period || markdown.tags?.length || markdown.source) && (
					<div className="mt-5 flex flex-wrap items-center gap-2">
						{markdown.period && (
							<span className="font-mono text-xs text-muted-foreground">
								{markdown.period}
							</span>
						)}
						{markdown.tags?.map((tag) => (
							<span
								key={tag}
								className="font-mono text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
							>
								{tag}
							</span>
						))}
						{markdown.source && (
							<a
								href={markdown.source}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View source repository"
								className="ml-auto font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
							>
								Source
							</a>
						)}
					</div>
				)}
				<article className="portfolio-prose mt-10">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{markdown.content}
					</ReactMarkdown>
				</article>
			</div>
		</div>
	);
}
