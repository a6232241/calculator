import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">();

  const initialMode = (isDark: boolean) => {
    setMode(isDark ? "dark" : "light");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      initialMode(localStorage.getItem("mode") === "dark");
    } else {
      initialMode(window?.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`h-screen w-screen bg-white dark:bg-slate-900`}>
      <header className="flex gap-2">
        <button className="text-black dark:text-white" onClick={toggleMode}>
          {mode}
        </button>
      </header>
      <p className="w-full overflow-hidden text-black md:w-8 dark:text-white">
        Cyan
      </p>
    </div>
  );
}

export default App;
