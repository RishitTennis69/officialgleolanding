// ============== PRICING ==============

const PLANS = [
  {
    tag: 'STARTER',
    name: 'Solo',
    price: '0',
    priceNote: 'free forever',
    desc: 'Audit your site and apply the essential fixes. No credit card, no catch.',
    features: [
      '1 WordPress site',
      'Weekly GEO score',
      '5 auto-fixes / month',
      '25 tracked AI queries',
    ],
    cta: 'Install free',
    variant: 'ghost',
  },
  {
    tag: 'MOST POPULAR',
    name: 'Business',
    price: '49',
    priceNote: 'per month',
    desc: 'Everything to outrank competitors in AI answers for local businesses.',
    features: [
      '3 WordPress sites',
      'Unlimited auto-fixes',
      '500 tracked queries/week',
      'Competitor citation leaderboard',
    ],
    cta: 'Start 14-day trial',
    variant: 'primary',
    featured: true,
  },
  {
    tag: 'AGENCY',
    name: 'Multisite',
    price: '199',
    priceNote: 'per month',
    desc: 'For agencies and multi-location businesses that need full control.',
    features: [
      'Unlimited WordPress sites',
      'White-label reports',
      '5,000 tracked queries/week',
      'API access + team seats',
    ],
    cta: 'Talk to sales',
    variant: 'ghost',
  },
];

function Pricing() {
  return (
    <section id="pricing" style={{ padding:'140px 0 120px', borderTop:'1px solid var(--line)', position:'relative' }}>
      <div className="wrap">
        <div className="section-label">
          <span className="num">06</span>
          <span>Pricing</span>
          <span className="line" />
          <span style={{ color:'var(--ink-faint)' }}>14-day free trial · no card required</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, alignItems:'end', marginBottom: 64 }} className="pricing-head">
          <h2 className="display" style={{ fontSize:'clamp(48px, 7vw, 112px)', margin: 0, lineHeight: 0.95 }}>
            More effective than <span className="serif-i u-grad">Google Ads</span>.
          </h2>
          <p style={{ fontSize: 18, color:'var(--ink-dim)', maxWidth: 440, margin: 0 }}>
            Google Ads gets you a click that might not convert. Gleo gets you recommended by name inside AI answers — for less than the cost of one ad click per day.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20 }} className="pricing-grid">
          {PLANS.map((p) => (
            <div key={p.name} style={{
              padding: 32, borderRadius: 24,
              background: p.featured ? 'linear-gradient(180deg, rgba(124,92,255,0.12), rgba(34,211,238,0.04))' : 'var(--card)',
              border: p.featured ? '1px solid var(--violet-2)' : '1px solid var(--line)',
              display:'flex', flexDirection:'column', gap: 24, position:'relative',
              boxShadow: p.featured ? '0 20px 80px rgba(124,92,255,0.25)' : 'none',
            }}>
              {p.featured && <div style={{ position:'absolute', top: -12, left: 24, background:'var(--violet)', color:'white', padding:'4px 12px', borderRadius: 999, fontSize: 10, fontFamily:'JetBrains Mono, monospace', letterSpacing:'0.18em' }}>{p.tag}</div>}
              {!p.featured && <div className="mono" style={{ fontSize: 11, color:'var(--ink-dim)', letterSpacing:'0.22em' }}>{p.tag}</div>}
              <div>
                <div className="serif" style={{ fontSize: 36, color:'var(--ink)', marginBottom: 6 }}>{p.name}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap: 8 }}>
                  <div className="display" style={{ fontSize: 64, color:'var(--ink)' }}>${p.price}</div>
                  <div style={{ fontSize: 13, color:'var(--ink-dim)' }}>/{p.priceNote}</div>
                </div>
              </div>
              <div style={{ fontSize: 15, color: p.featured ? 'var(--ink)' : 'var(--ink-dim)', lineHeight: 1.5, fontWeight: p.featured ? 500 : 400 }}>{p.desc}</div>
              <hr className="hair"/>
              <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 10 }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ display:'flex', gap: 10, alignItems:'center', fontSize: 14, color:'var(--ink)' }}>
                    <span style={{ color: p.featured ? 'var(--violet-2)' : 'var(--ink-dim)' }}><IconCheck size={14}/></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={'btn btn-' + p.variant} style={{ marginTop:'auto', justifyContent:'center' }}>
                {p.cta} <IconArrow/>
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .pricing-head { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Pricing });
