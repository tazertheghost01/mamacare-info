"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "999px",
        padding: "6px 14px",
        cursor: "pointer",
        color: "var(--fg)",
        fontSize: "13px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        transition: "all 0.2s ease",
      }}
    >
      <span style={{ fontSize: "16px" }}>{theme === "dark" ? "☀️" : "🌙"}</span>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
