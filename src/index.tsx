import ReactDOM from "react-dom/client";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import App from "./App.tsx";

import { init } from "./init.ts";
import "./mockEnv.ts";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";

// Initialize the package.
init(retrieveLaunchParams()?.startParam === "debug" || import.meta.env.DEV);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
