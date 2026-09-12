"use client";

import { useState } from "react";
import Mascot, { type Kind } from "./Mascot";
import AgentList from "./AgentList";

const KINDS: Kind[] = ["collie", "ewe", "cursor"];
const sq = (bg: string, size = 32, r = 7) => <div style={{ width: size, height: size, borderRadius: r, background: bg }} />;

export default function AnyOs() {
  const [kind, setKind] = useState<Kind>("collie");
  return (
    <>
      <div className="hdr" style={{ marginTop: 16 }}>
        <div className="eyebrow">ANY OS</div>
        <h2 className="h2">Same herd, wherever the tty is</h2>
        <div className="lede">Character follows the Tweaks setting.</div>
        <div className="picker" role="group" aria-label="Tweaks character">
          Tweaks
          {KINDS.map((k) => (
            <button key={k} type="button" aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="os">
          <div className="os-lbl">WINDOWS · lives in the tray, popover on click</div>
          <div className="os-scene win">
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 44, background: "rgba(22,24,30,.85)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(255,255,255,.08)" }} />
            <div style={{ position: "absolute", left: "50%", bottom: 6, transform: "translateX(-50%)", display: "flex", gap: 10 }}>{sq("#3b3f4a")}{sq("#2f4d3b")}{sq("#3b3f4a")}{sq("#3b3f4a")}</div>
            <div style={{ position: "absolute", right: 12, bottom: 0, height: 44, display: "flex", alignItems: "center", gap: 12, font: "500 11px var(--mono)", color: "#d6d4cc" }}>
              <div style={{ width: 44, height: 38, position: "relative" }}><div style={{ position: "absolute", left: 0, bottom: 2 }}><Mascot kind={kind} mood="alert" zoom={0.34} /></div></div>
              <span>14:02</span>
            </div>
            <div style={{ position: "absolute", right: 12, bottom: 56, background: "#1c1d24", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: 8, boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
              <AgentList variant="blocked" zoom={0.9} />
              <div className="btns" style={{ marginTop: 8, padding: "0 4px 2px" }}><button className="btn primary" type="button">Approve deploy</button><button className="btn" type="button">Open pane</button></div>
            </div>
          </div>
        </div>
        <div className="os">
          <div className="os-lbl">LINUX · desktop notification, character on the shelf</div>
          <div className="os-scene lin">
            <div style={{ position: "absolute", inset: "0 0 auto 0", height: 28, background: "#0b0b0d", display: "flex", alignItems: "center", padding: "0 14px", font: "500 11px var(--sans)", color: "#d6d4cc" }}>
              <span>Activities</span><span style={{ marginLeft: "auto", marginRight: "auto", fontFamily: "var(--mono)" }}>Sat 14:02</span><span>en · ▾</span>
            </div>
            <div style={{ position: "absolute", left: "50%", top: 38, transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 12, width: 340, padding: "10px 12px", borderRadius: 12, background: "var(--card)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 14px 30px rgba(0,0,0,.45)" }}>
              <div style={{ width: 44, height: 40, position: "relative", flex: "none" }}><div style={{ position: "absolute", left: 0, bottom: 0 }}><Mascot kind={kind} mood="idle" zoom={0.36} /></div></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center", font: "600 12px var(--sans)" }}><div className="dot s" style={{ background: "var(--sky)" }} />web-dashboard is done</div>
                <div style={{ font: "11px var(--mono)", color: "var(--muted)" }}>deployed to staging · 41.2 kB · 6m</div>
              </div>
              <button className="btn" type="button" style={{ flex: "none", padding: "6px 10px", borderRadius: 7, background: "rgba(255,255,255,.08)", fontSize: 11 }}>Open</button>
            </div>
            <div style={{ position: "absolute", left: 0, top: 28, bottom: 0, width: 56, background: "rgba(0,0,0,.35)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 12 }}>{sq("#3b3b45", 34, 9)}{sq("#2f4d3b", 34, 9)}{sq("#3b3b45", 34, 9)}</div>
            <div style={{ position: "absolute", right: 16, bottom: 12 }}><Mascot kind={kind} mood="idle" /></div>
          </div>
        </div>
        <div className="os">
          <div className="os-lbl">PHONE · lock-screen notification</div>
          <div className="os-scene ph">
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 22, display: "flex", justifyContent: "space-between", padding: "0 14px", alignItems: "center", font: "600 10px var(--mono)", color: "#d6d4cc" }}><span>14:02</span><span>●●●</span></div>
            <div style={{ position: "absolute", top: 40, left: 0, right: 0, textAlign: "center", font: "300 54px/1 var(--sans)", letterSpacing: "-.03em", color: "var(--fg)" }}>14:02</div>
            <div style={{ position: "absolute", top: 100, left: 0, right: 0, textAlign: "center", font: "12px var(--sans)", color: "var(--muted)" }}>Saturday 12 September</div>
            <div style={{ position: "absolute", left: 12, right: 12, top: 140, padding: 10, borderRadius: 14, background: "rgba(31,31,36,.9)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 14px 30px rgba(0,0,0,.45)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 30, position: "relative", flex: "none" }}><div style={{ position: "absolute", left: 0, bottom: 0 }}><Mascot kind={kind} mood="alert" zoom={0.27} /></div></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: "600 12px var(--sans)" }}>herdr <span style={{ color: "var(--muted)", fontWeight: 500 }}>· now</span></div>
                  <div style={{ font: "11px var(--sans)", color: "#d6d4cc" }}>web-dashboard needs you</div>
                </div>
              </div>
              <div style={{ marginTop: 8, padding: "7px 9px", borderRadius: 8, background: "var(--well)", font: "10px var(--mono)", color: "var(--paper)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>bunx wrangler deploy --env staging</div>
              <div className="btns" style={{ gap: 6, marginTop: 8 }}>
                <button className="btn primary" type="button" style={{ padding: "7px 0", fontSize: 11 }}>Approve</button>
                <button className="btn" type="button" style={{ padding: "7px 0", fontSize: 11, background: "rgba(255,255,255,.08)" }}>Reply</button>
              </div>
            </div>
            <div style={{ position: "absolute", left: 12, right: 12, top: 262, padding: "9px 10px", borderRadius: 12, background: "rgba(31,31,36,.7)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", gap: 8, font: "11px var(--sans)" }}>
              <div className="dot s" style={{ background: "var(--sage)" }} /><span style={{ fontWeight: 600 }}>data-pipeline</span><span style={{ color: "var(--muted)" }}>68% · eta 2h 54m</span>
            </div>
            <div style={{ position: "absolute", left: "50%", bottom: 8, transform: "translateX(-50%)", width: 80, height: 4, borderRadius: 2, background: "rgba(255,255,255,.5)" }} />
          </div>
        </div>
      </div>
    </>
  );
}
