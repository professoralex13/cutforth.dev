import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import useSlideEnter from "./hooks/use-slide-enter";

function App() {
	useSlideEnter();

	return (
		<>
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

export default App;
