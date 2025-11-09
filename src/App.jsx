import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Experience, EducationCerts, Skills, Projects, Contact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <EducationCerts />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 bg-[#020617]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Ahmad Maulana Rismadin — Neon Data & AI Portfolio</p>
          <p className="text-slate-500 text-xs">Built with React, Tailwind, and a Spline scene</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
