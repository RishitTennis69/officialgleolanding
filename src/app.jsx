// ============== APP ==============

function TweaksPanel({ tweaks, update, editMode }) {
  if (!editMode) return null;
  return (
    <div className="tweaks open">
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <span className="tweak-label">Theme</span>
        <div className="seg">
          <button className={tweaks.theme === 'dark' ? 'on' : ''} onClick={() => update({ theme: 'dark' })}>Dark</button>
          <button className={tweaks.theme === 'light' ? 'on' : ''} onClick={() => update({ theme: 'light' })}>Light</button>
        </div>
      </div>
      <div className="tweak-row">
        <span className="tweak-label">Hero variant</span>
        <div className="seg">
          <button className={tweaks.heroVariant === 'A' ? 'on' : ''} onClick={() => update({ heroVariant: 'A' })}>A · Editorial</button>
          <button className={tweaks.heroVariant === 'B' ? 'on' : ''} onClick={() => update({ heroVariant: 'B' })}>B · Centered</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { tweaks, update, editMode } = useTweaks();
  return (
    <>
      <Hero variant={tweaks.heroVariant} />
      <EnginesStrip />
      <CitationSection />
      <HowItWorks />
      <Features />
      <Reviews />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <TweaksPanel tweaks={tweaks} update={update} editMode={editMode} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
