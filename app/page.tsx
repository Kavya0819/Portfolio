"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Download, Mail, Phone, MapPin, Briefcase,
  GraduationCap, Code2, Award, ChevronRight, Layers
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeSection, setActiveSection] = useState("about");

  // Scroll-spy: update active nav link based on scroll position
  useEffect(() => {
    const sections = ["about", "skills", "projects", "resume"];
    const observers: IntersectionObserver[] = []; // eslint-disable-line

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript"] },
    { category: "Web", items: ["HTML", "CSS", "Angular", "React"] },
    { category: "Database & Tools", items: ["MySQL", "Postman", "GitHub", "Git"] },
    { category: "AI / ML", items: ["NLP", "TF-IDF", "SVM", "OpenCV", "MediaPipe"] },
    { category: "CS Fundamentals", items: ["OOP", "DBMS", "DSA", "REST APIs"] },
  ];

  const projects = [
    {
      num: "01",
      title: "Hotel Management System",
      period: "EduBridge Certification — Jun–Sep 2025",
      desc: "Full-stack system handling room bookings, customer records, and billing. Backend built with Java & MySQL; frontend features intuitive booking, check-in and check-out flows.",
      tags: ["Java", "MySQL", "HTML/CSS", "Backend"],
      highlight: "Secure data handling at scale",
    },
    {
      num: "02",
      title: "Virtual Mouse",
      period: "Academic Project",
      desc: "Gesture-controlled computer interface using real-time hand tracking via OpenCV and MediaPipe — enabling move, click, and drag without any physical device. Built to improve accessibility for users with physical disabilities.",
      tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      highlight: "Zero hardware interaction",
    },
    {
      num: "03",
      title: "Fake Review Detection",
      period: "Academic Project",
      desc: "ML pipeline to identify fraudulent product reviews using NLP. Preprocessed text corpus, applied TF-IDF vectorization, and trained SVM & Logistic Regression classifiers to achieve high detection accuracy.",
      tags: ["Python", "NLP", "TF-IDF", "SVM", "Logistic Regression"],
      highlight: "High classification accuracy",
    },
  ];

  const stats = [
    { value: "9.26", label: "B.Tech CGPA", sub: "out of 10" },
    { value: "92.7%", label: "XII Board", sub: "Sri Chaitanya Junior College" },
    { value: "3", label: "Projects Built", sub: "AI, ML & Full Stack" },
    { value: "2024", label: "Graduate", sub: "CS Engineering" },
  ];

  // Hide any external navbar injected by layout.tsx
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `header, nav.navbar, .navbar { display: none !important; }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#07090f] text-white font-sans overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 z-50"
        style={{ width: progressWidth }}
      />

      {/* Sticky nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 px-2 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveSection(link.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === link.id
                ? "bg-violet-600 text-white shadow-lg shadow-violet-900/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:kanumurikavya03@gmail.com"
          className="ml-2 px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-90 transition-all"
        >
          Hire Me
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="about" className="relative flex flex-col items-start justify-center min-h-screen px-8 md:px-24 pt-28 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-violet-700/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-fuchsia-700/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Software Developer @ TFG Pvt. Ltd. · Hyderabad, India
          </motion.div>

          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.85] mb-8">
            Kavya<br />
            <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Kanumuri
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light leading-relaxed max-w-2xl">
            I turn <span className="text-white font-semibold">complex logic</span> into{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold">living, breathing software</span>{" "}
            — from intelligent ML pipelines to full-stack systems users actually love.
          </p>
          <p className="text-slate-500 text-base mb-12 max-w-xl leading-relaxed">
            Currently shipping at TFG Pvt. Ltd. Before that? I taught computers to read hands,
            catch fake reviews, and run hotels — all as a student. That's the kind of builder I am.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#resume"
              onClick={() => setActiveSection("resume")}
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 hover:-translate-y-0.5"
            >
              Full Resume
            </a>
            <a
              href="mailto:kanumurikavya03@gmail.com"
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href="https://github.com/kanumurikavya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kanumurikavya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 rounded-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl"
        >
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 transition-all group">
              <p className="text-3xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent mb-1">{s.value}</p>
              <p className="text-sm font-semibold text-slate-300">{s.label}</p>
              <p className="text-xs text-slate-600 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-8 md:px-24 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-mono text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
            <Layers size={14} /> 02 — Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 transition-all group"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-5 group-hover:text-fuchsia-400 transition-colors">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm hover:text-white transition-colors">
                      <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-8 md:px-24 py-28 bg-white/[0.015]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-mono text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
            <Code2 size={14} /> 03 — Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">
            Selected Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.005 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-[#0d0f1a] border border-white/[0.07] hover:border-violet-500/30 transition-all overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 transition-all duration-500 pointer-events-none rounded-3xl" />

              <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors font-mono leading-none flex-shrink-0 select-none">
                  {p.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {p.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-mono text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
                      {p.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-mono mb-4">{p.period}</p>
                  <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-white/[0.04] rounded-lg border border-white/[0.07] hover:border-violet-500/30 hover:text-violet-400 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="resume" className="px-8 md:px-24 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-mono text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
            <Award size={14} /> 04 — Resume
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">
            Full Profile
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-white/[0.07] overflow-hidden bg-[#0d0f1a]">
          {/* Resume Header */}
          <div className="p-8 md:p-14 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/10 border-b border-white/[0.07]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Kavya Kanumuri</h2>
                <p className="text-slate-400 text-base mb-6 font-light">Computer Science Graduate · Technical Skillset Across Domains</p>
                <div className="flex flex-wrap gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-violet-400" /> Hyderabad, India
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={14} className="text-violet-400" /> kanumurikavya03@gmail.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={14} className="text-violet-400" /> +91 7207550919
                  </span>
                </div>
              </div>
              <a
                href="/Kavya_k.Resume.pdf"
                download="Kavya_k.Resume.pdf"
                className="flex-shrink-0 px-7 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-violet-900/30"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Main column */}
            <div className="lg:col-span-2 p-8 md:p-14 space-y-12 border-r border-white/[0.07]">

              {/* Professional Summary */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-4">Professional Summary</h3>
                <p className="text-slate-300 leading-relaxed text-sm border-l-2 border-violet-700/50 pl-5">
                  Software Developer at TFG Pvt. Ltd. with a B.Tech in Computer Science (CGPA 9.26). Skilled in full-stack development, machine learning, and computer vision. Built production-ready systems using Java, Python, and modern web technologies.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold mb-6">
                  <Briefcase size={16} className="text-violet-400" /> Experience
                </h3>
                <div className="border-l border-slate-800 pl-7 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-[#0d0f1a]" />
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h4 className="text-base font-bold text-white">Software Developer</h4>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 rounded-full border border-green-500/20">Current</span>
                    </div>
                    <p className="text-violet-400 text-xs font-mono mb-3">TFG Pvt. Ltd. · Mar 2026 – Present · Hyderabad</p>
                    <ul className="text-slate-400 text-sm space-y-1.5">
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Contributing to full-stack development using Java and modern web technologies.</li>
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Building and maintaining scalable enterprise-grade software solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold mb-6">
                  <GraduationCap size={16} className="text-violet-400" /> Education
                </h3>
                <div className="space-y-6 border-l border-slate-800 pl-7 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-[#0d0f1a]" />
                    <h4 className="text-base font-bold text-white">B.Tech — Computer Science & Engineering</h4>
                    <p className="text-violet-400 text-xs font-mono mt-1">Bharath Institute of Higher Education and Research · 2020 – 2024</p>
                    <p className="text-slate-400 text-sm mt-1">CGPA: <span className="text-white font-semibold">9.26 / 10</span></p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-[#0d0f1a]" />
                    <h4 className="text-base font-bold text-white">XII Board (Science)</h4>
                    <p className="text-violet-400 text-xs font-mono mt-1">Sri Chaitanya Junior College · 2018 – 2020</p>
                    <p className="text-slate-400 text-sm mt-1">Percentage: <span className="text-white font-semibold">92.7%</span></p>
                  </div>
                </div>
              </div>

              {/* Certification */}
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold mb-6">
                  <Award size={16} className="text-violet-400" /> Certification
                </h3>
                <div className="border-l border-slate-800 pl-7 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-[#0d0f1a]" />
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h4 className="text-base font-bold text-white">Java Full Stack Developer</h4>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20">Certified</span>
                    </div>
                    <p className="text-violet-400 text-xs font-mono mb-3">EduBridge · Jun – Sep 2025</p>
                    <p className="text-slate-500 text-xs mb-2 uppercase tracking-widest font-semibold">Capstone — Hotel Management System</p>
                    <ul className="text-slate-400 text-sm space-y-1.5">
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Built a full-stack Hotel Management System handling room bookings, customer records, and billing using Java & MySQL.</li>
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Designed web pages for booking, check-in, and check-out with a clean user interface.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Academic Projects */}
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold mb-6">
                  <Code2 size={16} className="text-violet-400" /> Academic Projects
                </h3>
                <div className="space-y-8 border-l border-slate-800 pl-7 ml-2">
                  {/* Virtual Mouse */}
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-[#0d0f1a]" />
                    <h4 className="text-base font-bold text-white mb-1">Virtual Mouse</h4>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {["Python", "OpenCV", "MediaPipe"].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 rounded border border-cyan-500/20">{t}</span>
                      ))}
                    </div>
                    <ul className="text-slate-400 text-sm space-y-1.5">
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Designed a gesture-controlled virtual mouse using real-time hand tracking via OpenCV and MediaPipe — enabling move, click, and drag without any physical device.</li>
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Aimed at improving accessibility for users with physical disabilities; tested across multiple environments.</li>
                    </ul>
                  </div>
                  {/* Fake Review Detection */}
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-fuchsia-400 ring-4 ring-[#0d0f1a]" />
                    <h4 className="text-base font-bold text-white mb-1">Fake Review Detection System</h4>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {["Python", "NLP", "TF-IDF", "SVM"].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 rounded border border-fuchsia-500/20">{t}</span>
                      ))}
                    </div>
                    <ul className="text-slate-400 text-sm space-y-1.5">
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Built an ML pipeline to detect fake product reviews using NLP — applied TF-IDF vectorization with SVM and Logistic Regression classifiers.</li>
                      <li className="flex gap-2"><span className="text-violet-500 mt-0.5">›</span> Achieved high classification accuracy, contributing to improved trust and reliability on online platforms.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="p-8 md:p-12 space-y-10">
              {/* Core Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-5">Core Skills</h4>
                <div className="space-y-4">
                  {[
                    { label: "Java", level: 90 },
                    { label: "Python", level: 85 },
                    { label: "Angular / JS", level: 80 },
                    { label: "MySQL", level: 80 },
                    { label: "ML / NLP", level: 75 },
                    { label: "OpenCV", level: 70 },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300 font-medium">{s.label}</span>
                        <span className="text-slate-600">{s.level}%</span>
                      </div>
                      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Postman", "GitHub", "Git", "VS Code"].map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs font-semibold text-slate-400 bg-white/[0.04] rounded-lg border border-white/[0.06]">{t}</span>
                  ))}
                </div>
              </div>

              {/* AI / ML Specialization */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-4">AI / ML Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  {["NLP", "TF-IDF", "SVM", "Logistic Regression", "OpenCV", "MediaPipe", "Model Evaluation"].map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs font-medium text-fuchsia-400 bg-fuchsia-500/5 rounded-lg border border-fuchsia-500/10">{t}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 border border-violet-500/20">
                <h4 className="text-white font-bold text-sm mb-2">Available for opportunities</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">
                  Open to full-time roles, internships, and interesting projects in software development, AI/ML, or full-stack engineering.
                </p>
                <a
                  href="mailto:kanumurikavya03@gmail.com"
                  className="flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors group"
                >
                  Get in touch <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── CONTACT ── */}
<section id="contact" className="px-8 md:px-24 py-28">
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
    Contact Me
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* LEFT: CONTACT INFO */}
    <div className="space-y-6">
      <p className="text-slate-400">
        Let’s build something together. Currently accepting new projects and full-time opportunities.
      </p>

      <p className="flex items-center gap-2 text-slate-300">
        📧 kanumurikavya03@gmail.com
      </p>

      <p className="flex items-center gap-2 text-slate-300">
        📞 +91 7207550919
      </p>

      <a
        href="https://wa.me/917207550919?text=Hi Kavya, I saw your portfolio!"
        target="_blank"
        className="inline-block px-6 py-3 border border-green-600 text-green-400 rounded-xl hover:bg-green-600 hover:text-white transition"
      >
        WhatsApp
      </a>
    </div>

    {/* RIGHT: FORM */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as any;

        emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
          },
          "YOUR_PUBLIC_KEY"
        )
        .then(() => {
          alert("Message sent ✅");
          form.reset();
        })
        .catch(() => {
          alert("Error ❌");
        });
      }}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Your Name"
        className="w-full p-4 bg-[#0d0f1a] border border-white/10 rounded-xl"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full p-4 bg-[#0d0f1a] border border-white/10 rounded-xl"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-4 bg-[#0d0f1a] border border-white/10 rounded-xl"
        rows={5}
        required
      />

      <button className="px-6 py-3 bg-violet-600 rounded-xl hover:bg-violet-500 transition">
        Send Message
      </button>
    </form>

  </div>
</section>
      {/* Footer */}
      <footer className="px-8 md:px-24 py-12 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-sm font-mono">
          kavya.kanumuri · kanumurikavya03@gmail.com · +91 7207550919
        </p>
        <p className="text-slate-700 text-xs">
          Built with Next.js · Framer Motion · Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
