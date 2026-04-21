// ============== FINAL CTA + FOOTER ==============

function FinalCTA() {
  return (
    <section id="install" style={{ padding:'120px 0 100px', borderTop:'1px solid var(--line)', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', inset: 0, background:'radial-gradient(ellipse 1000px 500px at 50% 30%, rgba(124,92,255,0.18), transparent 60%)' }} />
      <div aria-hidden style={{ position:'absolute', inset: 0, backgroundImage:'linear-gradient(var(--line) 1px, transparent 1px)', backgroundSize:'80px 80px', mask:'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)' }} />
      <div className="wrap" style={{ position:'relative', textAlign:'center' }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>START NOW</div>
        <h2 className="display" style={{ fontSize:'clamp(64px, 11vw, 184px)', margin:'0 0 28px', lineHeight: 0.9 }}>
          Every day you wait,<br/>
          <span className="serif-i u-grad">someone else</span><br/>
          gets the citation.
        </h2>
        <p style={{ fontSize: 20, color:'var(--ink-dim)', maxWidth: 620, margin:'0 auto 40px' }}>
          Install Gleo in 60 seconds. Free audit, free first fix pack, no credit card.
        </p>
        <div style={{ display:'inline-flex', gap: 12, alignItems:'center', flexWrap:'wrap', justifyContent:'center' }}>
          <a href="#" className="btn btn-primary" style={{ padding:'18px 28px', fontSize: 15 }}>
            <IconWordPress size={18}/> Install on WordPress <IconArrow/>
          </a>
          <a href="#" className="btn btn-ghost" style={{ padding:'18px 28px', fontSize: 15 }}>
            Book a 15-min demo <IconArrow/>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding:'60px 0 48px', borderTop:'1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 56 }} className="footer-grid">
          <div>
            <Logo size={32}/>
            <p style={{ fontSize: 14, color:'var(--ink-dim)', maxWidth: 320, marginTop: 16, lineHeight: 1.55 }}>
              The WordPress plugin for Generative Engine Optimization. Built in Portland, OR.
            </p>
          </div>
          {[
            { h: 'Product', links: ['Features','Pricing','Changelog','Roadmap','Status'] },
            { h: 'Resources', links: ['GEO Guide','Blog','API docs','Case studies','For agencies'] },
            { h: 'Company', links: ['About','Careers','Press kit','Contact','Privacy'] },
          ].map(col => (
            <div key={col.h}>
              <div className="mono" style={{ fontSize: 11, color:'var(--ink-faint)', letterSpacing:'0.22em', marginBottom: 20 }}>{col.h.toUpperCase()}</div>
              <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 10 }}>
                {col.links.map(l => <li key={l}><a href="#" style={{ fontSize: 14, color:'var(--ink)', textDecoration:'none' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <hr className="hair"/>
        <div className="display" style={{ fontSize:'clamp(120px, 20vw, 320px)', lineHeight: 0.85, margin:'40px 0 0', letterSpacing:'-0.06em', color:'var(--ink)' }}>
          Gleo<span style={{ color:'var(--violet)' }}>.</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 40, color:'var(--ink-faint)', fontSize: 12, fontFamily:'JetBrains Mono, monospace' }}>
          <span>© 2026 GLEO LABS, INC.</span>
          <span>GET CITED. OR GET FORGOTTEN.</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer });
