import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => {
        console.log("before:", darkMode);
        setDarkMode(!darkMode);
      }}
      className="bg-gray-800 text-white px-3 py-2 rounded"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;