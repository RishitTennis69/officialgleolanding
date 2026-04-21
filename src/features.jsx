// ============== FEATURES ==============

const FEATURES = [
  {
    tag: 'SCHEMA',
    title: 'Every schema AI engines read, auto-applied.',
    body: 'FAQ, HowTo, LocalBusiness, Product, Person, Organization — Gleo generates them from your actual content and keeps them in sync as you edit.',
    span: 2,
    visual: 'schema',
  },
  {
    tag: 'ENTITIES',
    title: 'Teach AI who you are.',
    body: 'Gleo maps your people, places, products and services into structured entities so ChatGPT doesn\'t confuse you with a chain in Ohio.',
    visual: 'entity',
  },
  {
    tag: 'LLMS.TXT',
    title: 'llms.txt, done right.',
    body: 'Signal to every crawler which URLs matter, which to skip, and which contain your canonical answers.',
    visual: 'llms',
  },
  {
    tag: 'MONITORING',
    title: 'Your citation leaderboard.',
    body: 'Gleo runs 200+ real queries — "best coffee near me", "top HVAC in Denver" — across ChatGPT, Perplexity, and Gemini every week. You see a ranked table: which businesses AI recommends, where you rank, and how your score changed. It\'s the first time you\'ll know if AI is sending customers to you or your competitor.',
    span: 2,
    visual: 'leaderboard',
  },
];

function Features() {
  return (
    <section id="features" style={{ padding:'140px 0 120px', borderTop:'1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-label">
          <span className="num">04</span>
          <span>Features</span>
          <span className="line" />
          <span style={{ color:'var(--ink-faint)' }}>Everything an AI engine looks for</span>
        </div>

        <h2 className="display" style={{ fontSize:'clamp(48px, 7vw, 112px)', margin:'0 0 64px', maxWidth: 1100 }}>
          Built for the <span className="serif-i u-grad">age of AI</span>.
        </h2>

        <div style={{ display:'flex', alignItems:'center', gap: 32, margin:'0 0 56px', padding:'28px 32px', background:'var(--card)', border:'1px solid var(--line)', borderRadius: 16 }}>
          {[
            { n: '4', label: 'AI engines monitored' },
            { n: '200+', label: 'queries run weekly' },
            { n: '1 click', label: 'to apply all fixes' },
            { n: '< 1min', label: 'to full optimization' },
          ].map((s, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, textAlign:'center' }}>
                <div className="display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color:'var(--ink)', lineHeight: 1 }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--ink-faint)', letterSpacing:'0.16em', marginTop: 6 }}>{s.label.toUpperCase()}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, height: 40, background:'var(--line-2)', flexShrink: 0 }} />}
            </React.Fragment>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20 }} className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              gridColumn: f.span === 2 ? 'span 2' : 'span 1',
              background:'var(--card)', border:'1px solid var(--line)', borderRadius: 24,
              padding: 32, display:'flex', flexDirection:'column', gap: 20, minHeight: 360,
              position:'relative', overflow:'hidden',
            }}
            className="feature-card">
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', zIndex: 2 }}>
                <div className="mono" style={{ fontSize: 10, color:'var(--violet-2)', letterSpacing:'0.22em' }}>{f.tag}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--ink-faint)' }}>0{i+1}</div>
              </div>
              <div className="serif" style={{ fontSize: 32, lineHeight: 1.05, color:'var(--ink)', maxWidth: 460, zIndex: 2 }}>{f.title}</div>
              <div style={{ fontSize: 14, color:'var(--ink-dim)', lineHeight: 1.55, maxWidth: 440, zIndex: 2 }}>{f.body}</div>
              <div style={{ flex: 1, display:'flex', alignItems:'flex-end', zIndex: 2, marginTop: 8 }}>
                <FeatureVisual kind={f.visual} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .features-grid > .feature-card { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureVisual({ kind }) {
  if (kind === 'schema') {
    return (
      <div style={{ width:'100%', background:'#0A0E1F', borderRadius: 12, border:'1px solid var(--line)', padding: 18, fontFamily:'JetBrains Mono, monospace', fontSize: 12, lineHeight: 1.7, overflow:'hidden' }}>
        <div style={{ color:'var(--ink-faint)' }}>{'<script type="application/ld+json">'}</div>
        <div style={{ color:'var(--ink)' }}>{'  { "@type": '}<span style={{ color:'var(--cyan)' }}>"LocalBusiness"</span>,</div>
        <div style={{ color:'var(--ink)' }}>{'    "name": '}<span style={{ color:'var(--lime)' }}>"Grindhouse Coffee Co."</span>,</div>
        <div style={{ color:'var(--ink)' }}>{'    "priceRange": '}<span style={{ color:'var(--lime)' }}>"$$"</span>,</div>
        <div style={{ color:'var(--ink)' }}>{'    "aggregateRating": { '}<span style={{ color:'var(--violet-2)' }}>"4.8"</span> },</div>
        <div style={{ color:'var(--ink)' }}>{'    "areaServed": '}<span style={{ color:'var(--lime)' }}>"Pearl District, PDX"</span> }</div>
        <div style={{ color:'var(--ink-faint)' }}>{'</script>'}</div>
        <div style={{ marginTop: 10, padding:'4px 8px', background:'rgba(180,244,97,0.1)', color:'var(--lime)', fontSize: 10, letterSpacing:'0.18em', borderRadius: 4, display:'inline-block' }}>✓ AUTO-GENERATED</div>
      </div>
    );
  }
  if (kind === 'entity') {
    return (
      <svg viewBox="0 0 280 160" style={{ width:'100%', height: 160 }}>
        <g fill="none" stroke="var(--line-2)" strokeWidth="1">
          <line x1="140" y1="80" x2="50" y2="30"/>
          <line x1="140" y1="80" x2="230" y2="30"/>
          <line x1="140" y1="80" x2="50" y2="130"/>
          <line x1="140" y1="80" x2="230" y2="130"/>
        </g>
        <g>
          <circle cx="140" cy="80" r="28" fill="var(--violet)" />
          <text x="140" y="77" textAnchor="middle" fill="white" fontFamily="Instrument Serif" fontSize="14">Grindhouse</text>
          <text x="140" y="92" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="1">ORG</text>
        </g>
        {[
          { x: 50, y: 30, l: 'Pearl District', s: 'Place' },
          { x: 230, y: 30, l: 'Ethiopian', s: 'Product' },
          { x: 50, y: 130, l: 'Kira Alvarez', s: 'Person' },
          { x: 230, y: 130, l: '2017', s: 'Date' },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="22" fill="var(--card-hi)" stroke="var(--line-2)"/>
            <text x={n.x} y={n.y-1} textAnchor="middle" fill="var(--ink)" fontFamily="Instrument Serif" fontSize="11">{n.l}</text>
            <text x={n.x} y={n.y+11} textAnchor="middle" fill="var(--ink-faint)" fontFamily="JetBrains Mono" fontSize="7">{n.s}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (kind === 'llms') {
    return (
      <div style={{ width:'100%', background:'#0A0E1F', borderRadius: 12, border:'1px solid var(--line)', padding: 16, fontFamily:'JetBrains Mono, monospace', fontSize: 11.5, lineHeight: 1.7 }}>
        <div style={{ color:'var(--ink-faint)', marginBottom: 4 }}># llms.txt</div>
        <div style={{ color:'var(--cyan)' }}>{'# Grindhouse Coffee Co.'}</div>
        <div style={{ color:'var(--ink)' }}>Allow: /menu/</div>
        <div style={{ color:'var(--ink)' }}>Allow: /about/</div>
        <div style={{ color:'var(--ink)' }}>Allow: /roasters/</div>
        <div style={{ color:'var(--rose)' }}>Disallow: /cart/</div>
        <div style={{ color:'var(--violet-2)' }}>Canonical: /our-coffee/</div>
      </div>
    );
  }
  if (kind === 'leaderboard') {
    const rows = [
      { name:'grindhousecoffee.com', v: 94, d:'+38', me:true },
      { name:'roastworks-pdx.com', v: 71, d:'-2' },
      { name:'thebeanco.com', v: 64, d:'—' },
      { name:'perkavenue.com', v: 52, d:'-6' },
    ];
    return (
      <div style={{ width:'100%', background:'#0A0E1F', borderRadius: 12, border:'1px solid var(--line)', overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'24px 1fr 60px 50px', gap: 12, padding:'10px 16px', borderBottom:'1px solid var(--line)', color:'var(--ink-faint)', fontSize: 10, fontFamily:'JetBrains Mono', letterSpacing:'0.14em' }}>
          <span>#</span><span>SITE</span><span style={{textAlign:'right'}}>SCORE</span><span style={{textAlign:'right'}}>Δ7D</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'24px 1fr 60px 50px', gap: 12, padding:'10px 16px',
            borderTop: i===0?0:'1px solid var(--line)',
            background: r.me ? 'rgba(124,92,255,0.08)' : 'transparent',
            color: r.me ? 'var(--ink)' : 'var(--ink-dim)',
          }}>
            <span className="mono" style={{ fontSize: 11, color: r.me?'var(--violet-2)':'var(--ink-faint)' }}>{String(i+1).padStart(2,'0')}</span>
            <span style={{ fontSize: 13, fontFamily: 'JetBrains Mono, monospace' }}>{r.me && '★ '}{r.name}</span>
            <span className="mono" style={{ fontSize: 13, textAlign:'right', color: r.me?'var(--lime)':'var(--ink)' }}>{r.v}</span>
            <span className="mono" style={{ fontSize: 12, textAlign:'right', color: r.d.startsWith('+')?'var(--lime)':r.d.startsWith('-')?'var(--rose)':'var(--ink-faint)' }}>{r.d}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

Object.assign(window, { Features });
