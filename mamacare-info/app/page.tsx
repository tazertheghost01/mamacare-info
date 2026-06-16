"use client";

import dynamic from "next/dynamic";
import PhoneMockup from "@/components/PhoneMockup";
import Footer from "@/components/Footer";

const P5Background = dynamic(() => import("@/components/P5Background"), { ssr: false });

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.5C2.83 23.29 2.63 22.94 2.63 22.5V1.5C2.63 1.06 2.83 0.71 3.18 0.5L3.27 0.45L14.75 11.93V12.07L3.27 23.55L3.18 23.5ZM18.25 15.44L6.17 22.37L14.22 14.32L18.25 15.44ZM19.82 14.56C20.3 14.84 20.3 15.16 19.82 15.44L18.51 16.2L14.32 12L18.51 7.8L19.82 8.56C20.3 8.84 20.3 9.16 19.82 9.44L18.25 10.44V13.56L19.82 14.56ZM6.17 1.63L18.25 8.56L14.22 9.68L6.17 1.63Z"/>
  </svg>
);

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <P5Background />

      {/* Content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 40px 100px",
          gap: "48px",
        }}
      >
        {/* Header text */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(22,163,74,0.12)",
              border: "1px solid rgba(22,163,74,0.3)",
              borderRadius: "999px",
              padding: "4px 16px",
              fontSize: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: "var(--green)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Now Available
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "14px",
              letterSpacing: "-0.02em",
            }}
          >
            Download <span style={{ color: "var(--green)" }}>AppName</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "var(--muted)",
              maxWidth: "420px",
              lineHeight: 1.6,
            }}
          >
            Available on iOS and Android. Get started in seconds.
          </p>
        </div>

        {/* Phone mockups */}
        <div
          style={{
            display: "flex",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "flex-end",
          }}
        >
          <PhoneMockup platform="ios" />
          <PhoneMockup platform="android" />
        </div>

        {/* Download buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--fg)",
              color: "var(--bg)",
              padding: "13px 26px",
              borderRadius: "12px",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              transition: "all 0.2s ease",
              border: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--green)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--fg)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)";
            }}
          >
            <AppleIcon /> App Store
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "var(--fg)",
              padding: "13px 26px",
              borderRadius: "12px",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              transition: "all 0.2s ease",
              border: "2px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--green)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--green)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
            }}
          >
            <PlayIcon /> Google Play
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
