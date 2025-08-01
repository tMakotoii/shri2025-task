import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
