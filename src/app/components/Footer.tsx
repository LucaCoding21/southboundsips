"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the wordmark as it scrolls into view
      gsap.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger in the links row
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom bar
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-navy overflow-hidden"
    >
      {/* ── Top utility strip ── */}
      <div ref={linksRef} className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6">
          {/* Left — CTA block */}
          <div className="max-w-[400px]">
            <p className="font-serif italic text-white/90 text-xl md:text-2xl lg:text-[28px] leading-snug mb-4">
              Let&apos;s make your next<br className="hidden md:block" /> event unforgettable.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.08em] text-navy bg-orange px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 active:scale-95"
            >
              Book Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Right — Compact link groups + socials */}
          <div className="flex flex-wrap gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {/* Navigate */}
            <div>
              <h4 className="font-sans font-semibold text-white/40 text-xs uppercase tracking-[0.15em] mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-white/80 text-sm hover:text-orange transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-sans font-semibold text-white/40 text-xs uppercase tracking-[0.15em] mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:events@southboundsips.com"
                    className="font-sans text-white/80 text-sm hover:text-orange transition-colors duration-200"
                  >
                    events@southboundsips.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/southboundsips/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white/80 text-sm hover:text-orange transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/southboundsips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white/80 text-sm hover:text-orange transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Giant wordmark ── */}
      <div ref={wordmarkRef} className="relative z-0 w-full mt-8 md:mt-6 lg:mt-2 select-none pointer-events-none">
        {/* The wordmark bleeds to edges, no max-width container */}
        <div className="flex flex-col items-center leading-none w-full px-2">
          <span
            className="block text-center text-white/[0.2] footer-wordmark-top whitespace-nowrap"
            style={{ fontFamily: "'Badhorse', cursive" }}
            aria-hidden="true"
          >
            Southbound
          </span>
          <span
            className="block text-center text-orange/40 footer-wordmark-bottom -mt-[0.15em] whitespace-nowrap"
            style={{ fontFamily: "'Badhorse', cursive" }}
            aria-hidden="true"
          >
            sips
          </span>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div ref={bottomRef} className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-6 md:pb-8">
        <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Southbound Sips. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-white/30 text-xs">
              Serving Georgia & Beyond
            </span>
            <a
              href="https://cloverfield.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/30 text-xs hover:text-white/50 transition-colors duration-200"
            >
              Built by Cloverfield
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
