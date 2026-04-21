// ============== SCOREBOARD — animates on scroll ==============

function Scoreboard() {
  const [ref, seen] = useReveal();
  const before = useCountTo(42, seen, 1400);
  const after = useCountTo(94, seen, 1800);
  const gain = useCountTo(127, seen, 2000);

  return (
    <section ref={ref} style={{ padding:'160px 0', borderTop:'1px solid var(--line)', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 800px 400px at 50% 50%, rgba(124,92,255,0.10), transparent 60%)' }} />
      <div className="wrap" style={{ position:'relative' }}>
        <div style={{ textAlign:'center', marginBottom: 80 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>THE NUMBER THAT MATTERS</div>
          <h2 className="display" style={{ fontSize:'clamp(52px, 8vw, 128px)', margin: 0, maxWidth: 1200, marginInline:'auto' }}>
            <span className="serif-i u-dim">The average Gleo customer goes from</span><br/>
            <span style={{ color:'var(--rose)' }}>{before}</span> <span className="serif-i u-dim">to</span> <span className="u-grad">{after}</span>.
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 0, borderTop:'1px solid var(--line-2)', borderBottom:'1px solid var(--line-2)' }} className="scoreboard-stats">
          <StatCell big={`${gain}%`} label="more AI citations in 30 days" />
          <StatCell big="4.2x" label="more qualified AI-driven traffic" divider/>
          <StatCell big="$0" label="spent on agencies, devs, or tools" divider/>
        </div>

        <div style={{ marginTop: 20, textAlign:'center', color:'var(--ink-faint)', fontSize: 12 }} className="mono">
          * MEDIAN VALUES, n=1,847 WORDPRESS SITES, JAN–MAR 2026
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .scoreboard-stats { grid-template-columns: 1fr !important; }
          .scoreboard-stats > * { border-left: 0 !important; border-top: 1px solid var(--line); }
          .scoreboard-stats > *:first-child { border-top: 0; }
        }
      `}</style>
    </section>
  );
}

function StatCell({ big, label, divider }) {
  return (
    <div style={{ padding: '48px 32px', borderLeft: divider ? '1px solid var(--line-2)' : 'none' }}>
      <div className="display" style={{ fontSize:'clamp(56px, 9vw, 128px)', lineHeight: 0.95, color:'var(--ink)', marginBottom: 18 }}>{big}</div>
      <div style={{ fontSize: 15, color:'var(--ink-dim)', maxWidth: 240, lineHeight: 1.45 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Scoreboard });
