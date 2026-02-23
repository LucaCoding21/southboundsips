"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: "home" | "about" | "services" | "contact" | "faq";
}

export default function MobileMenu({ isOpen, onClose, activePage }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hasBeenOpened = useRef(false);

  const serviceLinks = [
    { label: "Packages", href: "/services#packages" },
    { label: "Bartending", href: "/services#bartending" },
    { label: "Rentals", href: "/services#rentals" },
  ];

  const navLinks = [
    { label: "Home", href: "/", page: "home" as const },
    { label: "Services", href: "/services", page: "services" as const, hasDropdown: true },
    { label: "About", href: "/about", page: "about" as const },
    { label: "FAQ", href: "/faq", page: "faq" as const },
    { label: "Contact", href: "/contact", page: "contact" as const },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build GSAP timeline
  useEffect(() => {
    if (!mounted || !panelRef.current || !contentRef.current) return;

    const panel = panelRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({ paused: true });

    // Stage 1: Circle expand from hamburger position (top-right)
    // circle(0% at 93% 3%) → tiny dot at hamburger
    // circle(150% at 93% 3%) → covers entire screen
    tl.fromTo(
      panel,
      { clipPath: "circle(0% at 93% 3%)", visibility: "visible" },
      { clipPath: "circle(150% at 93% 3%)", duration: 0.8, ease: "power4.inOut" }
    );

    // Stage 2: Nav items stagger in (overlapping circle expand at 0.4s)
    const items = content.querySelectorAll(".menu-item");
    tl.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.07,
        ease: "power3.out",
      },
      0.4
    );

    // Stage 3: CTA slides in
    const cta = content.querySelector(".menu-cta");
    if (cta) {
      tl.fromTo(
        cta,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
        0.65
      );
    }

    // Stage 4: Socials fade in
    const socials = content.querySelector(".menu-socials");
    if (socials) {
      tl.fromTo(
        socials,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
        0.75
      );
    }

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [mounted]);

  // Play / reverse
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl || !panelRef.current) return;

    if (isOpen) {
      hasBeenOpened.current = true;
      setServicesOpen(false);
      document.body.style.overflow = "hidden";
      // Ensure panel is visible before playing (in case a previous reverse hid it)
      panelRef.current.style.visibility = "visible";
      tl.timeScale(1).play();
    } else {
      // Don't reverse on initial mount — the timeline was never played,
      // so reversing it can flash the panel visible with no content.
      if (!hasBeenOpened.current) return;

      tl.timeScale(1.4).reverse();
      // Use GSAP's onReverseComplete instead of a fragile timeout
      tl.eventCallback("onReverseComplete", () => {
        document.body.style.overflow = "";
        if (panelRef.current) panelRef.current.style.visibility = "hidden";
      });
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLinkClick = () => {
    setServicesOpen(false);
    onClose();
  };

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[100] md:hidden"
      style={{ visibility: "hidden", willChange: "clip-path" }}
    >
      {/* Background: texture + white overlay (same as hero) */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/[0.92]" />
      </div>

      {/* Scrollable content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col px-4 pt-3 pb-10 overflow-y-auto"
      >
          {/* Top bar: logo + close button */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/images/logo.png"
                alt="South Bound Sips Logo"
                width={70}
                height={67}
                className="object-contain w-14 h-14"
              />
            </Link>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white transition-all duration-300"
              aria-label="Close menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-current rounded-full rotate-45 translate-y-[7px]" />
                <span className="block h-0.5 w-full bg-current rounded-full opacity-0 scale-0" />
                <span className="block h-0.5 w-full bg-current rounded-full -rotate-45 -translate-y-[7px]" />
              </div>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`menu-item w-full font-sans font-semibold text-3xl py-3 flex items-center justify-between transition-colors ${
                        activePage === link.page ? "text-orange" : "text-navy"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-5 h-5 opacity-40 transition-transform duration-200 ${servicesOpen ? "rotate-180 opacity-100" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {serviceLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={handleLinkClick}
                          className="block font-sans font-medium text-lg text-navy/60 hover:text-orange py-2 pl-4 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`menu-item block font-sans font-semibold text-3xl py-3 transition-colors ${
                      activePage === link.page ? "text-orange" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="menu-cta mx-4 font-sans font-semibold text-white bg-orange text-xl px-8 py-4 rounded-full text-center mt-8 transition-colors hover:bg-navy active:scale-[0.98]"
          >
            Book Your Event
          </Link>

          {/* Social links */}
          <div className="menu-socials flex items-center justify-center gap-6 mt-8 pt-6 border-t border-navy/10">
            <a
              href="https://www.instagram.com/southboundsips/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-navy text-base transition-colors hover:text-orange"
            >
              Instagram
            </a>
            <span className="text-navy/20">|</span>
            <a
              href="https://www.facebook.com/southboundsips"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-navy text-base transition-colors hover:text-orange"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
  );
}
