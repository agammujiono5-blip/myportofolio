import { createRoot } from "react-dom/client";
import App from "./app/App";

// 🔥 WAJIB IMPORT SEMUA INI
import "./styles/index.css";
import "./styles/theme.css";      // ← ini file yang kamu kirim
import "./styles/tailwind.css";

createRoot(document.getElementById("root")!).render(<App />)