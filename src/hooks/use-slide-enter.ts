import { useEffect } from "react";

export default function useSlideEnter() {
	useEffect(() => {
		const elements = document.querySelectorAll(".slide-enter");

		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate");

						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.2,
			},
		);

		elements.forEach((target) => {
			observer.observe(target);
		});
	});
}
