"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 40px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        zIndex: 50,
        backdropFilter: "blur(10px)",
      }}
    >
      <p style={{ fontSize: "13px", color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
        © {new Date().getFullYear()} MamaCare Ltd. All rights reserved.
      </p>

      <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link
          href="/terms"
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Terms of Use
        </Link>
        <Link
          href="/privacy"
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Privacy Policy
        </Link>
        <ThemeToggle />
      </nav>
    </footer>
  );
}
