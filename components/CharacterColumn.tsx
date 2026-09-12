import Mascot, { type Kind, type Mood } from "./Mascot";
import AgentList, { type Variant } from "./AgentList";

export type Character = {
  id: string; kind: Kind; name: string; desc: string; mood: Mood; list: Variant; cwd: string;
  side: React.ReactNode; out: string;
};

function Scene({ c }: { c: Character }) {
  return (
    <div className="scene">
      <div className="menubar"><b>herdr</b><span>Spaces</span><span>Agents</span><span>Machines</span><span className="clock">Sat 14:02</span></div>
      <div className="term">
        <div className="term-bar"><i /><i /><i /><span>herdr — {c.cwd}</span></div>
        <div className="term-body">
          <div className="term-side">{c.side}</div>
          <pre className="term-out">{c.out}</pre>
        </div>
      </div>
      <div className="file"><div className="ico"><i /><i /><i /></div><span>usage-spec.md</span></div>
      <div className="dock"><i /><i className="g" /><i /><i className="r" /><i /></div>
      <div className="scene-list"><AgentList variant={c.list} /></div>
      <div className="scene-pet"><Mascot kind={c.kind} mood={c.mood} /></div>
    </div>
  );
}

function Cells({ kind }: { kind: Kind }) {
  return (
    <div className="grid">
      <div className="cell">
        <div className="cell-lbl">APPROVE AN ACTION</div>
        <div className="pop" style={{ width: 214 }}>
          <div className="pop-title"><div className="dot" style={{ background: "var(--amber)" }} />web-dashboard needs you</div>
          <div className="cmd">bunx wrangler deploy --env staging</div>
          <div className="hint">Deploy the dashboard to staging.</div>
          <div className="btns"><button className="btn primary" type="button">Approve</button><button className="btn" type="button">Redirect</button></div>
        </div>
        <div className="cell-pet"><Mascot kind={kind} mood="alert" zoom={0.7} /></div>
      </div>
      <div className="cell">
        <div className="cell-lbl">HAND IT A FILE</div>
        <div className="pop" style={{ width: 200, padding: "10px 6px 6px" }}>
          <div style={{ padding: "0 8px 8px", font: "600 12px var(--sans)" }}>Give <span style={{ font: "500 11px var(--mono)", color: "var(--paper)" }}>usage-spec.md</span> to…</div>
          <div className="pick">
            <div className="on"><div className="dot s" style={{ background: "var(--sage)" }} /><b>herdr</b><span>· claude</span></div>
            <div><div className="dot s" style={{ background: "var(--sage)" }} /><b>web-dashboard</b><span>· claude</span></div>
            <div><div className="dot s hollow" /><b>explore</b><span>· opencode</span></div>
          </div>
        </div>
        <div className="cell-pet"><Mascot kind={kind} mood="catch" zoom={0.7} /></div>
        <div className="thrown" />
      </div>
      <div className="cell tall">
        <div className="cell-lbl">CHAT WITH AN AGENT</div>
        <div className="pop chat" style={{ width: 220 }}>
          <div className="pop-title"><div className="dot" style={{ background: "var(--sage)" }} />data-pipeline <span style={{ color: "var(--muted)", fontWeight: 500 }}>· codex · workbox</span></div>
          <div className="bub me">how&apos;s the backfill?</div>
          <div className="bub them">68% · batch 4,106 · eta 2h 54m. Checkpointing is fine, the laptop can sleep.</div>
          <div className="input">Message data-pipeline…<i /></div>
        </div>
        <div className="cell-pet"><Mascot kind={kind} mood="idle" zoom={0.7} /></div>
      </div>
      <div className="cell tall clip">
        <div className="cell-lbl">PAUSE ONE, THE REST KEEP GOING</div>
        <div style={{ position: "absolute", left: 14, bottom: 14 }}><AgentList variant="paused" zoom={0.78} /></div>
        <div className="cell-pet"><Mascot kind={kind} mood="idle" zoom={0.7} /></div>
      </div>
    </div>
  );
}

export default function CharacterColumn({ c }: { c: Character }) {
  return (
    <div className="col" id={c.id}>
      <div className="col-hdr"><div className="tag">{c.id}</div><div className="name">{c.name}</div><div className="desc">{c.desc}</div></div>
      <Scene c={c} />
      <Cells kind={c.kind} />
    </div>
  );
}
