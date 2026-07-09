import clsx from "clsx";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/use-scroll-spy";
import { GithubIcon } from "../icons/Github";
import { LinkedinIcon } from "../icons/Linkedin";

const NAV_LINKS = [
	{ label: "about", href: "#about" },
	{ label: "skills", href: "#skills" },
	{ label: "experience", href: "#experience" },
	{ label: "projects", href: "#projects" },
	{ label: "contact", href: "#contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	const activeSection = useScrollSpy([
		"hero",
		...NAV_LINKS.map((link) => link.href.slice(1)),
	]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);

		window.addEventListener("scroll", onScroll, { passive: true }); // passive: true eliminates scroll jank

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={clsx(
				"fixed top-0 inset-x-0 z-50",
				scrolled && "bg-background/95 backdrop-blur-sm border-b border-border",
			)}
		>
			<nav className="flex items-center justify-between max-w-5xl mx-auto h-14 px-6">
				<a
					href="#hero"
					className={clsx(
						"font-mono text-sm font-semibold tracking-widest uppercase hover:opacity-80 transition-opacity",
						activeSection === "hero"
							? " text-primary"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					cutforth.dev
				</a>
				<ul className="flex items-center gap-7">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className={clsx(
									"font-mono text-xs tracking-wider uppercase transition-colors ",
									activeSection === link.href.slice(1)
										? "text-primary"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-7">
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
			</nav>
		</header>
	);
}
