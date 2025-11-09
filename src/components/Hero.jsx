import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Glowing radial gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-cyan-300 tracking-widest text-xs sm:text-sm uppercase">Ahmad Maulana Rismadin</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-rose-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
          Data Analyst & Machine Learning Enthusiast
        </h1>
        <p className="mt-4 text-slate-300/90 text-base sm:text-lg max-w-3xl mx-auto">
          Turning raw data into real stories — with purpose and precision. I turn chaos into clarity, and patterns into decisions.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:ring-cyan-300 hover:bg-cyan-400/20 transition shadow-[0_0_20px_rgba(34,211,238,0.25)]">Explore Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-fuchsia-400/40 hover:ring-fuchsia-300 hover:bg-fuchsia-500/20 transition shadow-[0_0_20px_rgba(168,85,247,0.25)]">Let’s Collaborate</a>
        </div>
      </div>
    </section>
  );
}
