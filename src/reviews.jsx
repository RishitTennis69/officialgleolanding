// ============== REVIEWS ==============

const REVIEWS = [
  {
    q: "We went from being invisible in ChatGPT to being the first business it recommends in our zip code. Took one weekend.",
    name: 'Maya Chen', role: 'Owner, Grindhouse Coffee', loc: 'Portland, OR',
    score: { b: 38, a: 96 }
  },
  {
    q: "I'm not technical. I clicked install, clicked 'apply all fixes,' and our Perplexity mentions 6x'd in a month. That's the whole review.",
    name: 'Jon Whitfield', role: 'Founder, Lakeside Dental', loc: 'Austin, TX',
    score: { b: 51, a: 91 }
  },
  {
    q: "Our SEO agency told us GEO 'wasn't real yet.' We dropped them, bought Gleo, and tripled qualified leads in 8 weeks.",
    name: 'Priya Raghavan', role: 'CMO, Northline HVAC', loc: 'Denver, CO',
    score: { b: 44, a: 93 }
  },
  {
    q: "Gleo writes better FAQ schema than the dev we paid $8k for. And it updates itself. I still can't believe this is legal.",
    name: 'David Okafor', role: 'Ops, Riverbend Legal', loc: 'Charlotte, NC',
    score: { b: 29, a: 88 }
  },
];

function Reviews() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % REVIEWS.length);
      setAnimKey(k => k + 1);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  function goTo(i) {
    setCurrent(i);
    setAnimKey(k => k + 1);
  }

  const r = REVIEWS[current];

  return (
    <section style={{ padding:'140px 0', borderTop:'1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-label">
          <span className="num">05</span>
          <span>The receipts</span>
          <span className="line" />
        </div>

        <h2 className="display" style={{ fontSize:'clamp(44px, 6vw, 88px)', margin:'0 0 64px', maxWidth: 900 }}>
          Small businesses who stopped <span className="serif-i u-grad">losing the answer</span>.
        </h2>

        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <figure key={animKey} className="review-card" style={{ margin: 0, padding: 48, background:'var(--card)', border:'1px solid var(--line)', borderRadius: 24, display:'flex', flexDirection:'column', gap: 28 }}>
            <div style={{ display:'flex', gap: 20, alignItems:'center' }}>
              <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
                <div className="mono" style={{ fontSize: 12, color:'var(--rose)' }}>{r.score.b}</div>
                <IconArrow size={12}/>
                <div className="mono" style={{ fontSize: 12, color:'var(--lime)' }}>{r.score.a}</div>
              </div>
              <div style={{ flex: 1, height: 4, borderRadius: 2, background:'var(--line)', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', inset: 0, width: `${r.score.a}%`, background:'var(--grad)', borderRadius: 2 }} />
              </div>
              <div className="mono" style={{ fontSize: 10, color:'var(--ink-faint)', letterSpacing:'0.18em' }}>GEO SCORE</div>
            </div>
            <blockquote className="serif" style={{ margin: 0, fontSize: 28, lineHeight: 1.3, color:'var(--ink)' }}>
              <span style={{ color:'var(--violet-2)' }}>"</span>{r.q}<span style={{ color:'var(--violet-2)' }}>"</span>
            </blockquote>
            <figcaption style={{ display:'flex', alignItems:'center', gap: 14, paddingTop: 24, borderTop:'1px solid var(--line)', marginTop:'auto' }}>
              <div style={{ width: 44, height: 44, borderRadius:'50%', background:'var(--card-hi)', border:'1px solid var(--line-2)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Instrument Serif, serif', fontSize: 16, color:'var(--ink)' }}>{r.name.split(' ').map(s=>s[0]).join('')}</div>
              <div>
                <div style={{ fontSize: 14, color:'var(--ink)' }}>{r.name}</div>
                <div style={{ fontSize: 12, color:'var(--ink-dim)' }}>{r.role} · {r.loc}</div>
              </div>
            </figcaption>
          </figure>

          <div style={{ display:'flex', gap: 8, justifyContent:'center', marginTop: 32 }}>
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                all:'unset', cursor:'pointer',
                width: i === current ? 28 : 8, height: 8, borderRadius: 4,
                background: i === current ? 'var(--violet)' : 'var(--line-2)',
                transition: 'all .4s ease',
              }} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .review-card { animation: slideIn .45s cubic-bezier(.2,.7,.2,1); }
      `}</style>
    </section>
  );
}

Object.assign(window, { Reviews });
