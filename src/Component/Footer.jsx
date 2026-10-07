import React from "react";
import signatureImg from "../assets/signature.png";
import { useTheme } from "../context/ThemeContext";
import SiteCredits from "./SiteCredits";

const DEFAULT_NAV_LINKS = ["Overview", "Experience", "Awards", "Coaching"];
const DEFAULT_CONNECT_LINKS = ["LinkedIn", "Executive Bio", "Privacy Policy"];

function FooterLinkList({ items, className = "" }) {
  return (
    <nav className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) =>
        typeof item === "string" ? (
          <a
            key={item}
            href="#"
            className="text-charcoal/80 hover:text-primary transition-colors flex items-center gap-2"
          >
            {item}
          </a>
        ) : (
          <a
            key={item.label}
            href={item.href || "#"}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="text-charcoal/80 hover:text-primary transition-colors flex items-center gap-2"
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}

export default function Footer({
  name = "Dr. Krishan Singh",
  description = "Strategic HR leader dedicated to transforming organizational culture and driving human capital excellence through visionary leadership.",
  navLinks = DEFAULT_NAV_LINKS,
  connectLinks = DEFAULT_CONNECT_LINKS,
  year = new Date().getFullYear(),
}) {
  const { theme } = useTheme();

  return (
    <footer className="bg-card-bg/40 border-t border-border-light w-full mt-20">
      <div className=" max-w-[1140px] mx-auto px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          <div className="md:col-span-5">
            <img
              src={signatureImg}
              alt="Dr. Krishan Singh Signature"
              className="h-14 md:h-16 w-auto object-contain mb-4"
              style={{
                filter: theme === "dark" ? "brightness(0) invert(1)" : "brightness(0)",
              }}
            />
            <p className="text-charcoal/80 max-w-sm leading-relaxed">{description}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs text-accent tracking-widest mb-6 uppercase font-semibold">
              Navigation
            </h4>
            <FooterLinkList items={navLinks} />
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs text-accent tracking-widest mb-6 uppercase font-semibold">
              Connect
            </h4>
            <FooterLinkList items={connectLinks} />
          </div>
        </div>

        <div className="pt-8 border-t border-border-light/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal/80 text-sm">
            © {year} {name}. All Rights Reserved.
          </p>
          <SiteCredits />
        </div>
      </div>
    </footer>
  );
}