// ============== ENGINES STRIP ==============

const ENGINES = [
  { name: 'ChatGPT',      sub: 'OpenAI',    },
  { name: 'Perplexity',   sub: 'Perplexity AI', },
  { name: 'Gemini',       sub: 'Google AI Overviews', },
  { name: 'Claude',       sub: 'Anthropic', },
];

function EngineLogo({ name, size = 28 }) {
  // Abstract glyphs — intentionally editorial, not real logos
  const s = size;
  if (name === 'ChatGPT') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M11 6a5 5 0 0 1 10 0v1.5M11 26a5 5 0 0 0 10 0v-1.5M4 12a5 5 0 0 1 5-5h2M28 12a5 5 0 0 0-5-5h-2M4 20a5 5 0 0 0 5 5h2M28 20a5 5 0 0 1-5 5h-2"/>
      <circle cx="16" cy="16" r="3.5"/>
    </svg>
  );
  if (name === 'Perplexity') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="6" width="20" height="20" rx="2"/>
      <path d="M16 3v26M6 10h20M6 22h20"/>
    </svg>
  );
  if (name === 'Gemini') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 3c0 7 6 13 13 13-7 0-13 6-13 13 0-7-6-13-13-13 7 0 13-6 13-13z"/>
    </svg>
  );
  if (name === 'Claude') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 24 14 8h4l6 16M10.5 18h11"/>
    </svg>
  );
  return null;
}

function EnginesStrip() {
  return (
    <section style={{ padding: '48px 0', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap: 48, alignItems:'center' }} className="engines-grid">
          <div style={{ maxWidth: 260 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>SCANNED & OPTIMIZED FOR</div>
            <div className="serif" style={{ fontSize: 28, lineHeight: 1.1, color:'var(--ink)' }}>
              Every engine that <i style={{ color:'var(--violet-2)' }}>matters</i>.
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 0, borderLeft:'1px solid var(--line)' }} className="engines-row">
            {ENGINES.map((e, i) => (
              <div key={e.name} style={{
                padding: '20px 24px', borderRight: '1px solid var(--line)',
                display:'flex', alignItems:'center', gap: 14,
                color:'var(--ink-dim)', transition:'color .2s',
              }}
              onMouseEnter={ev => ev.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={ev => ev.currentTarget.style.color = 'var(--ink-dim)'}>
                <EngineLogo name={e.name} />
                <div>
                  <div style={{ fontSize: 16, color:'var(--ink)', fontWeight: 500 }}>{e.name}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing:'0.14em', color:'var(--ink-faint)' }}>{e.sub.toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .engines-grid { grid-template-columns: 1fr !important; }
          .engines-row { grid-template-columns: repeat(2, 1fr) !important; border-left: 0 !important; border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { EnginesStrip, EngineLogo });
