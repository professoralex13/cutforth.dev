import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
	const [active, setActive] = useState(ids[0]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setActive(e.target.id);
				});
			},
			{ root: null, rootMargin: "-10% 0px -80% 0px" },
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);

			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [ids]);

	return active;
}
