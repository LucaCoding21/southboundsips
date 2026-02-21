"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

/* ─── Hero Section ────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative w-full bg-white min-h-[50vh] md:min-h-[55vh] flex items-center pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
        <span className="animate-enter-up font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase">
          Get In Touch
        </span>

        <h1 className="animate-enter-up-d1 mt-4 md:mt-6">
          <span className="block font-sans font-semibold text-navy text-2xl md:text-4xl lg:text-5xl leading-tight">
            We&apos;d Love to
          </span>
          <span className="block font-serif text-navy text-4xl md:text-6xl lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-tight mt-1 md:mt-2">
            Hear From You
          </span>
        </h1>

        <p className="animate-enter-up-d2 font-sans font-normal text-navy/70 text-base md:text-lg lg:text-xl leading-[1.7] tracking-[-0.011em] mt-6 max-w-[520px] mx-auto">
          Whether you&apos;re ready to book or just have a few questions,
          reach out and Jaymi will get back to you within 24&#8211;48 hours.
        </p>
      </div>
    </section>
  );
}

/* ─── Contact Info Strip ──────────────────────────────────────────────── */

function ContactInfoSection() {
  return (
    <section className="relative w-full py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="scroll-fade-up flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <a
            href="mailto:hello@southboundsips.com"
            className="font-sans text-navy text-sm md:text-base hover:text-orange transition-colors"
          >
            hello@southboundsips.com
          </a>
          <span className="hidden md:block w-px h-4 bg-navy/20" />
          <span className="font-sans text-navy/60 text-sm md:text-base">
            Leander, Texas
          </span>
          <span className="hidden md:block w-px h-4 bg-navy/20" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/southboundsips/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-navy text-sm md:text-base hover:text-orange transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/southboundsips"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-navy text-sm md:text-base hover:text-orange transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@southboundsips"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-navy text-sm md:text-base hover:text-orange transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Booking Form Section ────────────────────────────────────────────── */

function BookingFormSection() {
  return (
    <section id="book" className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgroundfiller.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <div className="scroll-fade-up flex flex-col justify-center">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase mb-4">
              Book With Us
            </span>
            <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1] tracking-tight">
              Ready to Celebrate?
            </h2>
            <p className="font-sans font-normal text-navy/70 text-base md:text-lg leading-[1.7] tracking-[-0.011em] mt-5 max-w-[480px]">
              We&apos;d love to be the bartender for your next event and bring
              the most darlin&apos; mobile bar right to you! In order for us to
              give you an accurate quote, please give as much detail on your
              event as possible. We may call with additional questions. Thanks
              so much!
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm">Response Time</p>
                  <p className="font-sans text-navy/60 text-sm">24&#8211;48 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm">TABC Certified</p>
                  <p className="font-sans text-navy/60 text-sm">Licensed &amp; insured bartenders</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm">Georgia &amp; Beyond</p>
                  <p className="font-sans text-navy/60 text-sm">Travel fee may apply outside 30 mi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="scroll-slide-right stagger-2 bg-sage rounded-3xl p-6 md:p-8 lg:p-10">
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
                  <option value="bartender">Bartender Services</option>
                  <option value="addons">Add-ons & Rentals</option>
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
    </section>
  );
}

/* ═══════════════════════ PAGE ════════════════════════════════════════ */

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip">
      <ScrollAnimations />
      <Navbar activePage="contact" />
      <HeroSection />
      <ContactInfoSection />
      <BookingFormSection />
      <Footer />
    </main>
  );
}
