export default function Footer() {
	return (
		<footer className="border-t border-border py-8 px-6 relative space-y-2">
			<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
				<p className="font-mono text-xs text-muted-foreground">
					cutforth.dev — Alex Cutforth
				</p>
				<p className="font-mono text-xs text-muted-foreground">
					Christchurch, New Zealand
				</p>
			</div>

			<p className="font-mono text-xs text-muted-foreground max-w-5xl mx-auto">
				DISCLAIMER: I did not design this website, AI did. I'm not a designer
				lol, just a developer
			</p>
		</footer>
	);
}
