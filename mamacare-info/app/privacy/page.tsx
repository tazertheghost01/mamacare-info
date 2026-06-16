"use client";
import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.body.classList.add("scrollable");
    return () => document.body.classList.remove("scrollable");
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide when you create an account or contact us. We also collect information automatically when you use the app, including device information, log data, usage data, and location information where you grant permission.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve the app; process transactions and send related information; send technical notices and support messages; respond to your comments and questions; and comply with legal obligations. We do not sell your personal information to third parties.",
    },
    {
      title: "3. Data Sharing",
      content:
        "We may share your information with third-party vendors and service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These parties are obligated to keep your information confidential and are prohibited from using it for any other purpose.",
    },
    {
      title: "4. Data Retention",
      content:
        "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. You may request deletion of your data at any time by contacting us.",
    },
    {
      title: "5. Security",
      content:
        "We implement industry-standard technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "6. Your Rights",
      content:
        "Depending on your jurisdiction, you may have the right to access, update, or delete the personal information we hold about you; object to or restrict our processing of your data; and request data portability. To exercise these rights, please contact us at privacy@appname.ng.",
    },
    {
      title: "7. Children's Privacy",
      content:
        "AppName is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will take steps to delete it promptly.",
    },
    {
      title: "8. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page or by sending a notification through the app. Your continued use of AppName after any changes constitutes your acceptance of the revised policy.",
    },
    {
      title: "9. Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@appname.ng or write to us at AppName Ltd, Lagos, Nigeria.",
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
            Privacy Policy
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
