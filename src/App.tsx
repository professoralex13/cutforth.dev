import { useEffect, useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import useSlideEnter from "./hooks/use-slide-enter";
import PortfolioPage from "./pages/portfolio";
import PortfolioProjectPage from "./pages/portfolio-project";

function HomePage() {
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

function App() {
	const [pathname, setPathname] = useState(window.location.pathname);

	useEffect(() => {
		const onNavigation = () => setPathname(window.location.pathname);

		window.addEventListener("popstate", onNavigation);

		return () => window.removeEventListener("popstate", onNavigation);
	}, []);

	if (pathname === "/portfolio") {
		return <PortfolioPage />;
	}

	if (pathname.startsWith("/portfolio/")) {
		const slug = pathname.replace("/portfolio/", "");

		return <PortfolioProjectPage slug={slug} />;
	}

	return <HomePage />;
}

export default App;
