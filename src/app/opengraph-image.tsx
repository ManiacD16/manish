import { ImageResponse } from "next/og";

export const alt = "Manish Singh — Full Stack Blockchain Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#e2dedb", color: "#1d1d1b", padding: "54px", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #1d1d1b", paddingBottom: "18px", fontSize: 22 }}>
          <span>THE CHAIN LEDGER</span><span>NOIDA / INDIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 164, lineHeight: 0.82, letterSpacing: "-9px", textTransform: "uppercase" }}>MANISH</div>
          <div style={{ fontSize: 164, lineHeight: 0.82, letterSpacing: "-9px", textTransform: "uppercase" }}>SINGH</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #1d1d1b", paddingTop: "18px", fontSize: 25 }}>
          <span>FULL STACK BLOCKCHAIN DEVELOPER</span>
          <span style={{ display: "flex", width: 115, height: 44, alignItems: "center", justifyContent: "center", background: "#c03f13", color: "#e2dedb", fontSize: 18 }}>WEB3</span>
        </div>
      </div>
    ),
    size
  );
}
