import React, { useState, useMemo } from 'react';
import './App.css';
import {
  ArrowUpRight,
  Award,
  Check,
  Copy,
  Mail,
  Menu,
  Send,
  Trophy,
  X
} from 'lucide-react';

function Github({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const resumeUrl = "/resume.pdf";

const soloProjects = [
  {
    id: "clinsight",
    number: "01",
    title: "ClinSight AI",
    kicker: "Clinical intelligence / 2026",
    text: "An agentic clinical intelligence platform that turns fragmented prescriptions and patient records into verified, searchable context for clinicians.",
    impact: "Domain winner · GLITCHCON 2.0",
    pipeline: ["Prescription OCR", "Ingestion Agent", "pgvector RAG", "Sarvam Voice"],
    stack: ["Next.js", "Node.js", "Gemini Vision", "pgvector", "RAG"],
    link: "https://github.com/Meghs21/ClinSight-AI-Production",
    demo: "https://lnkd.in/p/gmbUzREf",
    tone: "cyan",
    label: "RAG / VISION / GUARDRAILS"
  },
  {
    id: "fashion",
    number: "02",
    title: "Ethereal Atelier",
    kicker: "Deep learning / 2025",
    text: "A multimodal fashion compatibility engine combining ResNet-18 visual features with a BiLSTM to understand how pieces work together.",
    impact: "72% accuracy · 21,000+ combinations",
    stack: ["Python", "TensorFlow", "BiLSTM", "ResNet-18", "Flask"],
    link: "https://github.com/Meghs21/DL_FashionCompatibility",
    demo: "https://ethereal-atelier.onrender.com/",
    image: "https://raw.githubusercontent.com/Meghs21/DL_FashionCompatibility/main/custom_outfit_preview.jpg",
    tone: "coral",
    label: "VISION + SEQUENCE"
  },
  {
    id: "worthwise",
    number: "03",
    title: "WorthWise",
    kicker: "Fintech & AI / 2026",
    text: "Interactive financial decision learning with Monte Carlo forecasting, a 15-year simulator, and context-aware AI guidance.",
    impact: "15-year simulations · Monte Carlo forecasting",
    stack: ["React", "Node.js", "Groq", "Supabase"],
    link: "https://github.com/hardeeparekh/Capstone-project",
    demo: "https://worthwise-web.onrender.com/",
    tone: "lime",
    label: "FORECAST / SIMULATE / LEARN"
  },
  {
    id: "neuromap",
    number: "04",
    title: "NeuroMap",
    kicker: "EdTech & 3D / 2026",
    text: "AI Anatomy Explorer pairing interactive 3D anatomy visualization with Gemini-powered quizzes for immersive visual learning.",
    impact: "Interactive 3D models · Gemini visual quizzes",
    stack: ["Next.js", "Three.js", "Gemini", "Framer Motion"],
    link: "https://github.com/SinthanaPrabakaran/AI-Anatomy-Explorer",
    demo: "https://neuromap-ai-anatomy-explorer.vercel.app/",
    tone: "amber",
    label: "3D / GEMINI / INTERACTIVE"
  }
];

const teamProjects = [
  [
    "CyberSec Anomaly",
    "TEAM / SECURITY ML",
    "A real-time IT/OT security console that detects behavioral anomalies with sequence-aware models and actionable evidence.",
    ["FastAPI", "React", "Python", "WebSockets", "ML"],
    "https://github.com/Meghs21/CyberSec_Anomaly",
    "https://lnkd.in/p/gW5-Rub4"
  ],
  [
    "Genetic Risk Model",
    "TEAM / HEALTH AI",
    "Explainable three-generation inheritance modeling with Mendelian rules and Bayesian probability updates.",
    ["React", "FastAPI", "Python", "Bayesian"],
    "https://github.com/Saumyaa65/genetic-risk-model"
  ],
  [
    "Kubernetes CronJob Controller",
    "TEAM / DEVOPS",
    "A Go controller that reconciles custom resources and manages scheduled workloads inside Kubernetes.",
    ["Go", "Kubernetes", "CRDs"],
    "https://github.com/Meghs21/KubernetesControllerGo"
  ],
  [
    "ExpiryBuddy",
    "TEAM / SUSTAINABILITY",
    "A smart retail platform using dynamic discounts and scheduled donation flows to keep near-expiry inventory moving.",
    ["React", "Node.js", "MongoDB", "ML"],
    "https://github.com/Meghs21/Expiry-Buddy-Walmart",
    "https://expiry-buddy.onrender.com/"
  ],
  [
    "Reverse Chase Game",
    "TEAM / GAME DEV",
    "A Unity game where the runner outsmarts the chase through dynamic walls, levels, and evolving AI logic.",
    ["Unity", "C#", "Game AI"],
    "https://github.com/Saumyaa65/ReverseChaseGame"
  ],
  [
    "SheRises",
    "TEAM / SOCIAL IMPACT",
    "A community platform combining support resources, an AI coach, and a marketplace experience.",
    ["React", "Express", "MongoDB"],
    "https://github.com/kavyarrr/SheRises"
  ],
  [
    "Manim Community",
    "OPEN SOURCE",
    "Community-maintained Python tooling for precise mathematical animations and explanatory education.",
    ["Python", "NumPy", "Open Source"],
    "https://github.com/ManimCommunity/manim"
  ]
];

const skillGroups = [
  ["LANGUAGES", "Python · C++ · Java · JavaScript · TypeScript"],
  ["AI / ML", "PyTorch · TensorFlow · Scikit-learn · RAG · LLMs · LangGraph"],
  ["BUILDING", "React · FastAPI · Node.js · Express · PHP · REST APIs"],
  ["DATA / CLOUD", "MongoDB · PostgreSQL · Supabase · Docker · Kubernetes · AWS"]
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("meghnamandawra@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const visible = useMemo(
    () => (filter === "all" ? soloProjects : soloProjects.filter((p) => p.id === filter)),
    [filter]
  );

  const update = (key) => (event) =>
    setForm({
      ...form,
      [key]: event.target.value
    });

  const submitContact = (event) => {
    event.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }
    // Record submission and trigger mailto fallback option
    setSubmitted(true);
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:meghnamandawra@gmail.com?subject=${subject}&body=${body}`;
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <main>
      {/* Site Navigation */}
      <nav className="nav shell" data-testid="site-navigation">
        <a className="brand" href="#top" data-testid="brand-link">
          <span className="brand-mark">M</span> MEGHNA MANDAWARA
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" data-testid="nav-work-link" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#experience" data-testid="nav-experience-link" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#hackathons" data-testid="nav-hackathons-link" onClick={() => setMenuOpen(false)}>
            Victories
          </a>
          <a href="#about" data-testid="nav-about-link" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" data-testid="nav-contact-link" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            className="nav-resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-resume-link"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="mobile-menu-button"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES · CHENNAI, INDIA
          </p>
          <h1>
            I build intelligent
            <br />
            <em>systems</em> for real
            <br />
            people.
          </h1>
          <p className="hero-sub">
            Software engineer focused on AI/ML, full-stack products, and the hard problems where research becomes something useful.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work" data-testid="hero-work-button">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a
              className="text-link"
              href="mailto:meghnamandawra@gmail.com"
              data-testid="hero-email-link"
            >
              Let's talk <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="code-card">
            <div className="code-top">
              <span>meghna.py</span>
              <span>● ● ●</span>
            </div>
            <pre>
              <span className="code-muted">01</span> <span className="code-key">class</span>{" "}
              <span className="code-name">Builder</span>:
              <br />
              <span className="code-muted">02</span>   focus ={" "}
              <span className="code-string">"useful AI"</span>
              <br />
              <span className="code-muted">03</span>   ships ={" "}
              <span className="code-bool">True</span>
              <br />
              <span className="code-muted">04</span>   curiosity ={" "}
              <span className="code-number">∞</span>
            </pre>
            <div className="code-footer">
              <span>currently exploring</span>
              <strong>agentic systems ↗</strong>
            </div>
          </div>

          <div className="hero-stat">
            <strong>9.13</strong>
            <span>
              / 10 CGPA
              <br />
              VIT Chennai · AI/ML
            </span>
          </div>
        </div>
      </section>

      {/* Signal Strip */}
      <section className="signal-strip">
        <div className="shell signals">
          <div>
            <span className="signal-label">01 / INDUSTRY INTERNSHIP</span>
            <strong>SDE Intern · miniOrange</strong>
            <small>Solo-shipped 20k LOC Agentic WordPress Plugin</small>
          </div>
          <div>
            <span className="signal-label">02 / COMPETITIVE VICTORIES</span>
            <strong>2× Hackathon Champion</strong>
            <small>GLITCHCON 2.0 Domain Winner & DATAQUEST 2.0 2nd</small>
          </div>
          <div>
            <span className="signal-label">03 / GOOGLE FELLOWSHIP</span>
            <strong>Google × TalentSprint WE Scholar</strong>
            <small>Top 1% of 30,000+ applicants (2024–26)</small>
          </div>
        </div>
      </section>

      {/* Solo Work Section */}
      <section className="section shell" id="work">
        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED WORK / 2025—26</p>
            <h2>
              Things I’ve
              <br />
              <span>made real.</span>
            </h2>
          </div>
          <p className="section-intro">
            A selection of solo builds where I owned the problem end-to-end — from model design to the last interface detail.
          </p>
        </div>

        <div className="filter-row">
          <span>FILTER BY</span>
          {[
            ["all", "All work"],
            ["clinsight", "Clinical AI"],
            ["fashion", "Deep learning"],
            ["worthwise", "Fintech AI"],
            ["neuromap", "3D & EdTech"]
          ].map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "active" : ""}
              onClick={() => setFilter(value)}
              data-testid={`filter-${value}-button`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="case-grid">
          {visible.map((project) => (
            <article
              key={project.id}
              className={`case-card ${project.tone}`}
              data-testid={`project-card-${project.id}`}
            >
              <div className="case-meta">
                <span>
                  {project.number} / {project.kicker}
                </span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  CODE ↗
                </a>
              </div>

              <div className="case-visual">
                {project.image ? (
                  <img
                    className="case-image"
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
                <span className="visual-number">{project.number}</span>
                <div className="visual-orbit"></div>
                <div className="visual-orbit orbit-two"></div>
                <span className="visual-label">{project.label}</span>
              </div>

              <div className="case-content">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="impact">
                  <Check size={14} />
                  <span>{project.impact}</span>
                </div>
                {project.pipeline && (
                  <div className="mini-pipeline">
                    <span className="pipeline-label">PIPELINE ARCHITECTURE</span>
                    <div className="pipeline-steps">
                      {project.pipeline.map((step, i) => (
                        <React.Fragment key={step}>
                          <span className="pipeline-step">{step}</span>
                          {i < project.pipeline.length - 1 && <span className="pipeline-arrow">→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="case-actions">
                  <a
                    className="case-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <ArrowUpRight size={13} />
                  </a>
                  {project.demo && (
                    <a
                      className="demo-link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live preview <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Team & Open Source Projects */}
      <section className="section section-team shell">
        <div className="section-header team-header">
          <div>
            <p className="eyebrow">COLLABORATION / OPEN SOURCE</p>
            <h2>
              Good work is
              <br />
              <span>rarely solo.</span>
            </h2>
          </div>
          <p className="section-intro">
            Team builds and open-source contributions where I learned to communicate clearly, ship together, and leave the codebase better.
          </p>
        </div>

        <div className="team-list">
          {teamProjects.map((project, index) => (
            <article
              key={project[0]}
              className="team-card"
              data-testid={`team-project-${index + 1}`}
            >
              <div className="team-index">
                {String(index + 5).padStart(2, "0")}
              </div>

              <div className="team-main">
                <span className="team-type">{project[1]}</span>
                <h3>{project[0]}</h3>
                <p>{project[2]}</p>
                <div className="tag-row">
                  {project[3].map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="team-actions">
                <a
                  href={project[4]}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`team-project-${index + 1}-github-link`}
                  title="GitHub Repository"
                >
                  <Github size={18} />
                </a>
                {project[5] && (
                  <a
                    href={project[5]}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`team-project-${index + 1}-demo-link`}
                    title="Live Demo"
                  >
                    Demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience & Fellowship Section */}
      <section className="section shell" id="experience">
        <div className="section-header">
          <div>
            <p className="eyebrow">INDUSTRY EXPERIENCE & FELLOWSHIP</p>
            <h2>
              Where I’ve
              <br />
              <span>shipped.</span>
            </h2>
          </div>
          <p className="section-intro">
            From solo-shipping an agentic AI WordPress plugin with 20,000 LOC to a selective 2-year technical fellowship backed by Google.
          </p>
        </div>

        <div className="experience-cards">
          {/* miniOrange Intern */}
          <div className="exp-card">
            <div>
              <div className="exp-card-header">
                <span className="exp-period">MAY 2026 — JUNE 2026</span>
                <span className="exp-badge">SOLO-SHIPPED · 20,000 LOC</span>
              </div>
              <h3>Software Development Engineer Intern</h3>
              <span className="exp-org">miniOrange Security Software · AI-Powered Website Builder</span>
              
              <ul className="exp-bullets">
                <li>
                  Architected and solo-shipped a full-stack, agentic AI website-generation platform (~20,000 LOC; Python, FastAPI, React, PHP) as a production WordPress plugin.
                </li>
                <li>
                  Eliminated manual page-building for end users through LangGraph-based multi-agent routing with dual-layer intent parsing.
                </li>
                <li>
                  Automated online store management via a natural-language WooCommerce layer with a confirmation-token and audit-logging safeguard that reduced unintended store mutations to zero.
                </li>
              </ul>

              <div className="exp-architecture">
                <span className="arch-flow-title">AGENTIC WORKFLOW PIPELINE</span>
                <div className="arch-steps">
                  <div className="arch-step">
                    <span className="arch-step-num">01</span>
                    <span className="arch-step-text">User Intent</span>
                  </div>
                  <span className="arch-arrow">→</span>
                  <div className="arch-step">
                    <span className="arch-step-num">02</span>
                    <span className="arch-step-text">Dual-Layer Parser</span>
                  </div>
                  <span className="arch-arrow">→</span>
                  <div className="arch-step highlight">
                    <span className="arch-step-num">03</span>
                    <span className="arch-step-text">LangGraph Router</span>
                  </div>
                  <span className="arch-arrow">→</span>
                  <div className="arch-step">
                    <span className="arch-step-num">04</span>
                    <span className="arch-step-text">Token Safeguard</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="exp-footer">
              <div className="tag-row">
                {["Python", "FastAPI", "React", "PHP", "LangGraph", "WooCommerce"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* WE Program Scholar */}
          <div className="exp-card">
            <div>
              <div className="exp-card-header">
                <span className="exp-period">FEB 2024 — MARCH 2026</span>
                <span className="exp-badge lime">TOP 1% OF 30,000+ APPLICANTS</span>
              </div>
              <h3>WE (Women Engineer) Program Scholar</h3>
              <span className="exp-org">TalentSprint & Google · 2-Year Selective Fellowship</span>
              
              <ul className="exp-bullets">
                <li>
                  Selected among the top 1% nationwide out of 30,000+ applicants for a 2-year intensive technical fellowship with corporate mentorship by Google engineers.
                </li>
                <li>
                  Attended Google's Immersion Week, an upskilling coding bootcamp, and advanced team engineering workshops in Elixir & Phoenix.
                </li>
                <li>
                  Collaborated across colleges to ship WorthWise (interactive fintech forecasting simulator) and a Kubernetes CronJob Controller in Go.
                </li>
              </ul>
            </div>

            <div className="exp-footer">
              <div className="tag-row">
                {["Google Mentorship", "Go", "Kubernetes", "React", "System Design"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="text-link"
                href="https://lnkd.in/p/gNuENYPc"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "12px", color: "var(--cyan)" }}
              >
                WE Scholar Completion Post <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Victories Section */}
      <section className="section shell hackathon-section" id="hackathons">
        <div className="section-header">
          <div>
            <p className="eyebrow">COMPETITIVE ACCLAIM / 2025—2026</p>
            <h2>
              Hackathon
              <br />
              <span>victories.</span>
            </h2>
          </div>
          <p className="section-intro">
            High-pressure engineering sprints competing against hundreds of developers — solving real challenges in healthcare accessibility and threat detection.
          </p>
        </div>

        <div className="hackathons-grid">
          {/* Victory 1: GLITCHCON 2.0 */}
          <div className="hack-card winner">
            <div>
              <div className="hack-tag-row">
                <span className="hack-badge cyan">
                  <Trophy size={16} /> DOMAIN WINNER
                </span>
                <span className="exp-period">MARCH 2026</span>
              </div>
              <h3>GLITCHCON 2.0</h3>
              <span className="hack-org">HackerRank · MellonAI · Kathir Memorial Hospital · Arpina Solutions</span>
              
              <p className="hack-desc">
                Outperformed <strong>100+ competing engineering teams</strong> with <strong>ClinSight AI</strong>, an agentic clinical record retrieval and intelligence system.
              </p>

              <div className="hack-highlight">
                <strong>Key Deliverables:</strong> Engineered OCR extraction and data-ingestion agents (~20–25% of 19,000 LOC), pgvector RAG retrieval, and Sarvam AI Tamil voice-intake agent for medical record accessibility.
              </div>
            </div>

            <div className="hack-actions">
              <a href="https://github.com/Meghs21/ClinSight-AI-Production" target="_blank" rel="noreferrer">
                ClinSight Codebase <ArrowUpRight size={14} />
              </a>
              <a href="https://lnkd.in/p/gmbUzREf" target="_blank" rel="noreferrer" className="secondary">
                Victory Post on LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="#work" style={{ color: "var(--muted)" }}>
                View in Work ↑
              </a>
            </div>
          </div>

          {/* Victory 2: DATAQUEST 2.0 */}
          <div className="hack-card runner-up">
            <div>
              <div className="hack-tag-row">
                <span className="hack-badge amber">
                  <Award size={16} /> 2ND PLACE WINNER
                </span>
                <span className="exp-period">SEPTEMBER 2025</span>
              </div>
              <h3>DATAQUEST 2.0</h3>
              <span className="hack-org">L&T EduTech · VIT Chennai</span>
              
              <p className="hack-desc">
                Awarded 2nd place for building <strong>CyberSec Anomaly</strong>, an enterprise-grade ML telemetry pipeline for insider threat detection across IT/OT networks.
              </p>

              <div className="hack-highlight">
                <strong>Key Deliverables:</strong> Combined XGBoost, sequence-aware LSTM models, and Isolation Forests to analyze behavioral telemetry with <strong>100% precision @ top 1%</strong> and <strong>0% false positive rate</strong>.
              </div>
            </div>

            <div className="hack-actions">
              <a href="https://github.com/Meghs21/CyberSec_Anomaly" target="_blank" rel="noreferrer">
                CyberSec Codebase <ArrowUpRight size={14} />
              </a>
              <a href="https://lnkd.in/p/gW5-Rub4" target="_blank" rel="noreferrer" className="secondary">
                Victory Post on LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="https://github.com/Meghs21/DataQuest" target="_blank" rel="noreferrer" style={{ color: "var(--muted)" }}>
                DataQuest Repo <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Context / About Section */}
      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <h2>
              Curious by
              <br />
              <span>default.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I’m Meghna, a Computer Science student specializing in AI & Machine Learning at VIT Chennai. I like taking ambiguous, high-stakes problems and turning them into systems people can actually understand and use.
            </p>
            <p>
              Whether I’m building a clinical RAG pipeline, training a multimodal model, or helping a team reason through a product, I care about the same things: clarity, safety, and thoughtful engineering.
            </p>
            <a
              className="text-link"
              href="https://github.com/Meghs21"
              target="_blank"
              rel="noreferrer"
              data-testid="about-github-link"
            >
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="experience">
            <div>
              <span>2026</span>
              <strong>Software Development Engineer Intern</strong>
              <small>miniOrange · agentic AI + WordPress</small>
            </div>
            <div>
              <span>2024—26</span>
              <strong>WE Program Scholar</strong>
              <small>
                TalentSprint × Google · <a href="https://lnkd.in/p/gNuENYPc" target="_blank" rel="noreferrer" style={{ color: "var(--cyan)" }}>Graduation Post ↗</a>
              </small>
            </div>
            <div>
              <span>2023—27</span>
              <strong>B.Tech Computer Science & Engineering</strong>
              <small>VIT Chennai · 9.13 / 10 CGPA</small>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit / Skills Section */}
      <section className="section shell skills-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">THE TOOLKIT</p>
            <h2>
              Built across
              <br />
              <span>the stack.</span>
            </h2>
          </div>
          <p className="section-intro">
            The tools change. The approach stays the same: understand deeply, prototype quickly, make it dependable.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group[0]} className="skill-group">
              <span>{group[0]}</span>
              <p>{group[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>
              Have a hard
              <br />
              <em>problem?</em>
            </h2>
            <p className="contact-copy">
              I’m always open to thoughtful work, ambitious teams, and conversations about building technology that matters.
            </p>
            <div className="contact-links">
              <div className="email-copy-wrap">
                <a href="mailto:meghnamandawra@gmail.com" data-testid="contact-email-link">
                  <Mail size={18} /> meghnamandawra@gmail.com
                </a>
                <button
                  type="button"
                  className="copy-email-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                  data-testid="copy-email-button"
                >
                  {copied ? <Check size={13} className="copied-check" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <a
                href="https://www.linkedin.com/in/meghna-mandawra-b4083228b/"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin-link"
              >
                <Linkedin size={18} /> LinkedIn ↗
              </a>
              <a
                href="https://github.com/Meghs21"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-github-link"
              >
                <Github size={18} /> GitHub ↗
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={submitContact}
            data-testid="contact-form"
          >
            <label>
              Your name
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Smith"
                data-testid="contact-name-input"
              />
            </label>

            <label>
              Email address
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="jane@company.com"
                data-testid="contact-email-input"
              />
            </label>

            <label>
              What’s on your mind?
              <textarea
                required
                minLength="10"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me a little about the problem..."
                data-testid="contact-message-input"
              />
            </label>

            {error && (
              <p className="form-error" data-testid="contact-error">
                {error}
              </p>
            )}

            {submitted && (
              <p className="form-success" data-testid="contact-success">
                Thanks — your message is on its way.
              </p>
            )}

            <button
              className="button button-primary submit-button"
              type="submit"
              data-testid="contact-submit-button"
            >
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer shell">
        <span>© 2026 Meghna Mandawra</span>
        <span>
          Designed & built with intent <span className="footer-dot">●</span>
        </span>
        <a href="#top" data-testid="back-to-top-link">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
