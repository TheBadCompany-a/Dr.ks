import React, { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const METRICS = [
  { value: "24h", label: "RESPONSE TARGET" },
  { value: "100%", label: "CONFIDENTIALITY" },
  { value: "NDA", label: "PRE-SECURED PROTOCOLS" },
];

const glassPanel =
  "bg-card-bg/70 backdrop-blur-xl border border-border-light";

export default function Contact() {
  useEffect(() => {
    // Inject form embed script for dynamic height & responsive iframe adjustments
    const scriptSrc = "https://link.on.bingo/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-background-soft text-charcoal font-sans overflow-x-hidden min-h-screen">
      <main className="py-20 max-w-[1140px] mx-auto px-8 md:px-16">
        {/* Hero Section */}
        <section className="mb-20">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                DIRECT ACCESS
              </span>
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[48px] lg:text-[64px] font-bold max-w-3xl leading-tight text-charcoal"
              >
                Get in Touch
              </h1>
              <p className="text-lg text-charcoal/80 max-w-2xl mt-4">
                Dr. Krishan Singh welcomes inquiries regarding executive consulting, board
                membership, and strategic leadership mentorship. Experience a bespoke
                concierge approach to professional partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
            {/* On.Bingo Embedded Form (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal variant="fade-up">
                <div className="w-full min-h-[500px]">
                  <iframe
                    src="https://link.on.bingo/widget/form/BFMDMx4AHpaD8BynAScH"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "500px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-BFMDMx4AHpaD8BynAScH"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Dr.Krishan"
                    data-height="496"
                    data-layout-iframe-id="inline-BFMDMx4AHpaD8BynAScH"
                    data-form-id="BFMDMx4AHpaD8BynAScH"
                    title="Dr.Krishan"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Info Sidebar (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Contact Details */}
              <ScrollReveal variant="fade-up" delay={300}>
                <div className="flex flex-col gap-6 p-6 border border-border-light bg-card-bg rounded-xl shadow-sm">
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl font-semibold text-charcoal"
                    >
                      Direct Lines
                    </h3>
                    <div className="flex flex-col gap-3 mt-2">
                      <a
                        className="text-base text-primary hover:text-charcoal transition-colors flex items-center gap-3"
                        href="mailto:krishan@shiftquest.in"
                      >
                        <span className="material-symbols-outlined text-[20px] text-[#D4AF37]">mail</span>
                        krishan@shiftquest.in
                      </a>
                      <a
                        className="text-base text-charcoal/80 hover:text-charcoal transition-colors flex items-center gap-3"
                        href="tel:+919650106003"
                      >
                        <span className="material-symbols-outlined text-[20px] text-[#D4AF37]">call</span>
                        +91 9650106003
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-border-light w-full" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Metric High-Contrast Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {METRICS.map((m, idx) => {
            const renderMetricValue = (val) => {
              if (val === "24h") return <CountUp end={24} suffix="h" />;
              if (val === "100%") return <CountUp end={100} suffix="%" />;
              return val;
            };

            return (
              <ScrollReveal key={m.label} variant="scale-up" delay={idx * 150} className="w-full">
                <div className={`flex flex-col items-center text-center p-6 ${glassPanel} rounded-xl h-full justify-center`}>
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[40px] font-bold text-primary"
                  >
                    {renderMetricValue(m.value)}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-charcoal/70 mt-2 uppercase">
                    {m.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </section>
      </main>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
