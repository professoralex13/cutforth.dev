import { notFound } from "next/navigation";
import {
	getPortfolioMarkdown,
	getPortfolioSlugs,
} from "../../../content/portfolio";
import PortfolioProjectPage from "../../../views/portfolio-project";

type PortfolioProjectRouteProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return getPortfolioSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }: PortfolioProjectRouteProps) {
	const { slug } = await params;
	const project = getPortfolioMarkdown(slug);

	if (!project) {
		notFound();
	}

	return <PortfolioProjectPage slug={slug} />;
}
