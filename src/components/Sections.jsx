export function About() {
  return (
    <section id="about" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">About</h2>
          <p className="text-slate-400 mt-2">Mura Badak, Kutai Kartanegara, East Kalimantan, Indonesia</p>
        </div>
        <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
          <p className="leading-relaxed text-slate-300">
            Hi! I’m Ahmad — an Informatics Engineering graduate from Kalimantan Institute of Technology who loves uncovering stories hidden in data. My passion lies in transforming complex datasets into meaningful insights that inspire smarter decisions. From building analytical tools to guiding student projects in Machine Learning and Digital Image Processing, I bring structure, clarity, and creativity to every project I touch.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const items = [
    {
      role: 'Teaching Assistant — Digital Image Processing',
      org: 'Kalimantan Institute of Technology',
      loc: 'Balikpapan',
      period: 'Feb 2025 – Jul 2024',
      bullets: [
        'Designed interactive learning modules on image processing fundamentals including transformation, histogram analysis, convolution, and segmentation.',
        'Guided students through real-world case studies, bridging theory and applied innovation in digital image processing.',
      ],
    },
    {
      role: 'Teaching Assistant — Data Mining',
      org: 'Kalimantan Institute of Technology',
      loc: 'Balikpapan',
      period: 'Jul 2024 – Dec 2024',
      bullets: [
        'Taught advanced data mining concepts: classification, regression, clustering, and association rules.',
        'Supervised students in implementing predictive models using Python — transforming raw datasets into actionable insights.',
      ],
    },
    {
      role: 'IT Intern — Information Technology Department',
      org: 'PT Indominco Mandiri',
      loc: 'Bontang',
      period: 'Jul 2023 – Sep 2023',
      bullets: [
        "Built 'Remember Me' — a web-based reminder system that streamlined document management via automated email alerts for Payment Obligation documents.",
        "Developed 'P2H', a vehicle inspection platform that improved operational monitoring and safety checks.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((x, i) => (
            <div key={i} className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-cyan-400/40 transition shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-100">{x.role}</h3>
                <span className="text-xs text-slate-400 whitespace-nowrap">{x.period}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{x.org} • {x.loc}</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-slate-300">
                {x.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationCerts() {
  const certs = [
    {
      title: 'Associate Data Scientist (BNSP)',
      year: '2024',
      summary: 'Certified in data analysis, programming, and applied statistical modeling for data-driven decision-making.',
    },
    {
      title: 'Bangkit Academy by Google, Tokopedia, Gojek & Traveloka',
      year: '2024',
      summary: 'Graduated from Indonesia’s flagship Data Analytics and Machine Learning program focusing on business insights and applied AI.',
    },
    {
      title: 'Health Policy Data Analytics',
      year: '2023',
      summary: 'Trained to analyze healthcare data for evidence-based public policy decisions.',
    },
    {
      title: 'Independent Study — Bisa.ai',
      year: '2022',
      summary: 'Hands-on learning in Data Analytics, Machine Learning, Full Stack Development, and IoT applications.',
    },
  ];

  return (
    <section id="education" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <h3 className="text-xl font-semibold text-slate-100">Kalimantan Institute of Technology</h3>
            <p className="text-sm text-slate-400">Bachelor of Informatics Engineering • Sep 2020 – Jun 2024</p>
            <p className="mt-2 text-slate-300">GPA: 3.57 / 4.00</p>
            <p className="mt-2 text-slate-300">Thesis: Market Basket Analysis for Jaya Plastik Store using Apriori and FP-Growth Algorithms</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Data Science','Machine Learning','Statistical Analysis','Internet of Things (IoT)','Computer Networks'].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/30">{t}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <div key={i} className="rounded-xl p-5 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-fuchsia-400/40 transition">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-100">{c.title}</h4>
                  <span className="text-xs text-slate-400">{c.year}</span>
                </div>
                <p className="text-slate-300 mt-1 text-sm">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const tech = [
    'Python (Pandas, Numpy, Matplotlib, Seaborn)',
    'SQL',
    'Data Cleaning & Transformation (ELT)',
    'Exploratory Data Analysis (EDA)',
    'Power BI',
    'Tableau',
    'Excel & Google Sheets',
    'API Development',
    'Data Storytelling',
  ];
  const soft = [
    'Communication & Collaboration',
    'Analytical Thinking',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Business Insight',
  ];

  return (
    <section id="skills" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10">
            <h3 className="font-semibold text-slate-100">Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-fuchsia-400/30">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10">
            <h3 className="font-semibold text-slate-100">Soft</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {soft.map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/30">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Remember Me — Automated Email Reminder System',
      blurb: 'A web-based reminder platform that streamlined Payment Obligation document management with scheduled emails.',
    },
    {
      title: 'P2H — Vehicle Inspection Platform',
      blurb: 'Improved operational monitoring and safety checks with digital inspection workflows.',
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">Projects</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">See more →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl p-6 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-cyan-400/40 transition">
              <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.blurb}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300 text-sm">
                <span>View details</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#020617] text-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">Let’s collaborate to bring your data to life — one insight at a time.</h2>
        <p className="text-slate-400">Prefer LinkedIn? Reach me at linkedin.com/in/ahmad-maulana-rismadin/</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:amrismadin@gmail.com" className="px-6 py-3 rounded-lg bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:ring-cyan-300 hover:bg-cyan-400/20 transition">Email</a>
          <a href="https://linkedin.com/in/ahmad-maulana-rismadin/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-fuchsia-400/40 hover:ring-fuchsia-300 hover:bg-fuchsia-500/20 transition">LinkedIn</a>
          <a href="tel:+6282155672725" className="px-6 py-3 rounded-lg bg-rose-500/10 text-rose-200 ring-1 ring-rose-400/40 hover:ring-rose-300 hover:bg-rose-500/20 transition">Call</a>
        </div>
      </div>
    </section>
  );
}
