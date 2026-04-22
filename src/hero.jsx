// ============== HERO ==============

function ScoreDial({ score, size = 280, animate = true }) {
  const r = size/2 - 14;
  const c = 2 * Math.PI * r;
  const [draw, setDraw] = useState(animate ? 0 : score);
  useEffect(() => {
    if (!animate) { setDraw(score); return; }
    let raf, start; const dur = 1800;
    const from = draw, to = score;
    function step(t) {
      if (!start) start = t;
      const k = Math.min(1, (t - start) / dur);
      const ease = 1 - Math.pow(1 - k, 3);
      setDraw(from + (to - from) * ease);
      if (k < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [score, animate]);

  const pct = draw/100;
  const offset = c * (1 - pct);
  const rating = draw >= 85 ? 'EXCELLENT' : draw >= 65 ? 'GOOD' : draw >= 45 ? 'AT RISK' : 'CRITICAL';
  const color = draw >= 85 ? 'var(--lime)' : draw >= 65 ? 'var(--cyan)' : draw >= 45 ? 'var(--amber)' : 'var(--rose)';

  return (
    <div style={{ position:'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform:'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="dial-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C5CFF"/>
            <stop offset="50%" stopColor="#22D3EE"/>
            <stop offset="100%" stopColor="#B4F461"/>
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--line-2)" strokeWidth="2" fill="none" />
        <circle
          cx={size/2} cy={size/2} r={r}
          stroke="url(#dial-grad)" strokeWidth="10" fill="none"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 10px rgba(124,92,255,0.4))' }}
        />
        {/* tick marks */}
        {Array.from({length: 40}).map((_,i) => {
          const a = (i/40) * Math.PI * 2;
          const x1 = size/2 + Math.cos(a) * (r + 14);
          const y1 = size/2 + Math.sin(a) * (r + 14);
          const x2 = size/2 + Math.cos(a) * (r + 20);
          const y2 = size/2 + Math.sin(a) * (r + 20);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line-2)" strokeWidth={i%5===0?"1.5":"0.8"} />;
        })}
      </svg>
      <div style={{ position:'absolute', inset: 0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 4 }}>
        <div className="eyebrow" style={{ fontSize: 10, color:'var(--ink-faint)' }}>GEO SCORE</div>
        <div className="serif" style={{ fontSize: size*0.42, lineHeight: 0.9, color:'var(--ink)', fontFeatureSettings:'"tnum"' }}>{Math.round(draw)}</div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color }}>{rating}</div>
      </div>
    </div>
  );
}

const HERO_FINDINGS = [
  { label: 'Missing FAQ schema',          impact: '+12', severity: 'high' },
  { label: 'Weak entity definition',      impact: '+9',  severity: 'high' },
  { label: 'No author credentials',       impact: '+8',  severity: 'med' },
  { label: 'Thin "About" page',           impact: '+7',  severity: 'med' },
  { label: 'No llms.txt',                 impact: '+6',  severity: 'low' },
  { label: 'Unstructured service pages',  impact: '+4',  severity: 'low' },
];

function Hero({ variant = 'A' }) {
  const [phase, setPhase] = useState(0); // 0 idle, 1 scanning, 2 result
  const [url, setUrl] = useState('grindhousecoffee.com');
  const [score, setScore] = useState(0);
  const [fixed, setFixed] = useState(false);
  const inputRef = useRef(null);

  function runScan(e) {
    if (e) e.preventDefault();
    const u = (url || 'grindhousecoffee.com').trim();
    setUrl(u);
    setPhase(1); setFixed(false); setScore(0);
    setTimeout(() => { setPhase(2); setScore(42); }, 1800);
  }
  function optimize() {
    setFixed(true);
    setScore(94);
  }


  return (
    <section style={{ position:'relative', paddingTop: 32, paddingBottom: 120, overflow:'hidden' }}>
      <div className="grid-bg" />
      {/* ambient blobs */}
      <div aria-hidden style={{ position:'absolute', top:-200, right:-200, width: 600, height: 600, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,92,255,0.35), transparent 60%)', filter:'blur(40px)' }} />
      <div aria-hidden style={{ position:'absolute', top:200, left:-200, width: 500, height: 500, borderRadius:'50%', background:'radial-gradient(circle, rgba(34,211,238,0.25), transparent 60%)', filter:'blur(40px)' }} />

      <Nav />

      <div className="wrap" style={{ position:'relative', paddingTop: 60 }}>

        {variant === 'A' ? <HeroA /> : <HeroB />}

        {/* Live demo block */}
        <div style={{ marginTop: 80, display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 56, alignItems:'center' }} className="hero-demo-grid">
          {/* LEFT: URL input + findings */}
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>
              <span className="num">01</span>
              <span>Live demo</span>
              <span className="line" />
            </div>

            <form onSubmit={runScan} style={{ position:'relative', marginBottom: 28 }}>
              <div style={{ display:'flex', gap: 10, padding: 10, border:'1px solid var(--line-2)', borderRadius: 999, background:'var(--card)', alignItems:'center' }}>
                <span className="mono" style={{ padding:'0 14px', color:'var(--ink-faint)', fontSize: 13 }}>https://</span>
                <input
                  ref={inputRef}
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="your-business.com"
                  style={{ flex: 1, background:'transparent', border: 0, outline:'none', color:'var(--ink)', fontSize: 16, fontFamily:'inherit', padding: '10px 0' }}
                />
                <button className="btn btn-primary" type="submit" style={{ background:'var(--violet)', boxShadow:'0 0 24px rgba(124,92,255,0.5)', padding:'12px 20px', fontSize: 14, fontWeight: 600 }}>
                  {phase === 1 ? 'Scanning…' : 'Run free Gleo audit'}
                  <IconArrow />
                </button>
              </div>
              {phase === 1 && (
                <div style={{ position:'absolute', left: 0, right: 0, bottom: -14, height: 2, borderRadius: 2, overflow:'hidden' }}>
                  <div style={{ height:'100%', background:'var(--grad)', width:'40%', animation:'scanbar 1.6s ease-in-out infinite' }} />
                </div>
              )}
            </form>

            <div style={{ display:'flex', gap: 16, marginBottom: 28, color:'var(--ink-dim)', fontSize: 13 }}>
              <span>⌘ Free forever</span>
              <span>·</span>
              <span>No signup for first scan</span>
              <span>·</span>
              <span>Ready in 28s</span>
            </div>

            {/* Findings list — hidden until scan runs */}
            {phase === 0 ? (
              <div style={{ border:'1px solid var(--line)', borderRadius: 20, background:'var(--card)', padding: 32, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 12, minHeight: 240, textAlign:'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background:'rgba(124,92,255,0.12)', border:'1px solid var(--violet-2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <IconSpark size={22} />
                </div>
                <div style={{ fontSize: 15, color:'var(--ink-dim)' }}>Run the audit to see your GEO score</div>
                <div className="mono" style={{ fontSize: 11, color:'var(--ink-faint)', letterSpacing:'0.14em' }}>TAKES ABOUT 28 SECONDS</div>
              </div>
            ) : (
              <div style={{ border:'1px solid var(--line)', borderRadius: 20, background:'var(--card)', overflow:'hidden' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderBottom:'1px solid var(--line)' }}>
                  <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: fixed ? 'var(--lime)' : 'var(--rose)', boxShadow: `0 0 10px ${fixed ? 'var(--lime)' : 'var(--rose)'}` }} />
                    <span className="mono" style={{ fontSize: 12, color:'var(--ink-dim)' }}>
                      {phase === 1 ? 'ANALYZING…' : fixed ? 'ALL FIXES APPLIED' : `${HERO_FINDINGS.length} CRITICAL FINDINGS`}
                    </span>
                  </div>
                  <span className="mono" style={{ fontSize: 12, color:'var(--ink-faint)' }}>/{url || 'your-business.com'}</span>
                </div>
                <div>
                  {HERO_FINDINGS.map((f, i) => (
                    <div key={i} style={{
                      display:'grid', gridTemplateColumns:'20px 1fr auto auto', gap: 14, alignItems:'center',
                      padding: '12px 18px', borderTop: i===0?0:'1px solid var(--line)',
                      animation: phase === 2 ? `findingIn .4s ease ${i * 55}ms both` : 'none',
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: 6,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        background: fixed ? 'rgba(180,244,97,0.15)' : 'rgba(255,90,138,0.12)',
                        color: fixed ? 'var(--lime)' : 'var(--rose)'
                      }}>
                        {fixed ? <IconCheck size={12}/> : <IconX size={12}/>}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--ink)', textDecoration: fixed ? 'line-through' : 'none', textDecorationColor: 'var(--ink-faint)' }}>{f.label}</div>
                      <div className="mono" style={{ fontSize: 11, color:'var(--ink-faint)', letterSpacing:'0.12em' }}>{f.severity.toUpperCase()}</div>
                      <div className="mono" style={{ fontSize: 13, color: fixed ? 'var(--ink-faint)' : 'var(--lime)', minWidth: 32, textAlign:'right' }}>{f.impact}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 14, borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', background: fixed ? 'rgba(180,244,97,0.05)' : 'transparent' }}>
                  <div className="mono" style={{ fontSize: 12, color:'var(--ink-dim)' }}>
                    {fixed ? '✓ 6 fixes deployed via WordPress' : 'Ready to auto-fix all issues'}
                  </div>
                  {phase === 2 && !fixed ? (
                    <button onClick={optimize} className="btn" style={{ background:'var(--violet)', color:'white', padding:'10px 16px', fontSize: 13 }}>
                      <IconSpark size={14}/> Optimize
                    </button>
                  ) : fixed ? (
                    <span className="mono" style={{ fontSize: 12, color:'var(--lime)' }}>+52 score · 2.1s</span>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: dial */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 24 }}>
            <div style={{ position:'relative' }}>
              <ScoreDial score={score} size={340} animate />
              {phase === 1 && (
                <div style={{ position:'absolute', inset: 0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none' }}>
                  <div style={{ position:'absolute', width: 340, height: 340, borderRadius:'50%', border:'1px dashed var(--violet-2)', opacity: 0.5, animation:'spin 4s linear infinite' }} />
                </div>
              )}
            </div>
            <div style={{ textAlign:'center' }}>
              <div className="mono" style={{ fontSize: 11, color:'var(--ink-faint)', letterSpacing:'0.18em', marginBottom: 4 }}>
                {fixed ? 'AFTER GLEO' : phase === 0 ? 'YOUR GEO SCORE' : 'YOUR SITE TODAY'}
              </div>
              <div style={{ fontSize: 14, color:'var(--ink-dim)', maxWidth: 260 }}>
                {fixed
                  ? 'You now rank above 94% of local businesses in AI engines.'
                  : phase === 0 ? 'Enter your URL and run the free audit above.'
                  : phase === 1 ? 'Crawling 247 URLs, 12 entities, 4 AI engines…'
                  : 'You rank below 73% of local businesses in AI engines.'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanbar { 0% { transform: translateX(-100%); width: 30%; } 50% { width: 60%; } 100% { transform: translateX(300%); width: 30%; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes wordIn  { from { transform: translateY(80%);  opacity: 0; filter: blur(8px); } to { transform: translateY(0);   opacity: 1; filter: blur(0); } }
        @keyframes wordOut { from { transform: translateY(0);    opacity: 1; filter: blur(0); } to { transform: translateY(-80%); opacity: 0; filter: blur(8px); } }
        @keyframes findingIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: none; } }
        @media (max-width: 900px) {
          .hero-demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ---- Cycling engine name in hero headline ----
const CYCLE_ENGINES = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'];

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  const [outIdx, setOutIdx] = useState(null);
  const [gen, setGen] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(prev => {
        const next = (prev + 1) % CYCLE_ENGINES.length;
        setOutIdx(prev);
        setGen(g => g + 1);
        setTimeout(() => setOutIdx(null), 650);
        return next;
      });
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{ display: 'inline-block', position: 'relative', verticalAlign: 'bottom' }}>
      {outIdx !== null && (
        <span key={`out-${gen}`} className="serif-i u-grad" style={{
          position: 'absolute', top: 0, left: 0, whiteSpace: 'nowrap',
          animation: 'wordOut .55s cubic-bezier(.4,0,.6,1) forwards',
          pointerEvents: 'none',
        }}>
          {CYCLE_ENGINES[outIdx]}.
        </span>
      )}
      <span key={`in-${gen}`} className="serif-i u-grad" style={{
        display: 'inline-block', whiteSpace: 'nowrap',
        animation: gen > 0 ? 'wordIn .6s cubic-bezier(.15,.9,.3,1.05) both' : 'none',
      }}>
        {CYCLE_ENGINES[idx]}.
      </span>
    </span>
  );
}

// ---- Hero variant A: giant serif hook, left-aligned editorial ----
function HeroA() {
  return (
    <div>
      <h1 className="display" style={{ fontSize: 'clamp(64px, 10vw, 168px)', margin: '0 0 24px', lineHeight: 1 }}>
        Get cited by <CyclingWord /><br/>
        Not buried <span className="serif-i" style={{ color:'var(--ink-dim)' }}>by it.</span>
      </h1>
      <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 56, alignItems:'end', marginTop: 12 }} className="hero-lede">
        <p style={{ fontSize: 20, lineHeight: 1.45, color:'var(--ink-dim)', maxWidth: 620, margin: 0 }}>
          45% of people now search for local businesses inside AI engines — and your site is invisible to them.
          Gleo is the WordPress plugin that fixes that. One install. One click. 0 → 100 GEO score.
        </p>
        <div style={{ display:'flex', gap: 12, justifyContent:'flex-end', alignItems:'center', flexWrap:'wrap' }}>
          <a href="#install" className="btn btn-primary">Install on WordPress <IconArrow/></a>
          <a href="#how" className="btn btn-ghost">See how <IconArrow/></a>
        </div>
      </div>
    </div>
  );
}

// ---- Hero variant B: centered, statement style ----
function HeroB() {
  return (
    <div style={{ textAlign:'center', padding: '40px 0' }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>GENERATIVE ENGINE OPTIMIZATION · FOR WORDPRESS</div>
      <h1 className="display" style={{ fontSize: 'clamp(56px, 8.5vw, 140px)', margin: '0 auto 28px', maxWidth: 1100 }}>
        If AI won't <span className="serif-i u-grad">cite you,</span><br/>
        you don't <span className="serif-i">exist.</span>
      </h1>
      <p style={{ fontSize: 20, color:'var(--ink-dim)', maxWidth: 640, margin: '0 auto 32px' }}>
        Gleo makes ChatGPT, Perplexity, Gemini and Claude recommend <i>your</i> business by name. A single WordPress plugin. Scores, fixes, and monitoring, built in.
      </p>
      <div style={{ display:'inline-flex', gap: 12, alignItems:'center' }}>
        <a href="#install" className="btn btn-primary">Install on WordPress <IconArrow/></a>
        <a href="#how" className="btn btn-ghost">See a live scan <IconArrow/></a>
      </div>
    </div>
  );
}

// ---- Theme toggle ----
function ThemeToggle() {
  const [dark, setDark] = useState(true);
  function toggle() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setDark(!dark);
  }
  return (
    <button onClick={toggle} aria-label="Toggle theme" style={{
      all: 'unset', cursor: 'pointer',
      width: 36, height: 36, borderRadius: 10,
      border: '1px solid var(--line-2)',
      background: 'var(--card)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--ink-dim)',
      transition: 'background .2s, color .2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'var(--card-hi)'; e.currentTarget.style.color = 'var(--ink)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--ink-dim)'; }}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

// ---- Nav ----
function Nav() {
  return (
    <nav style={{ position:'relative', zIndex: 5 }}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '24px 56px' }}>
        <Logo size={26}/>
        <div style={{ display:'flex', gap: 32, fontSize: 14, color:'var(--ink-dim)' }} className="nav-links">
          <a href="#how" style={{ color:'inherit', textDecoration:'none' }}>How it works</a>
          <a href="#features" style={{ color:'inherit', textDecoration:'none' }}>Features</a>
          <a href="#pricing" style={{ color:'inherit', textDecoration:'none' }}>Pricing</a>
          <a href="#faq" style={{ color:'inherit', textDecoration:'none' }}>FAQ</a>
        </div>
        <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
          <ThemeToggle />
          <a href="#" className="btn btn-ghost" style={{ padding:'10px 16px', fontSize: 13 }}>Sign in</a>
          <a href="#install" className="btn btn-primary" style={{ padding:'10px 16px', fontSize: 13 }}>Install plugin</a>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Hero, ScoreDial, Nav });
