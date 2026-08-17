import "server-only";

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type PortfolioMarkdownPage = {
	slug: string;
	title?: string;
	period?: string;
	tags?: string[];
	blurb?: string;
	image?: string;
	source?: string;
	order?: number;
	home: boolean;
	content: string;
};

const portfolioDirectory = path.join(
	process.cwd(),
	"src",
	"content",
	"portfolio",
);

function parseFrontmatter(markdown: string) {
	const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

	if (!match) {
		return { metadata: {}, content: markdown };
	}

	const metadata: Record<string, string | string[]> = {};

	for (const line of match[1].split(/\r?\n/)) {
		const separator = line.indexOf(":");

		if (separator === -1) {
			continue;
		}

		const key = line.slice(0, separator).trim();
		const value = line.slice(separator + 1).trim();

		if (value.startsWith("[") && value.endsWith("]")) {
			metadata[key] = value
				.slice(1, -1)
				.split(",")
				.map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
				.filter(Boolean);
		} else {
			metadata[key] = value.replace(/^['"]|['"]$/g, "");
		}
	}

	return { metadata, content: markdown.slice(match[0].length) };
}

function parseBoolean(value: string | undefined) {
	if (!value) {
		return false;
	}

	return value.toLowerCase() === "true";
}

function createPortfolioPage(
	slug: string,
	rawMarkdown: string,
): PortfolioMarkdownPage {
	const { metadata, content } = parseFrontmatter(rawMarkdown);

	return {
		slug,
		title: typeof metadata.title === "string" ? metadata.title : undefined,
		period: typeof metadata.period === "string" ? metadata.period : undefined,
		tags: Array.isArray(metadata.tags) ? metadata.tags : undefined,
		blurb: typeof metadata.blurb === "string" ? metadata.blurb : undefined,
		image: typeof metadata.image === "string" ? metadata.image : undefined,
		source: typeof metadata.source === "string" ? metadata.source : undefined,
		order:
			typeof metadata.order === "string" &&
			!Number.isNaN(Number(metadata.order))
				? Number(metadata.order)
				: undefined,
		home: parseBoolean(
			typeof metadata.home === "string" ? metadata.home : undefined,
		),
		content,
	};
}

function readMarkdownFiles() {
	const fileNames = readdirSync(portfolioDirectory).filter((file) =>
		file.endsWith(".md"),
	);

	return fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const filePath = path.join(portfolioDirectory, fileName);
		const rawMarkdown = readFileSync(filePath, "utf8");

		return createPortfolioPage(slug, rawMarkdown);
	});
}

export function getPortfolioSlugs() {
	return readMarkdownFiles().map((page) => page.slug);
}

export function getPortfolioMarkdown(
	slug: string,
): PortfolioMarkdownPage | null {
	const filePath = path.join(portfolioDirectory, `${slug}.md`);

	try {
		const rawMarkdown = readFileSync(filePath, "utf8");
		return createPortfolioPage(slug, rawMarkdown);
	} catch {
		return null;
	}
}

export function getPortfolioProjects() {
	return readMarkdownFiles()
		.filter((project) => project.title && project.blurb)
		.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
