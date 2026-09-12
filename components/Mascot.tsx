import type { CSSProperties } from "react";

export type Kind = "collie" | "ewe" | "cursor";
export type Mood = "idle" | "alert" | "catch";

type Props = { kind?: Kind; mood?: Mood; zoom?: number };

function Eye({ l, t, w, h, r, bg, pbg, ps, pupil }: {
  l: number; t: number; w: number; h: number; r: string; bg: string; pbg: string; ps: number; pupil: number;
}) {
  return (
    <div style={{ left: l, top: t, width: w, height: h, borderRadius: r, background: bg }}>
      <div style={{ left: pupil, top: 3, width: ps, height: ps, borderRadius: "50%", background: pbg }} />
    </div>
  );
}

export default function Mascot({ kind = "collie", mood = "idle", zoom = 1 }: Props) {
  const alert = mood === "alert", catchM = mood === "catch";
  const headRot = alert ? -8 : catchM ? 6 : 0;
  const earL = alert ? -30 : 0, earR = alert ? 30 : 0;
  const tailRot = alert ? -40 : -20;
  const squash = catchM ? 0.88 : 1;
  const pupil = alert ? 4 : 3;
  const mouthW = alert ? 6 : catchM ? 14 : 10;
  const dark = "#1d1d21", wool = "#f4f1e8";

  let body: React.ReactNode;
  if (kind === "collie") {
    body = (
      <>
        <div style={{ left: 8, top: 40, width: 14, height: 36, borderRadius: 7, background: wool, transform: `rotate(${tailRot}deg)`, transformOrigin: "50% 90%" }}>
          <div style={{ top: 0, left: 0, width: 14, height: 12, borderRadius: "7px 7px 3px 3px", background: dark }} />
        </div>
        <div style={{ left: 24, top: 88, width: 11, height: 20, borderRadius: "0 0 5px 5px", background: wool }} />
        <div style={{ left: 40, top: 88, width: 11, height: 20, borderRadius: "0 0 5px 5px", background: dark }} />
        <div style={{ left: 72, top: 88, width: 11, height: 20, borderRadius: "0 0 5px 5px", background: wool }} />
        <div style={{ left: 88, top: 88, width: 11, height: 20, borderRadius: "0 0 5px 5px", background: dark }} />
        <div className="breathe" style={{ left: 16, top: 44, width: 90, height: 56, borderRadius: "50%", background: wool, transform: `scaleY(${squash})`, transformOrigin: "50% 100%" }}>
          <div style={{ left: 44, top: -2, width: 44, height: 38, borderRadius: "50%", background: dark }} />
          <div style={{ left: 6, top: 8, width: 26, height: 22, borderRadius: "50%", background: dark }} />
        </div>
        <div style={{ left: 52, top: 8, width: 62, height: 54, borderRadius: "50% 50% 46% 46%", background: dark, transform: `rotate(${headRot}deg)`, transformOrigin: "40% 100%" }}>
          <div style={{ left: -6, top: 6, width: 18, height: 26, borderRadius: 9, background: dark, transform: `rotate(${earL}deg)`, transformOrigin: "50% 10%" }} />
          <div style={{ left: 50, top: 6, width: 18, height: 26, borderRadius: 9, background: dark, transform: `rotate(${earR}deg)`, transformOrigin: "50% 10%" }} />
          <div style={{ left: 25, top: 0, width: 12, height: 54, borderRadius: 6, background: wool }} />
          <div style={{ left: 14, top: 30, width: 34, height: 24, borderRadius: "50%", background: wool }} />
          <Eye l={12} t={19} w={11} h={11} r="50%" bg="#fff" pbg="#111" ps={5} pupil={pupil} />
          <Eye l={39} t={19} w={11} h={11} r="50%" bg="#fff" pbg="#111" ps={5} pupil={pupil} />
          <div style={{ left: 27, top: 38, width: 8, height: 6, borderRadius: 4, background: "#111" }} />
        </div>
      </>
    );
  } else if (kind === "ewe") {
    body = (
      <>
        {[30, 46, 68, 84].map((l) => (
          <div key={l} style={{ left: l, top: 90, width: 7, height: 18, borderRadius: "0 0 3px 3px", background: dark }} />
        ))}
        <div className="breathe" style={{ left: 16, top: 40, width: 92, height: 60, transform: `scaleY(${squash})`, transformOrigin: "50% 100%" }}>
          <div style={{ left: 0, top: 10, width: 92, height: 50, borderRadius: 40, background: wool }} />
          <div style={{ left: 4, top: 0, width: 30, height: 30, borderRadius: "50%", background: wool }} />
          <div style={{ left: 30, top: -6, width: 34, height: 34, borderRadius: "50%", background: wool }} />
          <div style={{ left: 60, top: 0, width: 28, height: 28, borderRadius: "50%", background: wool }} />
          <div style={{ left: 8, top: 30, width: 76, height: 22, borderRadius: "50%", background: "#e6e1d3", opacity: 0.7 }} />
        </div>
        <div style={{ left: 78, top: 24, width: 38, height: 46, borderRadius: "14px 14px 16px 16px", background: dark, transform: `rotate(${headRot}deg)`, transformOrigin: "30% 100%" }}>
          <div style={{ left: -12, top: 10, width: 16, height: 9, borderRadius: 5, background: dark, transform: `rotate(${earL}deg)` }} />
          <div style={{ left: 34, top: 10, width: 16, height: 9, borderRadius: 5, background: dark, transform: `rotate(${earR}deg)` }} />
          <div style={{ left: 4, top: -12, width: 30, height: 22, borderRadius: "50%", background: wool }} />
          <Eye l={6} t={16} w={10} h={10} r="50%" bg="#fff" pbg="#111" ps={4} pupil={pupil} />
          <Eye l={22} t={16} w={10} h={10} r="50%" bg="#fff" pbg="#111" ps={4} pupil={pupil} />
          <div style={{ left: 14, top: 34, width: 10, height: 5, borderRadius: 3, background: "#3a3a40" }} />
        </div>
      </>
    );
  } else {
    body = (
      <>
        <div style={{ left: 22, top: 104, width: 76, height: 5, borderRadius: 3, background: "#2c5c42" }} />
        <div className="breathe" style={{ left: 30, top: 18, width: 60, height: 84, borderRadius: 8, background: "#4fbf7a", boxShadow: "0 0 22px rgba(79,191,122,.35)", transform: `rotate(${headRot}deg) scaleY(${squash})`, transformOrigin: "50% 100%" }}>
          <Eye l={12} t={22} w={10} h={16} r="4px" bg="#0f1a14" pbg="#dff5e7" ps={4} pupil={pupil} />
          <Eye l={38} t={22} w={10} h={16} r="4px" bg="#0f1a14" pbg="#dff5e7" ps={4} pupil={pupil} />
          <div style={{ left: 24, top: 52, width: mouthW, height: 4, borderRadius: 2, background: "#0f1a14" }} />
        </div>
      </>
    );
  }

  const style = { zoom } as CSSProperties;
  return (
    <div className={`m ${mood}`} role="img" aria-label={`${kind} mascot, ${mood}`} style={style}>
      {body}
      {alert && (
        <div style={{ left: 100, top: 0, width: 20, height: 20, borderRadius: "50%", background: "#e0a03a", color: "#1a1408", font: "700 12px/20px var(--mono)", textAlign: "center", boxShadow: "0 0 0 3px #17171a" }}>1</div>
      )}
    </div>
  );
}
