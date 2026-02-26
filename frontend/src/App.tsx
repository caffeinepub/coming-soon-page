import { useEffect, useState } from 'react';
import { Hammer, Sparkles, Clock } from 'lucide-react';

function App() {
  const [visible, setVisible] = useState(false);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'coming-soon-page'
  );

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-page">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/coming-soon-bg.dim_1920x1080.png')" }}
        aria-hidden="true"
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-overlay"
        aria-hidden="true"
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-amber opacity-20 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-glow-teal opacity-10 blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber" />
          <span className="font-display text-sm font-semibold tracking-widest uppercase text-amber">
            Coming Soon
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
          <Clock className="w-3.5 h-3.5" />
          <span>Under Construction</span>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Animated icon */}
        <div
          className={`mb-8 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber/10 border border-amber/20 shadow-amber-glow">
            <Hammer className="w-9 h-9 text-amber animate-hammer" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber animate-ping-slow" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Something{' '}
          <span className="text-amber relative inline-block">
            Amazing
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber/40 rounded-full" />
          </span>
          <br />
          <span className="text-white/70 text-4xl md:text-5xl lg:text-6xl font-bold">
            is Coming
            <span className="text-amber">{'.'.repeat(dotCount)}</span>
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center gap-3 my-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/50" />
          <Sparkles className="w-4 h-4 text-amber/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/50" />
        </div>

        {/* Description */}
        <p
          className={`max-w-lg text-white/60 text-lg md:text-xl leading-relaxed font-light transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          We're crafting something extraordinary. Our team is working hard to bring you an
          exceptional experience. Stay tuned — it'll be worth the wait.
        </p>

        {/* Status badge */}
        <div
          className={`mt-10 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-amber/20 bg-amber/5 backdrop-blur-sm transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
          </span>
          <span className="text-amber/80 text-sm font-medium tracking-wide">
            Currently in development
          </span>
        </div>

        {/* Feature hints */}
        <div
          className={`mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '750ms' }}
        >
          {[
            { label: 'Design', desc: 'Crafted with care' },
            { label: 'Performance', desc: 'Built to be fast' },
            { label: 'Experience', desc: 'Made for you' },
          ].map((item) => (
            <div
              key={item.label}
              className="px-5 py-4 rounded-xl border border-white/5 bg-white/3 backdrop-blur-sm hover:border-amber/20 hover:bg-amber/5 transition-colors duration-300"
            >
              <p className="text-amber text-xs font-semibold tracking-widest uppercase mb-1">
                {item.label}
              </p>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-2 px-6 py-6 text-center">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} — All rights reserved
        </p>
        <p className="text-white/25 text-xs flex items-center gap-1">
          Built with{' '}
          <span className="text-amber/60" aria-label="love">♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber/50 hover:text-amber/80 transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
