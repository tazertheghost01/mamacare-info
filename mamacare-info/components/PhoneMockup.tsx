"use client";

interface PhoneMockupProps {
  platform: "ios" | "android";
}

export default function PhoneMockup({ platform }: PhoneMockupProps) {
  const isIOS = platform === "ios";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: "180px",
          height: "360px",
          background: "var(--surface)",
          border: "2px solid var(--border)",
          borderRadius: isIOS ? "40px" : "24px",
          position: "relative",
          boxShadow: "0 0 60px rgba(22,163,74,0.15), 0 20px 60px rgba(0,0,0,0.3)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px) scale(1.02)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 0 80px rgba(22,163,74,0.3), 0 30px 80px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 0 60px rgba(22,163,74,0.15), 0 20px 60px rgba(0,0,0,0.3)";
        }}
      >
        {/* Notch / Camera pill */}
        {isIOS ? (
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "22px",
              background: "var(--fg)",
              borderRadius: "12px",
              zIndex: 2,
              opacity: 0.85,
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "10px",
              height: "10px",
              background: "var(--fg)",
              borderRadius: "50%",
              zIndex: 2,
              opacity: 0.85,
            }}
          />
        )}

        {/* Screen content */}
        <div
          style={{
            position: "absolute",
            inset: "4px",
            borderRadius: isIOS ? "36px" : "20px",
            background: "linear-gradient(160deg, var(--green-dark) 0%, #0a0a0a 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          {/* App icon placeholder */}
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #16a34a, #052e16)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(22,163,74,0.5)",
            }}
          >
            <img
              src="/logo.png"
              alt="App logo"
              style={{
                width: "36px",
                height: "36px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <p
            style={{
              color: "#fff",
              fontSize: "11px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            MamaCare
          </p>
          {/* Fake screen lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                width: `${90 - i * 10}%`,
                height: "4px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "2px",
              }}
            />
          ))}
        </div>

        {/* Side buttons for Android */}
        {!isIOS && (
          <div
            style={{
              position: "absolute",
              right: "-3px",
              top: "80px",
              width: "3px",
              height: "40px",
              background: "var(--border)",
              borderRadius: "2px",
            }}
          />
        )}
      </div>

      {/* Platform label */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "var(--fg)",
            marginBottom: "4px",
          }}
        >
          {isIOS ? "iPhone" : "Android"}
        </p>
        <p style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
          {isIOS ? "iOS 15+" : "Android 8+"}
        </p>
      </div>
    </div>
  );
}
