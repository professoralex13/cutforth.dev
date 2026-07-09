import { useEffect, useRef, useState } from "react";

interface TerminalRewriteProps {
	items: string[];

	typingSpeed?: number;
	deletionSpeed?: number;
	completeWait?: number;
}

export default function TerminalRewrite({
	items,
	typingSpeed = 16,
	deletionSpeed = 29,
	completeWait = 2400,
}: TerminalRewriteProps) {
	const [itemIndex, setItemIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");

	const [isDeleting, setIsDeleting] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

	useEffect(() => {
		const current = items[itemIndex];

		if (!isDeleting && displayedText.length < current.length) {
			// If not in deleting mode, and there are more characters to add, schedule another character to be added
			timerRef.current = setTimeout(
				() => setDisplayedText(current.slice(0, displayedText.length + 1)),
				1000 / typingSpeed,
			);
		} else if (!isDeleting && displayedText.length === current.length) {
			// Once the text is full, schedule starting the deletion
			timerRef.current = setTimeout(() => setIsDeleting(true), completeWait);
		} else if (isDeleting && displayedText.length > 0) {
			timerRef.current = setTimeout(
				() => setDisplayedText(displayedText.slice(0, -1)),
				1000 / deletionSpeed,
			);
		} else if (isDeleting && displayedText.length === 0) {
			setIsDeleting(false);
			setItemIndex((i) => (i + 1) % items.length);
		}

		return () => clearTimeout(timerRef.current ?? undefined);
	});

	return displayedText;
}
