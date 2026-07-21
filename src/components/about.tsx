export default function About() {
	return (
		<section
			id="about"
			className="border-t border-border py-28 px-6 overflow-x-hidden"
		>
			<div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 slide-enter left">
				<div>
					<p className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3">
						01
					</p>
					<h2 className="font-mono text-3xl font-bold text-foreground">
						About
					</h2>
				</div>
				<div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed font-[Figtree,sans-serif]">
					<p>
						I&apos;m a software developer, and Engineering student at the
						University of Canterbury, majoring in Mechatronics Engineering. At
						University I am captain of the Robotics Club, where we have won
						multiple national titles and competed at the World Championships in
						Dallas, TX.
					</p>
					<p>
						Professionally, I work remotely for Navigraph — a Stockholm-based
						aviation software company where I focus on geospatial algorithms,
						airport mapping data processing, and react applications. The work
						sits at the intersection of precision engineering and complex data:
						exactly where I like to be.
					</p>
					<p>
						Outside of uni and work, I tutor high school robotics teams, sing
						baritone in competitive barbershop, and have a tendency to take up
						new hobbies that I don't have time for, and end up in some foreign
						country to meet others with the same hobby.
					</p>
					<div className="flex gap-3 pt-2">
						<span className="font-mono text-xs border border-border px-3 py-1 rounded-full text-muted-foreground">
							Christchurch, NZ
						</span>
						<span className="font-mono text-xs border border-border px-3 py-1 rounded-full text-muted-foreground">
							BE(Hons) @ UC
						</span>
						<span className="font-mono text-xs border border-border px-3 py-1 rounded-full text-muted-foreground">
							Navigraph
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
