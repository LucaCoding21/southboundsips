"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

/* ─── Data ────────────────────────────────────────────────────────────── */

const guestTiers = [
  { label: "0–50", guests: "0–50" },
  { label: "51–75", guests: "51–75" },
  { label: "76–100", guests: "76–100" },
  { label: "101–150", guests: "101–150" },
  { label: "151–200", guests: "151–200" },
  { label: "201–250", guests: "201–250" },
];

const standardPackages = [
  { tier: "Cozy Crowd", guests: "0–50", price: 260 },
  { tier: "Sweet & Small", guests: "51–75", price: 320 },
  { tier: "Merry Medium", guests: "76–100", price: 420 },
  { tier: "Bountiful Bash", guests: "101–150", price: 520 },
  { tier: "Grand Gather", guests: "151–200", price: 660 },
  { tier: "Jolly Jumbo", guests: "201–250", price: 780 },
];

const premiumPackages = [
  { tier: "Cozy Crowd", guests: "0–50", price: 310 },
  { tier: "Sweet & Small", guests: "51–75", price: 370 },
  { tier: "Merry Medium", guests: "76–100", price: 470 },
  { tier: "Bountiful Bash", guests: "101–150", price: 570 },
  { tier: "Grand Gather", guests: "151–200", price: 710 },
  { tier: "Jolly Jumbo", guests: "201–250", price: 830 },
];

const standardFeatures = [
  "Pour Service: Beer, Wine & Liquor",
  "3 Mock/Cocktail Options",
  "Serveware, Ice & Garnishes",
  "TABC Certified Bartender",
  "Decorations to match your event",
];

const premiumExtras = [
  "Upgraded Serveware, Ice & Garnishes",
  "Tasting session 30 days before event",
];

const tierExtras: Record<string, string[]> = {
  "76–100": ["Additional Bartender"],
  "101–150": ["Additional Bartender", "Satellite Bar Set Up"],
  "151–200": ["Additional Bartender", "Satellite Bar Set Up"],
  "201–250": ["3rd Bartender/Barback", "Satellite Bar Set Up"],
};

const addOns = [
  { name: "Satellite Bar", price: "$100/event" },
  { name: "Champagne Wall", price: "$75/event" },
  { name: "Flavor Station", price: "$75/flavor" },
  { name: "Additional Bartender", price: "$50/hr" },
  { name: "Coffee / Latte Bar", price: "$100/event" },
  { name: "Tea Station", price: "$75/event" },
  { name: "Lemonade Station", price: "$75/event" },
  { name: "Hot Chocolate Bar", price: "$100/event" },
  { name: "Water Station", price: "$50/event" },
];

const rentals = [
  { name: "Satellite Bar", price: "$200/event" },
  { name: "Champagne Wall", price: "$100/event" },
  { name: "Large Igloo Cooler", price: "$40/event" },
  { name: "Medium Cooler", price: "$25/event" },
  { name: "Trailer (No Service)", price: "$1,000/day" },
];

/* ─── Scallop Dividers ────────────────────────────────────────────────── */

function ScallopTop() {
  return (
    <div
      className="w-full relative z-20"
      style={{
        height: "clamp(60px, 6.25vw, 90px)",
        marginTop: "calc(-1 * clamp(60px, 6.25vw, 90px))",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'%3E%3Ccircle cx='60' cy='90' r='90' fill='%23CFE2D6'/%3E%3C/svg%3E")`,
        backgroundSize: "clamp(80px, 8.33vw, 120px) clamp(60px, 6.25vw, 90px)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
    />
  );
}

function ScallopBottom() {
  return (
    <div
      className="w-full relative z-20"
      style={{
        height: "clamp(60px, 6.25vw, 90px)",
        marginBottom: "calc(-1 * clamp(60px, 6.25vw, 90px))",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'%3E%3Ccircle cx='60' cy='0' r='90' fill='%23CFE2D6'/%3E%3C/svg%3E")`,
        backgroundSize: "clamp(80px, 8.33vw, 120px) clamp(60px, 6.25vw, 90px)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
    />
  );
}

/* ─── Hero Section ────────────────────────────────────────────────────── */

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Cap parallax early so images don't drift into the next section
            const maxScroll = rect.height * 0.3;
            const raw = Math.max(0, -rect.top);
            setScrollY(Math.min(raw, maxScroll));
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white min-h-[70vh] md:min-h-[80vh] flex items-center pt-12 md:pt-20 pb-24 md:pb-32">
      {/* Cocktail illustration — left */}
      <div
        className="absolute left-[5%] md:left-[8%] lg:left-[10%] -bottom-24 md:-bottom-36 lg:-bottom-44 w-[280px] md:w-[420px] lg:w-[550px] pointer-events-none z-30 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image
          src="/images/cocktail1.png"
          alt="Cocktail illustration"
          width={550}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Pitcher illustration — right */}
      <div
        className="absolute right-[5%] md:right-[8%] lg:right-[10%] top-4 md:top-8 w-[280px] md:w-[420px] lg:w-[550px] pointer-events-none z-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      >
        <Image
          src="/images/pitcher.png"
          alt="Pitcher illustration"
          width={550}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
        <span className="animate-enter-up font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase">
          Services
        </span>

        <h1 className="animate-enter-up-d1 mt-4 md:mt-6">
          <span className="block font-sans font-semibold text-navy text-2xl md:text-4xl lg:text-5xl leading-tight">
            Let&apos;s Find Your
          </span>
          <span
            className="block font-serif text-navy text-4xl md:text-6xl lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-tight mt-1 md:mt-2"
          >
            Perfect Pour
          </span>
        </h1>

        <p className="animate-enter-up-d2 font-sans font-normal text-navy/70 text-base md:text-lg lg:text-xl leading-[1.7] tracking-[-0.011em] mt-6 max-w-[520px] mx-auto">
          From the full mobile bar experience to just a bartender behind your
          setup, we got you covered for any size celebration.
        </p>

        <a
          href="/contact#book"
          className="animate-enter-up-d3 inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base lg:text-lg rounded-full px-8 py-3 mt-16 md:mt-20 hover:bg-navy transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Reserve Your Spot
        </a>
      </div>
    </section>
  );
}

/* ─── Mobile Bar Packages Section ─────────────────────────────────────── */

function MobileBarPackagesSection() {
  const [tierIndex, setTierIndex] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  const packages = isPremium ? premiumPackages : standardPackages;
  const current = packages[tierIndex];
  const features = isPremium
    ? [...standardFeatures, ...premiumExtras]
    : standardFeatures;
  const extras = tierExtras[current.guests] || [];

  return (
    <section id="packages" className="relative w-full bg-navy pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28">
      <div className="max-w-[860px] mx-auto px-4 md:px-8">
        {/* Label */}
        <span className="scroll-fade-up font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase">
          Mobile Bar Packages
        </span>

        {/* Heading */}
        <h2 className="scroll-fade-up stagger-1 font-serif text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1] tracking-tight mt-4">
          The Full Experience
        </h2>

        {/* Description */}
        <p className="scroll-fade-up stagger-2 font-sans font-normal text-white/60 text-base md:text-lg leading-[1.7] tracking-[-0.011em] mt-5 max-w-[560px]">
          Everything from serveware to cocktails to decorations, just tell
          Jaymi your guest count and she&apos;ll handle the rest.
        </p>

        {/* Guest tier selector */}
        <p className="font-sans text-sm font-medium text-white/50 mt-10 md:mt-12 mb-3">
          How many guests?
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {guestTiers.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setTierIndex(i)}
              className={`font-sans text-sm md:text-base font-medium px-5 md:px-6 py-2.5 rounded-full border transition-colors ${
                i === tierIndex
                  ? "bg-white text-navy border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Pricing card */}
        <div className="scroll-fade-up bg-white rounded-2xl shadow-sm mt-8 md:mt-10 overflow-hidden">
          {/* Top region — tier info + price (grouped by proximity) */}
          <div className="p-7 md:p-10 pb-0 md:pb-0">
            {/* Tier label + name */}
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-orange mb-1">
              {current.guests} Guests
            </p>
            <h3 className="font-serif text-navy text-3xl md:text-4xl leading-tight tracking-tight">
              {current.tier}
            </h3>

            {/* Standard / Premium toggle */}
            <div className="flex gap-2.5 mt-5">
              <button
                onClick={() => setIsPremium(false)}
                className={`font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                  !isPremium
                    ? "bg-navy text-white"
                    : "bg-navy/5 text-navy/50 hover:bg-navy/10"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setIsPremium(true)}
                className={`font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  isPremium
                    ? "bg-navy text-white"
                    : "bg-navy/5 text-orange hover:bg-navy/10"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Premium
              </button>
            </div>

            {/* Price — font-sans to match bartender services */}
            <p className="text-navy text-4xl md:text-5xl font-bold font-sans leading-none mt-7">
              ${current.price}
              <span className="text-lg font-medium text-navy/50">/hr</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-navy/10 mx-7 md:mx-10 mt-7 mb-0" style={{ width: "calc(100% - 3.5rem)" }} />

          {/* Bottom region — features + CTA */}
          <div className="p-7 md:p-10 pt-6 md:pt-7">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy/40 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-3">
              {features.map((f) => {
                const isPremiumFeature = isPremium && premiumExtras.includes(f);
                return (
                  <li key={f} className="flex items-start gap-3">
                    {isPremiumFeature ? (
                      <svg
                        className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    <span className="font-sans text-sm md:text-base text-navy/80 leading-snug">
                      {f}
                    </span>
                  </li>
                );
              })}
              {extras.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-sans text-sm md:text-base text-navy/80 leading-snug">
                    {e}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/contact#book"
              className="inline-flex items-center justify-center w-full font-sans font-medium text-white bg-orange text-base rounded-full px-8 py-3.5 mt-8 hover:bg-orange/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="font-sans text-sm text-white/45 leading-[1.7] mt-8 md:mt-10">
          250+ guests?{" "}
          <a
            href="mailto:events@southboundsips.com"
            className="text-orange hover:underline"
          >
            Contact us for custom pricing.
          </a>{" "}
          Menu customization available. Licensed to serve, not sell alcohol.
          Organizer provides all spirits. Travel fee may apply outside 30 mi.
        </p>
      </div>
    </section>
  );
}

/* ─── Bartender Services Section ──────────────────────────────────────── */

function BartenderServicesSection() {
  return (
    <section id="bartending" className="relative w-full bg-sage pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <span className="scroll-fade-up font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase">
          Bartender Services
        </span>
        <h2
          className="scroll-fade-up stagger-1 font-serif text-navy text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1] tracking-tight mt-4"
        >
          You Arrange, We Serve
        </h2>
        <p className="scroll-fade-up stagger-2 font-sans font-normal text-navy/70 text-base md:text-lg leading-[1.7] tracking-[-0.011em] mt-5 max-w-[560px]">
          Already have your bar arranged? Jaymi shows up and handles the rest.
        </p>

        {/* Two service cards */}
        <div className="scroll-fade-up stagger-3 grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14">
          {/* Show Up & Serve */}
          <div className="hover-lift bg-white rounded-2xl border border-gray-100 p-7 md:p-10 flex flex-col">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy/40">
              Bartender Only
            </p>
            <h3
              className="font-serif text-navy text-3xl md:text-4xl leading-tight tracking-tight mt-2"
            >
              Show Up & Serve
            </h3>
            <p className="text-navy text-4xl md:text-5xl font-bold font-sans leading-none mt-5">
              $80<span className="text-lg font-medium text-navy/50">/hr</span>
            </p>
            <p className="font-sans text-xs text-navy/50 mt-1">
              + $50/hr for additional bartender
            </p>

            <div className="w-full h-px bg-navy/10 my-6" />

            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy/40 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-3 flex-1">
              {[
                "TABC Certified Bartender",
                "We serve what you've arranged",
                "Beer, wine, cocktails, soda, tea & water",
                "Arrive 30 min early for setup",
                "30 min post-event cleanup",
                "Water station refills upon request",
                "50+ guests: additional bartender required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-sans text-sm md:text-base text-navy/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/contact#book"
              className="inline-flex items-center justify-center w-full font-sans font-medium text-white bg-orange text-base rounded-full px-8 py-3.5 mt-8 hover:bg-orange/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Reserve Your Spot
            </a>
          </div>

          {/* Full Flow (All Inclusive) */}
          <div className="hover-lift relative bg-white rounded-2xl border-2 border-orange p-7 md:p-10 flex flex-col">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange text-white font-sans text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1 rounded-full">
              Most Popular
            </span>
            <h3
              className="font-serif text-navy text-3xl md:text-4xl leading-tight tracking-tight mt-2"
            >
              Full Flow
            </h3>
            <p className="text-navy text-4xl md:text-5xl font-bold font-sans leading-none mt-5">
              $180<span className="text-lg font-medium text-navy/50">/hr</span>
            </p>
            <p className="font-sans text-xs text-navy/50 mt-1">
              + $50/hr for additional bartender
            </p>

            <div className="w-full h-px bg-navy/10 my-6" />

            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy/40 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-3 flex-1">
              {[
                "TABC Certified Bartender",
                "Southbound featured soda for mixers & mocktails",
                "Cups, straws, napkins, ice & garnishes included",
                "Curate up to 3 mock/cocktail options",
                "Pour service for soda, tea, water, beer, wine & champagne",
                "Personalized shopping list for alcohol",
                "Arrive 60 min early for full setup",
                "50+ guests: additional bartender required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-sans text-sm md:text-base text-navy/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/contact#book"
              className="inline-flex items-center justify-center w-full font-sans font-medium text-white bg-navy text-base rounded-full px-8 py-3.5 mt-8 hover:bg-navy/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>

        {/* Notes */}
        <p className="font-sans text-sm text-navy/50 leading-[1.7] mt-8 max-w-[700px] text-center mx-auto">
          50+ guests require an additional bartender. Satellite Bar available for
          $100 flat rental. Licensed to serve, not sell. Organizer provides
          spirits. Travel fee may apply outside 30 mi.{" "}
          <a
            href="mailto:events@southboundsips.com"
            className="text-orange hover:underline"
          >
            events@southboundsips.com
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── Add-Ons & Rentals Section ───────────────────────────────────────── */

function AddOnsRentalsSection() {
  return (
    <section id="rentals" className="relative w-full bg-white pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="scroll-fade-up text-center">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase">
            Add-Ons & Rentals
          </span>
          <h2
            className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1] tracking-tight mt-4"
          >
            The Finishing Touches
          </h2>
          <p className="font-sans font-normal text-navy/70 text-base md:text-lg leading-[1.7] tracking-[-0.011em] mt-5 max-w-[480px] mx-auto">
            Mix and match to make your event exactly what you want.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="scroll-fade-up stagger-2 grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 max-w-[900px] mx-auto">
          {/* Add-Ons */}
          <div>
            <h3 className="font-sans font-semibold text-navy text-lg md:text-xl mb-5 pb-3 border-b-2 border-orange/30">
              Add-On Services
            </h3>
            <ul className="space-y-0">
              {addOns.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-3 border-b border-sage/80"
                >
                  <span className="font-sans text-sm md:text-base text-navy/80">
                    {item.name}
                  </span>
                  <span className="font-sans font-semibold text-sm md:text-base text-navy">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h3 className="font-sans font-semibold text-navy text-lg md:text-xl mb-5 pb-3 border-b-2 border-orange/30">
              Rentals
            </h3>
            <ul className="space-y-0">
              {rentals.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-3 border-b border-sage/80"
                >
                  <span className="font-sans text-sm md:text-base text-navy/80">
                    {item.name}
                  </span>
                  <span className="font-sans font-semibold text-sm md:text-base text-navy">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notes */}
        <div className="scroll-fade-up flex justify-center mt-12 md:mt-16">
          <a
            href="/contact#book"
            className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base lg:text-lg rounded-full px-10 py-3.5 hover:bg-navy transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Customize Your Package
          </a>
        </div>

        <p className="font-sans text-sm text-navy/50 leading-[1.7] mt-8 max-w-[640px] text-center mx-auto">
          PE = Per Event. All rentals require organizer&apos;s license, agreement
          form & payment upon reserve. Travel fee may apply outside 30 mi.{" "}
          <a
            href="mailto:events@southboundsips.com"
            className="text-orange hover:underline"
          >
            events@southboundsips.com
          </a>
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════ PAGE ════════════════════════════════════ */

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-clip">
      <ScrollAnimations />
      <Navbar activePage="services" />
      <HeroSection />

      <MobileBarPackagesSection />

      <ScallopTop />
      <BartenderServicesSection />
      <ScallopBottom />

      <AddOnsRentalsSection />
      <Footer />
    </main>
  );
}
