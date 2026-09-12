import CharacterColumn, { type Character } from "@/components/CharacterColumn";
import AnyOs from "@/components/AnyOs";

const Side = ({ webState }: { webState: "g" | "a" }) => (
  <>
    <div className="lbl">agents</div>
    <div><span className="g">●</span> herdr</div>
    <div><span className={webState}>{webState === "a" ? "◉" : "●"}</span> web-dashboard</div>
    <div><span className="g">●</span> data-pipeline</div>
    <div><span className="o">○</span> explore</div>
    <div className="lbl m">machines</div>
    <div>local · workbox</div>
  </>
);

const CHARS: Character[] = [
  {
    id: "1a", kind: "collie", name: "Pup", desc: "A sheepdog. Literal herder, ears tell you the state.",
    mood: "idle", list: "default", cwd: "~/Projects", side: <Side webState="g" />,
    out: `❯ make the hero mock match real claude code
● Read the real pane over the socket.
● Plan:
  · index.html — swap the mark, bump version
  · css/style.css — coral bypass line
⠋ Baking… (13m 36s · esc to interrupt)`,
  },
  {
    id: "1b", kind: "ewe", name: "Ewe", desc: "One of the herd. Soft, round, sits quietly in the corner.",
    mood: "alert", list: "blocked", cwd: "~/Projects", side: <Side webState="a" />,
    out: `❯ finish the usage chart, ship to staging
● Wrote src/components/UsageChart.tsx
● Typecheck and build clean, 41.2 kB gzipped.

Bash command
  bunx wrangler deploy --env staging
Do you want to proceed?
❯ 1. Yes
  2. No, tell Claude what to do differently`,
  },
  {
    id: "1c", kind: "cursor", name: "Blink", desc: "A block cursor with eyes. Terminal-native, no animal metaphor.",
    mood: "idle", list: "deploying", cwd: "~/data-pipeline", side: <Side webState="g" />,
    out: `❯ uv run jobs/backfill_events.py
02:28:41 batch 4,102 ok  20,510,000 rows
02:29:03 batch 4,103 ok  checkpoint written
02:30:18 WARN upstream throttled, retry 2s
02:30:42 batch 4,106 ok  checkpoint written
02:31:09 elapsed 6h 12m · 68% · eta 2h 54m`,
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="hdr">
        <div className="eyebrow">TURN 1</div>
        <h1 className="h1">herdr companion · three characters, one behavior</h1>
        <div className="lede">
          The card above the character is the same across <a href="#1a">1a</a>–<a href="#1c">1c</a>; only the character changes. OS variants below follow the Tweaks character.
        </div>
      </div>
      <div className="row">{CHARS.map((c) => <CharacterColumn key={c.id} c={c} />)}</div>
      <AnyOs />
    </main>
  );
}
