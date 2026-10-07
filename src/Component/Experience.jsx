import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import coaching from "../assets/coaching.png";
import icfBadge from "../assets/icf-badge.jpg";
import certIica from "../assets/cert_iica.png";
import certBrsr from "../assets/cert_brsr.png";
import certEsg from "../assets/cert_esg.png";
import certIpo from "../assets/cert_ipo.png";
import certDigitalDirector from "../assets/cert_digital_director.png";

const EXPERTISE_CARDS = [
  {
    icon: "partner_exchange",
    title: "Executive & Leadership",
    text: "Driving leadership capability and organizational impact through structured journeys and realworld application.",
    tags: ["EXECUTIVE COACHING", "LEADERSHIP DEVELOPMENT AND HIGH POTENTIAL EMPLOYEE GROWTH "],
  },
  {
    icon: "trending_up",
    title: "Transition & Career",
    text: "Supporting leaders through critical career pivots and high-stakes transitions with a focus on sustainable effectiveness.",
    tags: ["TRANSITION COACHING", "CAREER STRATEGY"],
  },
  {
    icon: "groups",
    title: "HR & Transformation",
    text: "Deep specialized coaching for HR professionals and business leaders driving large-scale organizational change.",
    tags: ["HR LEADERSHIP COACHING", "CHANGE LEADERSHIP"],
  },
];

const FRAMEWORKS = [
  {
    icon: "verified",
    title: "ICF Core Competencies",
    text: "Structured journeys aligned with the International Coaching Federation's core competencies for maximum development.",
  },
  {
    icon: "trending_up",
    title: "Coaching for High Potential Leaders",
    text: "Targeted coaching designed to accelerate the growth of future executive and high-potential leadership.",
  },
  {
    icon: "psychology",
    title: "Leadership Coaching",
    text: "Empowering leaders with strategic clarity, emotional intelligence, and change capability.",
  },
  {
    icon: "partner_exchange",
    title: "Executive Coaching",
    text: "Providing confidential, high-impact guidance for senior executives and C-suite leaders.",
  },
];

const CERTIFICATIONS = [
  {
    label: "Global Standard",
    title: "ICF Accredited Associate Certified Coach (ACC)",
    accent: true,
  },
  {
    label: "Governance",
    title: "Certified Independent Director – World Council of Directors",
  },
  { label: "Evaluation", title: "HAY Job Evaluation Certified" },
  { label: "Psychometrics", title: "OPQ Certified Assessor" },
  { label: "Legal", title: "NLU Certified Professional" },
  { label: "Assessment", title: "Qualified Independent Director Assessment – IICA" },
];

const CERTIFICATE_IMAGES = [
  {
    src: certIica,
    title: "Independent Director's Databank",
    issuer: "Indian Institute of Corporate Affairs (IICA)",
  },
  {
    src: certBrsr,
    title: "Certified BRSR Expert",
    issuer: "World Development Corporation / Directors' Institute",
  },
  {
    src: certEsg,
    title: "Certified ESG Expert",
    issuer: "World Development Corporation / Directors' Institute",
  },
  {
    src: certIpo,
    title: "IPO Strategy & Business Valuation",
    issuer: "Directors' Institute & Woolf",
  },
  {
    src: certDigitalDirector,
    title: "Certified Digital Director",
    issuer: "Digital Directors' Program",
  },
];

const ACADEMICS = [
  { title: "Ph.D. in Human Resources Accounting", sub: "Doctoral Research" },
  { title: "Master of Personnel Management", sub: "University of Pune " },
  { title: "Post Graduate Diploma in Labour Law", sub: "Indian Law Institute, New Delhi" },
  { title: "Bachelor of Commerce (College Topper)", sub: "University of Delhi" },
];

const glassPanel =
  "bg-card-bg/60 backdrop-blur-xl border border-border-light transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1";

export default function ExecutiveCoaching() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="font-sans text-base text-charcoal bg-background-soft overflow-x-hidden min-h-screen">
      <main className="py-20 max-w-[1140px] mx-auto px-8 md:px-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-7 flex flex-col gap-6">
            <ScrollReveal variant="fade-up">
              <span className="text-xs font-semibold text-accent tracking-[0.2em]">
                EXECUTIVE COACH &amp; MENTOR
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[48px] font-bold leading-[1.1] tracking-tight mt-2 text-charcoal"
              >
                Executive Coaching &amp; Mentorship
              </h2>
              <div className="w-24 h-1 bg-primary mt-4" />
              <blockquote className="italic text-2xl font-semibold text-charcoal/80 border-l-4 border-border-light pl-6 my-6">
                "I believe individuals are naturally resourceful and capable of finding their own best solutions. My role is to create a trusted space for reflection, powerful conversations, and accountabilities that enables leaders to realize their full potential and create meaningful organizational impact"
              </blockquote>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 relative">
            <ScrollReveal variant="scale-up" delay={200}>
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Executive portrait of Dr. Krishan Singh"
                  src={coaching}
                />
              </div>
            </ScrollReveal>
            {/* ICF Badge Floating */}
            <ScrollReveal variant="scale-up" delay={450} className="absolute -bottom-10 -left-10">
              <div className="w-40 h-40 rounded-full shadow-2xl overflow-hidden border border-border-light bg-card-bg/80 backdrop-blur-xl">
                <img
                  className="w-full h-full object-cover"
                  alt="ICF Associate Certified Coach Badge"
                  src={icfBadge}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Expertise Sections: Bento Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6 border-b border-border-light/20 pb-4">
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-semibold text-charcoal"
            >
              Coaching Expertise
            </h3>
            <span className="text-xs font-semibold text-charcoal/70">01 / AREAS OF IMPACT</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTISE_CARDS.map((card, idx) => (
              <ScrollReveal key={card.title} variant="fade-up" delay={idx * 150}>
                <div className={`${glassPanel} p-6 flex flex-col gap-4 hover:border-primary group h-full`}>
                  <div className="w-12 h-12 bg-black dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-white dark:text-primary">{card.icon}</span>
                  </div>
                  <h4
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-semibold text-charcoal"
                  >
                    {card.title}
                  </h4>
                  <p className="text-charcoal/80">{card.text}</p>
                  <ul className="mt-auto pt-4 space-y-2">
                    {card.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-[11px] font-semibold text-charcoal/90">
                        <span className="w-1.5 h-1.5 bg-primary rounded-sm" /> {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Academic & Professional */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Main Foundation */}
          <div className="md:col-span-8">
            <ScrollReveal variant="fade-up">
              <div className="flex items-center justify-between mb-6 border-b border-border-light/20 pb-4">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-semibold text-charcoal"
                >
                  Professional Certifications
                </h3>
                <span className="text-xs font-semibold text-charcoal/70">02 / QUALIFICATIONS</span>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <ScrollReveal key={cert.title} variant="scale-up" delay={idx * 100}>
                  <div
                    className={`p-4 border-l h-full ${
                      cert.accent ? "border-primary" : "border-border-light"
                    } bg-card-bg`}
                  >
                    <span
                      className={`font-bold text-xs uppercase tracking-widest block mb-1 ${
                        cert.accent ? "text-primary" : "text-charcoal/70"
                      }`}
                    >
                      {cert.label}
                    </span>
                    <h6 className="font-bold text-charcoal">{cert.title}</h6>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sticky Glass Sidebar for Academic */}
          <div className="md:col-span-4">
            <ScrollReveal variant="fade-up" delay={200}>
              <div className={`${glassPanel} p-6 rounded-lg`}>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-semibold mb-6 flex items-center gap-2 text-charcoal"
                >
                  <span className="material-symbols-outlined text-primary">school</span>
                  Academic Foundation
                </h3>
                <div className="space-y-6">
                  {ACADEMICS.map((item, i) => (
                    <React.Fragment key={item.title}>
                      <div>
                        <p className="font-bold text-charcoal">{item.title}</p>
                        <p className="text-sm text-charcoal/80">{item.sub}</p>
                      </div>
                      {i < ACADEMICS.length - 1 && (
                        <div className="h-px bg-border-light/30 w-full" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Official Certificate Documents Gallery */}
        <section className="mb-10">
          <ScrollReveal variant="fade-up">
            <div className="flex items-center justify-between mb-6 border-b border-border-light/20 pb-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-semibold text-charcoal"
              >
                Verified Certification Credentials
              </h3>
              <span className="text-xs font-semibold text-charcoal/70">03 / CERTIFICATE DOCUMENTS</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {CERTIFICATE_IMAGES.map((cert, idx) => (
              <ScrollReveal key={cert.title} variant="scale-up" delay={idx * 100}>
                <div
                  onClick={() => setSelectedCert(cert)}
                  className={`${glassPanel} p-4 rounded-2xl cursor-pointer group flex flex-col h-full hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl bg-card-bg`}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-100/80 aspect-[3/4] relative mb-4 border border-slate-200/60 flex items-center justify-center p-2">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-sm"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-white/95 text-primary font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="material-symbols-outlined text-sm">visibility</span> View Certificate
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-base text-charcoal group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1">{cert.issuer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      {/* Certificate Modal / Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="text-center mb-4 pr-8">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold text-charcoal"
              >
                {selectedCert.title}
              </h3>
              <p className="text-sm text-charcoal/70">{selectedCert.issuer}</p>
            </div>
            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-2 bg-slate-50 rounded-xl border border-slate-200">
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto object-contain shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
