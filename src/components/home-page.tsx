import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Projects from "./projects";
import Skills from "./skills";
import SlideEnterInit from "./slide-enter-init";

export default function HomePage() {
	return (
		<>
			<SlideEnterInit />
			<Navbar />
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
