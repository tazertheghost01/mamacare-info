"use client";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.body.classList.add("scrollable");
    return () => document.body.classList.remove("scrollable");
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By downloading or using AppName, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the application. We reserve the right to update these terms at any time, and your continued use of the app constitutes acceptance of any changes.",
    },
    {
      title: "2. Use of the Service",
      content:
        "AppName grants you a limited, non-exclusive, non-transferable, revocable licence to use the application for your personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of our services or software, nor may you reverse engineer or attempt to extract the source code of that software.",
    },
    {
      title: "3. User Accounts",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account. We reserve the right to terminate accounts at our discretion.",
    },
    {
      title: "4. Prohibited Conduct",
      content:
        "You agree not to use the app for any unlawful purpose or in any way that interrupts, damages, or impairs the service. Prohibited conduct includes but is not limited to: uploading malicious code, attempting to gain unauthorised access to our systems, and engaging in any activity that violates applicable laws.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All content, features, and functionality of AppName — including but not limited to text, graphics, logos, and software — are the exclusive property of AppName Ltd and are protected by applicable intellectual property laws.",
    },
    {
      title: "6. Disclaimers",
      content:
        "AppName is provided on an 'as is' basis without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free. Your use of the service is at your sole risk.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, AppName Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of, or inability to use, the service.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.",
    },
    {
      title: "9. Contact",
      content:
        "If you have questions about these Terms, please contact us at legal@appname.ng.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
        paddingBottom: "100px",
      }}
    >
      {/* Content */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: "12px",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Terms of Use
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
            Last updated: June 2025
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {sections.map((s, i) => (
            <section
              key={i}
              style={{
                borderLeft: "3px solid var(--border)",
                paddingLeft: "24px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "var(--fg)",
                  marginBottom: "10px",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {s.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
