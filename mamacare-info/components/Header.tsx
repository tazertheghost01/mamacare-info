"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Download", href: "#download" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "relative",
        zIndex: 20,
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "24px 40px",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <img
          src="/logo.png"
          alt="MamaCare logo"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--fg)",
          }}
        >
          MamaCare
        </span>
      </Link>

      <nav
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "var(--fg)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--green)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
