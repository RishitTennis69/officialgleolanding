// Shared utilities, icons, primitives

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ============== Tweaks store ==============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "heroVariant": "A"
}/*EDITMODE-END*/;

function useTweaks() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
  }, [tweaks.theme]);

  useEffect(() => {
    function onMsg(e) {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setEditMode(true);
      if (e.data.type === '__deactivate_edit_mode') setEditMode(false);
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = useCallback((patch) => {
    setTweaks(prev => {
      const next = { ...prev, ...patch };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
      return next;
    });
  }, []);

  return { tweaks, update, editMode };
}

// ============== Reveal on scroll ==============
function useReveal() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

// ============== Counter / easing ==============
function useCountTo(target, active, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) { setV(0); return; }
    let raf; const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      setV(Math.round(ease(t) * target));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return v;
}

// ============== Icons ==============
function Logo({ size = 28 }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'baseline', gap: 2, fontFamily: 'Instrument Serif, serif', fontSize: size, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--ink)' }}>
      <span>Gleo</span>
      <span style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--violet)', alignSelf:'flex-end', marginBottom: size*0.08 }} />
    </span>
  );
}

function IconArrow({ size = 14 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
}
function IconCheck({ size = 14 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>);
}
function IconX({ size = 14 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
}
function IconSpark({ size = 16 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>);
}
function IconWordPress({ size = 18, color = 'currentColor' }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2.2 12 8 22M22 12c0-2.2-.8-3-.8-4 0-1.1.8-2 2-2M14.5 5.5c-1 2-2.5 6-4 10.5M18 9.8 15 18"/></svg>);
}

// ============== Share ==============
Object.assign(window, {
  useTweaks, useReveal, useCountTo,
  Logo, IconArrow, IconCheck, IconX, IconSpark, IconWordPress,
});
