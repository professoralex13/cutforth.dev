import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
	throw new Error("index.html must contain root element");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
