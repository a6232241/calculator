import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./app/components/Calculator";

function App() {
  const [mode, setMode] = useState<"light" | "dark">();

  const updateMode = (isDark: boolean) => {
    setMode(isDark ? "dark" : "light");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      updateMode(localStorage.getItem("mode") === "dark");
    } else {
      updateMode(window?.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen w-screen bg-white p-2 dark:bg-black`}>
      <header className="flex gap-2">
        <button className="text-black dark:text-white" onClick={toggleMode}>
          {mode}
        </button>
      </header>
      <main className="flex h-full w-full items-center justify-center">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
