"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

/* ─── Contact Section (unified) ──────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="book" className="relative w-full bg-white pt-8 md:pt-16 pb-20 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Heading, description, contact details */}
          <div className="animate-enter-up flex flex-col">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="font-serif text-navy text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] leading-[1] tracking-tight">
              We&apos;d love to hear{" "}
              <span className="italic text-orange">from&nbsp;you.</span>
            </h1>
            <p className="font-sans font-normal text-navy/60 text-base md:text-lg leading-[1.7] tracking-[-0.011em] mt-5 md:mt-6 max-w-[480px]">
              Whether you&apos;re ready to book or just have a few questions,
              fill out the form and Jaymi will get back to you within
              24&#8211;48&nbsp;hours.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 md:mt-10">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-sans text-navy/70 text-sm">Licensed &amp; insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-sans text-navy/70 text-sm">24&#8211;48 hr response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-sans text-navy/70 text-sm">Leander, TX &amp; beyond</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-full h-px bg-navy/10 mt-10" />

            {/* Contact details — desktop only (below form on mobile) */}
            <div className="hidden lg:flex flex-col gap-5 mt-8">
              <a
                href="mailto:events@southboundsips.com"
                className="group flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                  <svg className="w-[18px] h-[18px] text-navy/40 group-hover:text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-navy text-sm md:text-base group-hover:text-orange transition-colors">events@southboundsips.com</p>
                  <p className="font-sans text-navy/50 text-xs">Drop us a line anytime</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center">
                  <svg className="w-[18px] h-[18px] text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-navy text-sm md:text-base">Leander, Texas</p>
                  <p className="font-sans text-navy/50 text-xs">Serving the greater Austin area</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center">
                  <svg className="w-[18px] h-[18px] text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/southboundsips/" target="_blank" rel="noopener noreferrer" className="font-sans text-navy text-sm hover:text-orange transition-colors">Instagram</a>
                  <span className="text-navy/20">/</span>
                  <a href="https://www.facebook.com/southboundsips" target="_blank" rel="noopener noreferrer" className="font-sans text-navy text-sm hover:text-orange transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-enter-up-d1">
            <div className="bg-sage rounded-3xl p-6 md:p-8 lg:p-10">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-sans font-medium text-navy text-sm mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans font-medium text-navy text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block font-sans font-medium text-navy text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block font-sans font-medium text-navy text-sm mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventType" className="block font-sans font-medium text-navy text-sm mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors appearance-none"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="graduation">Graduation</option>
                      <option value="holiday">Holiday Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block font-sans font-medium text-navy text-sm mb-2">
                      Estimated Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors appearance-none"
                    >
                      <option value="">Select guest count</option>
                      <option value="1-25">1&#8211;25 guests</option>
                      <option value="26-50">26&#8211;50 guests</option>
                      <option value="51-100">51&#8211;100 guests</option>
                      <option value="101-150">101&#8211;150 guests</option>
                      <option value="150+">150+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="services" className="block font-sans font-medium text-navy text-sm mb-2">
                    Services Interested In *
                  </label>
                  <select
                    id="services"
                    name="services"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="mobile-bar">Mobile Bar Package</option>
                    <option value="bartender">Bar Services</option>
                    <option value="addons">Add-ons &amp; Rentals</option>
                    <option value="mobile-bar-bartender">Mobile Bar + Bartender</option>
                    <option value="full-service">Full Service (All Inclusive)</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans font-medium text-navy text-sm mb-2">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-sans text-navy text-base focus:outline-none focus:border-orange transition-colors resize-none"
                    placeholder="Share any details about your event, theme, drink preferences, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-sans font-medium text-white bg-orange text-base md:text-lg leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 py-3 md:py-4 hover:bg-navy transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact details — mobile only (below form) */}
        <div className="lg:hidden flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-12 pt-10 border-t border-navy/10">
          <a
            href="mailto:events@southboundsips.com"
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-orange/10 transition-colors">
              <svg className="w-[18px] h-[18px] text-navy/40 group-hover:text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="font-sans text-navy text-sm group-hover:text-orange transition-colors">events@southboundsips.com</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="font-sans text-navy/60 text-sm">Leander, Texas</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/southboundsips/" target="_blank" rel="noopener noreferrer" className="font-sans text-navy text-sm hover:text-orange transition-colors">Instagram</a>
            <span className="text-navy/20">/</span>
            <a href="https://www.facebook.com/southboundsips" target="_blank" rel="noopener noreferrer" className="font-sans text-navy text-sm hover:text-orange transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ PAGE ════════════════════════════════════════ */

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip">
      <ScrollAnimations />
      <Navbar activePage="contact" />
      <ContactSection />
      <Footer />
    </main>
  );
}
