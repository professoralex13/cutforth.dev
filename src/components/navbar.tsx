"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
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

	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const isPortfolioIndexPage =
		pathname === "/portfolio" || pathname === "/portfolio/";

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
				(scrolled || menuOpen) &&
					"bg-background/95 backdrop-blur-sm border-b border-border",
			)}
		>
			<nav className="flex items-center justify-between max-w-5xl mx-auto h-14 px-6">
				<a
					href={isHomePage ? "#hero" : "/"}
					className={clsx(
						"font-mono text-sm font-semibold tracking-widest uppercase hover:opacity-80 transition-opacity",
						isHomePage && activeSection === "hero"
							? " text-primary"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					cutforth.dev
				</a>
				{isHomePage && (
					<ul className="md:flex items-center gap-7 hidden">
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
				)}
				<div className="hidden md:flex items-center gap-7">
					<a
						href="/portfolio"
						className={clsx(
							"font-mono text-xs tracking-wider uppercase transition-colors",
							isPortfolioIndexPage
								? "text-primary"
								: "text-muted-foreground hover:text-primary",
						)}
					>
						portfolio
					</a>
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
						aria-label="LinkedIn"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						<LinkedinIcon />
					</a>
				</div>
				<button
					type="button"
					className="md:hidden text-muted-foreground hover:text-foreground"
					onClick={() => setMenuOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</nav>
			{/* Hamburger Menu */}
			{menuOpen && (
				<div className="md:hidden bg-background/98 border-b border-border px-6 pb-5 pt-2 flex flex-col gap-3">
					{isHomePage &&
						NAV_LINKS.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setMenuOpen(false)}
								className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-1"
							>
								{l.label}
							</a>
						))}
					<div className="flex gap-4 pt-2">
						<a
							href="/portfolio"
							onClick={() => setMenuOpen(false)}
							className={clsx(
								"font-mono text-sm uppercase tracking-wider transition-colors py-1",
								isPortfolioIndexPage
									? "text-primary"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							portfolio
						</a>
						<a
							href="https://github.com/professoralex13"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground"
						>
							<GithubIcon size={18} />
						</a>
						<a
							href="https://www.linkedin.com/in/alex-cutforth-5133b4299/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground"
						>
							<LinkedinIcon size={18} />
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
