// ============== FAQ ==============

const FAQS = [
  {
    q: "What is GEO, actually?",
    a: "Generative Engine Optimization. Traditional SEO rewards you with a blue link on a search page. GEO rewards you with a citation inside an AI answer — ChatGPT, Perplexity, Google AI Overviews, Claude. Different rules, different signals, different playbook. Gleo is the tooling for it."
  },
  {
    q: "How fast do I see results?",
    a: "GEO score updates in ~6 minutes after install. AI engine citations typically lift within 7–14 days as ChatGPT, Perplexity and Gemini re-crawl your site. 80% of customers see their first new citation within 10 days."
  },
  {
    q: "What if I already have an SEO agency?",
    a: "Keep them — Gleo covers what they probably don't. Traditional SEO agencies optimize for Google's blue links. Gleo optimizes for the answer above the blue links."
  },
];

function FAQItem({ q, a, i, open, onToggle }) {
  return (
    <div style={{ borderTop:'1px solid var(--line)' }}>
      <button onClick={onToggle} style={{
        all:'unset', cursor:'pointer', width:'100%',
        display:'grid', gridTemplateColumns:'32px 1fr auto', gap: 20, alignItems:'center',
        padding:'28px 0',
      }}>
        <span className="mono" style={{ fontSize: 12, color:'var(--ink-faint)', letterSpacing:'0.18em' }}>0{i+1}</span>
        <span className="serif" style={{ fontSize: 26, color:'var(--ink)', lineHeight: 1.15 }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius:'50%', border:'1px solid var(--line-2)',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'var(--ink-dim)', transition:'transform .3s ease', transform: open ? 'rotate(45deg)' : 'none'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div style={{ overflow:'hidden', maxHeight: open ? 500 : 0, transition: 'max-height .5s cubic-bezier(.2,.7,.2,1)' }}>
        <div style={{ paddingLeft: 52, paddingRight: 60, paddingBottom: 28, fontSize: 16, color:'var(--ink-dim)', lineHeight: 1.6, maxWidth: 820 }}>
          {a}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding:'140px 0', borderTop:'1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-label">
          <span className="num">07</span>
          <span>Questions</span>
          <span className="line" />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap: 56, alignItems:'start' }} className="faq-grid">
          <div style={{ position:'sticky', top: 40 }}>
            <h2 className="display" style={{ fontSize:'clamp(44px, 6vw, 96px)', margin: 0, lineHeight: 0.95 }}>
              The <span className="serif-i u-grad">obvious</span> ones.
            </h2>
            <p style={{ fontSize: 16, color:'var(--ink-dim)', marginTop: 20, lineHeight: 1.55 }}>
              Can't find it? Ping us at <span style={{ color:'var(--ink)' }}>hey@gleo.app</span>. Real humans, real answers.
            </p>
          </div>
          <div style={{ borderBottom:'1px solid var(--line)' }}>
            {FAQS.map((f, i) => (
              <FAQItem key={i} i={i} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { FAQ });
