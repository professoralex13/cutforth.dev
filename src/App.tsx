import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
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
			</main>
		</>
	);
}

export default App;
