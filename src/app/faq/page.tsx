"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

/* ───────────────────────── FAQ Data ──────────────────────────── */
const faqs = [
  {
    question: "What is Southbound Sips?",
    answer:
      "Southbound Sips is a traveling bar made from a remodeled two-horse trailer. We provide full service bartending for any occasion such as weddings, birthdays, corporate events, holiday parties, baby and bridal showers. We also participate in community events in and around Leander.",
  },
  {
    question: "Do you serve alcohol at school events?",
    answer:
      "For school events such as Teacher Appreciation Week, our services are mocktail-only to keep celebrations fun and school-friendly.",
  },
  {
    question: "Where are you located and do you travel?",
    answer:
      "We are located in Leander, Texas. We travel within 30 miles of our home base at no charge. Travel outside our limit will incur a travel fee.",
  },
  {
    question: "Are you insured and permitted?",
    answer:
      "Yes, we carry general and liquor liability insurance. We are permitted as a mobile food truck (beverage service only), and our staff carries Food and Alcohol, Food Managers, and TABC certifications.\n\nIf you have any questions on your venue\u2019s restrictions, we are happy to reach out to them!",
  },
  {
    question:
      "If we\u2019re not interested in alcohol at our event, can we still use you?",
    answer:
      "Absolutely! We craft amazing mocktails, too! We are also happy to provide lemonade or limeades, tea, coffee, hot cocoa or anything else you come up with! You could even use us as a beautiful cake and dessert stand!",
  },
  {
    question: "Do you supply the alcohol?",
    answer:
      'The state of Texas does not allow a liquor license without a "brick and mortar" establishment. Therefore, unfortunately, we cannot provide the alcohol. We do, however, work very closely with you to create the perfect drink menu and provide a shopping list that ensures you are only buying the type and amount of alcohol needed for your event.',
  },
  {
    question: "What do you provide?",
    answer:
      'Besides a picture perfect backdrop, we provide everything needed for your bar service. Depending upon the package, our services include applicable serveware (recycled heavy-weight plastic stemless wine and champagne "glasses" and pilsner cups), paper or wheat straws, ice, garnishes, syrups, fresh juice, mixers, licensed bartender(s) and a personalized menu.',
  },
  {
    question: "Can you provide a cash bar?",
    answer:
      "No. Unfortunately, as we do not have a liquor license, we cannot collect money in exchange for alcoholic beverages.",
  },
  {
    question: "How far in advance do we need to book?",
    answer:
      "As soon as possible! Weddings are typically booked about a year in advance. March thru May and September thru December are the busiest months for events, so get in touch with us as soon as possible to reserve your date!",
  },
  {
    question: "What is your payment and refund policy?",
    answer:
      "We require a non-refundable 25% deposit and a signed contract in order to reserve your date. We collect a second 25% non-refundable deposit 30 days prior to your event, with the remainder of the balance due one week prior to service. If a package is under $400, we require 50% deposit.",
  },
  {
    question: "Do you have a rain date policy?",
    answer:
      "Unfortunately, due to advance bookings, we cannot accommodate rain dates. In the event of rain, we are more than happy to work with your tent vendor to find the appropriate tent size for our trailer.",
  },
  {
    question: "What are the technical requirements for the bar?",
    answer:
      "Our trailer requires a flat ground and clear access for setup, service and breakdown. We also need to be able to pull in to set up and to remove the trailer after service has ended. Our trailer dimensions are 8.5\u2019 H x 9\u2019 W x 15\u2019 L. Please allow room for guests to mingle and order. Our service window is on the driver side.\n\nWe also require one standard outlet within 40 ft of the trailer, but if electricity is not available, we can add a generator to your package.",
  },
];

/* ───────────────────────── Accordion Item ──────────────────────── */
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-navy/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3
          className={`font-sans font-semibold text-base md:text-lg leading-[1.4] tracking-[-0.01em] transition-colors duration-200 ${
            isOpen ? "text-orange" : "text-navy group-hover:text-orange"
          }`}
        >
          {question}
        </h3>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen
              ? "rotate-180 text-orange"
              : "text-navy/40 group-hover:text-navy"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-5">
            {answer.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className={`font-sans font-normal text-navy/85 text-base md:text-lg leading-[1.75] tracking-[-0.011em] ${
                  i > 0 ? "mt-3" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════ SCALLOP EDGES ═══════════════════════════════ */
function ScallopTop() {
  return (
    <div
      className="w-full relative z-10"
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
      className="w-full relative z-10"
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

/* ════════════════════════ FAQ SECTION ═════════════════════════════ */
function FAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="relative w-full bg-sage py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
          {/* Left Column — Title & Subtext */}
          <div className="animate-enter-up lg:w-[340px] xl:w-[400px] shrink-0 text-center lg:text-left lg:sticky lg:top-28 lg:self-start">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
              Got Questions?
            </span>
            <h1 className="font-serif text-navy text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight">
              FAQ
            </h1>
            <p className="font-sans font-normal text-navy/70 text-base md:text-[18px] leading-[1.7] tracking-[-0.011em] mt-5 max-w-[480px] lg:max-w-none">
              Everything you need to know about booking Southbound Sips for your
              next event.
            </p>
          </div>

          {/* Right Column — Accordion */}
          <div className="animate-enter-up-d2 flex-1 min-w-0">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndices.has(i)}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ CTA BANNER ════════════════════════════════ */
function CTABanner() {
  return (
    <section className="relative w-full bg-white pt-44 lg:pt-56 pb-32 lg:pb-44 min-h-[60vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
        <span className="scroll-fade-up font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
          Still Have Questions?
        </span>
        <h2 className="scroll-fade-up stagger-1 font-serif text-navy text-4xl md:text-5xl lg:text-[64px] leading-[1] tracking-tight">
          Let&apos;s Chat
        </h2>
        <p className="scroll-fade-up stagger-2 font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] mt-6 max-w-[520px] mx-auto">
          We&apos;d love to hear about your event and help make it something
          truly special.
        </p>
        <div className="scroll-fade-up stagger-3 flex flex-wrap items-center justify-center gap-4 mt-8 lg:mt-10">
          <a
            href="/#book"
            className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base lg:text-lg rounded-full px-8 py-2.5 lg:py-3 hover:bg-orange/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Event
          </a>
          <a
            href="mailto:events@southboundsips.com"
            className="inline-flex items-center justify-center font-sans font-medium text-navy border-2 border-navy/20 text-base lg:text-lg rounded-full px-8 py-2.5 lg:py-3 hover:border-navy/40 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════ PAGE EXPORT ════════════════════════════ */
export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimations />
      <Navbar activePage="faq" />
      <ScallopTop />
      <FAQSection />
      <ScallopBottom />
      <CTABanner />
      <Footer />
    </main>
  );
}
