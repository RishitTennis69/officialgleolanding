// ============== HOW IT WORKS ==============

const STEPS = [
  {
    n: '01',
    title: 'Install the plugin',
    body: 'One click from the WordPress marketplace. No code, no dev team needed.',
    stat: '60s',
    statLabel: 'to install',
  },
  {
    n: '02',
    title: 'Get your GEO score',
    body: 'Gleo scans every page and gives you a 0–100 score — plus exactly what\'s killing it.',
    stat: '0–100',
    statLabel: 'score per page',
  },
  {
    n: '03',
    title: 'One-click fixes',
    body: 'Gleo writes and deploys your schema, entity definitions, and llms.txt. One click.',
    stat: '1 click',
    statLabel: 'to deploy',
  },
  {
    n: '04',
    title: 'Track your citations',
    body: 'See exactly when ChatGPT, Perplexity, or Gemini recommends your business by name.',
    stat: '200+',
    statLabel: 'queries/week',
  },
];

function HowItWorks() {
  return (
    <section id="how" style={{ padding:'140px 0', position:'relative', borderTop:'1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-label" style={{ marginBottom: 20 }}>
          <span className="num">03</span>
          <span style={{ fontSize: 18, fontWeight: 500, color: 'var(--ink)' }}>How it works</span>
          <span className="line" />
          <span style={{ color:'var(--ink-faint)' }}>4 steps · ~1 min total</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 64, alignItems:'start', marginBottom: 80 }} className="how-head">
          <h2 className="display" style={{ fontSize:'clamp(48px, 6.5vw, 96px)', margin: 0, lineHeight: 0.95 }}>
            From invisible<br/>
            to <span className="serif-i u-grad">inevitable</span>,<br/>
            in <span className="mono" style={{ fontSize:'0.7em', letterSpacing:'-0.02em' }}>~1min</span>.
          </h2>
          <p style={{ fontSize: 18, color:'var(--ink-dim)', lineHeight: 1.55, marginTop: 16 }}>
            Traditional SEO took months and required a specialist. Gleo takes one minute — one install, one click, and you're optimized.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderTop:'1px solid var(--line-2)' }} className="how-grid">
          {STEPS.map((s, i) => (
            <div key={s.n} style={{
              padding:'32px 28px 36px',
              borderRight: i < STEPS.length-1 ? '1px solid var(--line)' : 'none',
              position:'relative',
              display:'flex', flexDirection:'column', gap: 16, minHeight: 320,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background:'rgba(124,92,255,0.15)', border:'1px solid var(--violet-2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span className="mono" style={{ fontSize: 12, color:'var(--violet-2)', letterSpacing:'0.1em' }}>{s.n}</span>
              </div>
              <div className="serif" style={{ fontSize: 26, lineHeight: 1.05, color:'var(--ink)', marginTop: 4 }}>{s.title}</div>
              <div style={{ fontSize: 14, color:'var(--ink-dim)', lineHeight: 1.55, flex: 1 }}>{s.body}</div>
              <div style={{ paddingTop: 16, borderTop:'1px solid var(--line)', display:'flex', alignItems:'baseline', gap: 8 }}>
                <div className="display" style={{ fontSize: 36, color:'var(--ink)', lineHeight: 1 }}>{s.stat}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--violet-2)', letterSpacing:'0.18em' }}>{s.statLabel.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .how-head { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .how-grid > div:nth-child(2) { border-right: none !important; }
          .how-grid > div:nth-child(3), .how-grid > div:nth-child(4) { border-top: 1px solid var(--line); }
        }
        @media (max-width: 600px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div { border-right: none !important; border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { HowItWorks });
