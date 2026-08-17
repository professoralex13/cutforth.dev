import type { Metadata, Viewport } from "next";
import "../index.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://cutforth.dev"),
	title: "Alex Cutforth | Software Developer",
	description:
		"Portfolio of Alex Cutforth, a software developer in Christchurch, New Zealand focused on geospatial algorithms, embedded systems, and full-stack web tools.",
	keywords: [
		"Alex Cutforth",
		"software developer",
		"robotics engineer",
		"mechatronics",
		"geospatial algorithms",
		"Rust",
		"TypeScript",
		"portfolio",
	],
	authors: [{ name: "Alex Cutforth" }],
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_NZ",
		title: "Alex Cutforth | Software Developer",
		description:
			"Software developer in Christchurch, NZ building precise software across geospatial, embedded, and full-stack domains.",
		siteName: "cutforth.dev",
		url: "https://cutforth.dev/",
		images: [
			{
				url: "https://cutforth.dev/og-image.jpg",
				alt: "Portrait of Alex Cutforth",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Alex Cutforth | Software Developer",
		description:
			"Software developer in Christchurch, NZ building precise software across geospatial, embedded, and full-stack domains.",
		images: ["https://cutforth.dev/og-image.jpg"],
	},
};

export const viewport: Viewport = {
	themeColor: "#0b1118",
};

const personStructuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Alex Cutforth",
	url: "https://cutforth.dev/",
	jobTitle: "Software Developer",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Christchurch",
		addressCountry: "NZ",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<script type="application/ld+json">
					{JSON.stringify(personStructuredData)}
				</script>
				{children}
			</body>
		</html>
	);
}
