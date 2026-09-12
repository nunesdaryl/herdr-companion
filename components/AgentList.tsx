import type { CSSProperties } from "react";

export type Variant = "default" | "blocked" | "deploying" | "done" | "paused";

function Row({ dot, name, engine, line, status, statusColor, lineClass = "", rowClass = "", right }: {
  dot: React.ReactNode; name: string; engine: string; line: string;
  status?: string; statusColor?: string; lineClass?: string; rowClass?: string; right?: React.ReactNode;
}) {
  return (
    <div className={`al-row ${rowClass}`}>
      {dot}
      <div className="al-body">
        <div className="al-name">{name} <span>· {engine}</span></div>
        <div className={`al-line ${lineClass}`}>{line}</div>
      </div>
      {right ?? <div className="al-st" style={{ color: statusColor }}>{status}</div>}
    </div>
  );
}

const live = <div className="dot live" />;

export default function AgentList({ variant = "default", zoom = 1 }: { variant?: Variant; zoom?: number }) {
  const blocked = variant === "blocked", deploying = variant === "deploying", done = variant === "done", paused = variant === "paused";
  const summary = blocked ? "1 needs you" : paused ? "2 working · 1 paused" : "3 working · 1 idle";
  const style = { zoom } as CSSProperties;

  return (
    <div className="al" style={style}>
      <div className="al-hd">
        <div className="t">the herd</div>
        <div className="k">3 machines</div>
        <div className="k r">{summary}</div>
      </div>
      <Row dot={live} name="herdr" engine="claude" line="editing css/style.css" status="working" statusColor="var(--sage)" />
      {blocked ? (
        <Row dot={<div className="dot warn" />} name="web-dashboard" engine="claude" line="wants to run wrangler deploy" status="blocked" statusColor="var(--amber)" lineClass="a" rowClass="warn" />
      ) : done ? (
        <Row dot={<div className="dot" style={{ background: "var(--sky)" }} />} name="web-dashboard" engine="claude" line="deployed to staging · 41.2 kB" status="done" statusColor="var(--sky)" />
      ) : (
        <Row dot={live} name="web-dashboard" engine="claude" line={deploying ? "deploying to staging…" : "writing UsageChart.tsx"} status="working" statusColor="var(--sage)" />
      )}
      {paused ? (
        <Row
          dot={<div className="dot" style={{ border: "2px solid var(--muted)", boxSizing: "border-box" }} />}
          name="data-pipeline" engine="codex" line="paused at batch 4,127 · 68%" rowClass="paused"
          right={
            <div className="al-ctl">
              <button type="button" aria-label="Resume data-pipeline" style={{ background: "var(--sage)" }}>
                <div style={{ width: 0, height: 0, borderLeft: "9px solid #0f1a14", borderTop: "5px solid transparent", borderBottom: "5px solid transparent", marginLeft: 2 }} />
              </button>
              <button type="button" aria-label="Stop data-pipeline" style={{ background: "rgba(255,255,255,.08)" }}>
                <div style={{ width: 9, height: 9, borderRadius: 2, background: "var(--fg)" }} />
              </button>
            </div>
          }
        />
      ) : (
        <Row dot={live} name="data-pipeline" engine="codex · workbox" line="batch 4,106 ok · 68% · eta 2h 54m" status="working" statusColor="var(--sage)" />
      )}
      <Row dot={<div className="dot hollow" />} name="explore" engine="opencode" line="idle · waiting for a prompt" status="idle" statusColor="#6b6b74" />
    </div>
  );
}
