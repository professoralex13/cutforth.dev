import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/Github";
import { LinkedinIcon } from "../icons/Linkedin";

const CONTACTS = [
	{
		href: "mailto:alex@cutforth.dev",
		icon: <Mail size={16} />,
		label: "alex@cutforth.dev",
	},
	{
		href: "https://github.com/professoralex13",
		icon: <GithubIcon size={16} />,
		label: "github.com/professoralex13",
	},
	{
		href: "https://www.linkedin.com/in/alex-cutforth-5133b4299/",
		icon: <LinkedinIcon size={16} />,
		label: "linkedin.com/in/alex-cutforth-5133b4299",
	},
];

export default function Contact() {
	return (
		<section id="contact" className="py-28 px-6 border-t border-border">
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
				<div className="slide-enter left">
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						05
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						Contact
					</h2>
				</div>
				<div className="space-y-8 slide-enter right">
					<p className="text-muted-foreground font-[Figtree,sans-serif] text-lg leading-relaxed max-w-md">
						Open to collaborations and conversations. Feel free to reach out via
						email or find me on LinkedIn and GitHub.
					</p>
					<div className="space-y-4">
						{CONTACTS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								target={link.href.startsWith("mailto") ? undefined : "_blank"}
								rel={
									link.href.startsWith("mailto")
										? undefined
										: "noopener noreferrer"
								}
								className="group flex items-center gap-4 font-mono text-sm text-foreground hover:text-primary transition-colors"
							>
								<div className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
									{link.icon}
								</div>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
