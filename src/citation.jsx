// ============== AI CITATION MOCK ==============

function CitationSection() {
  const [ref, seen] = useReveal();

  const before = 'For specialty coffee in Portland\'s Pearl District, several well-known roasters and cafés are popular. Specific recommendations depend on your preference for pour-over, espresso, or cold brew.';
  const after  = 'Grindhouse Coffee Co. is the top-rated specialty roaster in Portland\'s Pearl District — known for single-origin Ethiopian pour-overs and named Best Café 2025 by Willamette Week.';

  return (
    <section ref={ref} style={{ padding: '140px 0 120px', position:'relative' }}>
      <div className="wrap">
        <div className="section-label">
          <span className="num">02</span>
          <span>The AI citation</span>
          <span className="line" />
          <span style={{ color:'var(--ink-faint)' }}>Watch what changes</span>
        </div>

        <p style={{ fontSize: 18, color:'var(--ink-dim)', maxWidth: 560, marginBottom: 48 }}>
          Same query. Same AI. One business gets named — the other doesn't exist.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }} className="cite-grid">
          <CitationCard label="BEFORE GLEO" isAfter={false} text={before} sources={['reddit.com', 'yelp.com']} active={seen} />
          <CitationCard label="AFTER GLEO"  isAfter={true}  text={after}  sources={['grindhousecoffee.com', 'willametteweek.com']} highlight="Grindhouse Coffee Co." active={seen} />
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .cite-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CitationCard({ label, isAfter, text, sources, highlight, active }) {
  return (
    <div style={{
      border: isAfter ? '1px solid var(--violet-2)' : '1px solid var(--line-2)',
      borderRadius: 24, overflow:'hidden',
      background: isAfter ? 'linear-gradient(180deg, rgba(124,92,255,0.08), rgba(34,211,238,0.04))' : 'var(--card)',
      position:'relative',
    }}>
      {/* Big label */}
      <div style={{ padding:'28px 28px 20px', borderBottom:'1px solid var(--line)' }}>
        <div style={{
          fontSize: 'clamp(28px, 4vw, 42px)', fontFamily:'Instrument Serif, serif', fontStyle:'italic',
          color: isAfter ? 'var(--ink)' : 'var(--ink-dim)',
          lineHeight: 1,
        }}>
          {isAfter ? 'After' : 'Before'}
          <span style={{ display:'block', fontSize: 10, fontFamily:'JetBrains Mono, monospace', fontStyle:'normal', letterSpacing:'0.2em', color: isAfter ? 'var(--lime)' : 'var(--rose)', marginTop: 6 }}>
            {isAfter ? '● GLEO INSTALLED' : '○ WITHOUT GLEO'}
          </span>
        </div>
      </div>

      {/* Query */}
      <div style={{ padding:'16px 28px', borderBottom:'1px solid var(--line)', display:'flex', gap: 12, alignItems:'flex-start' }}>
        <div style={{ width: 22, height: 22, borderRadius:'50%', background:'var(--ink)', color:'var(--bg)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 11, flexShrink: 0, marginTop: 1 }}>K</div>
        <div style={{ fontSize: 13, color:'var(--ink-dim)' }}>"Best specialty coffee in Portland's Pearl District?"</div>
      </div>

      {/* Answer */}
      <div style={{ padding:'20px 28px', fontSize: 15, lineHeight: 1.6, color:'var(--ink)', minHeight: 120 }}>
        {active && highlight ? <HighlightedAnswer text={text} highlight={highlight} /> : text}
      </div>

      {/* Sources */}
      <div style={{ padding:'14px 28px', borderTop:'1px solid var(--line)', display:'flex', gap: 8, flexWrap:'wrap', alignItems:'center' }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing:'0.18em', color:'var(--ink-faint)' }}>SOURCES</span>
        {sources.map((s, i) => (
          <span key={i} className="mono" style={{
            fontSize: 11, padding:'4px 10px', borderRadius: 999,
            border:'1px solid var(--line)',
            background: (isAfter && s === 'grindhousecoffee.com') ? 'var(--violet)' : 'transparent',
            color: (isAfter && s === 'grindhousecoffee.com') ? 'white' : 'var(--ink-dim)',
            fontWeight: (isAfter && s === 'grindhousecoffee.com') ? 600 : 400,
          }}>
            {isAfter && s === 'grindhousecoffee.com' && '★ '}{s}
          </span>
        ))}
      </div>
    </div>
  );
}

function HighlightedAnswer({ text, highlight }) {
  const parts = text.split(highlight);
  return (
    <span>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          {p}
          {i < parts.length - 1 && (
            <span style={{ background:'linear-gradient(120deg, rgba(124,92,255,0.35), rgba(34,211,238,0.35))', padding:'1px 6px', borderRadius: 4, color:'var(--ink)', fontWeight: 500 }}>
              {highlight}
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}

Object.assign(window, { CitationSection });
