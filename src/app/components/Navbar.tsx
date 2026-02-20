"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({
  activePage = "home",
}: {
  activePage?: "home" | "about" | "services" | "contact" | "faq";
}) {
  const isHome = activePage === "home";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="w-full bg-white z-50 relative">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-3 md:py-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="South Bound Sips Logo"
            width={50}
            height={48}
            className="object-contain w-10 h-10 md:w-[50px] md:h-[48px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          <Link
            href="/"
            className={`font-sans font-medium text-base lg:text-lg leading-normal tracking-[-0.011em] transition-colors hover:text-orange ${
              activePage === "home" ? "text-orange" : "text-navy"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-sans font-medium text-base lg:text-lg leading-normal tracking-[-0.011em] transition-colors hover:text-orange ${
              activePage === "about" ? "text-orange" : "text-navy"
            }`}
          >
            About
          </Link>
          <Link
            href={isHome ? "#services" : "/#services"}
            className={`font-sans font-medium text-base lg:text-lg leading-normal tracking-[-0.011em] transition-colors hover:text-orange ${
              activePage === "services" ? "text-orange" : "text-navy"
            }`}
          >
            Services
          </Link>
          <Link
            href={isHome ? "#faq" : "/#faq"}
            className={`font-sans font-medium text-base lg:text-lg leading-normal tracking-[-0.011em] transition-colors hover:text-orange ${
              activePage === "faq" ? "text-orange" : "text-navy"
            }`}
          >
            FAQ
          </Link>
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className={`font-sans font-medium text-base lg:text-lg leading-normal tracking-[-0.011em] transition-colors hover:text-orange ${
              activePage === "contact" ? "text-orange" : "text-navy"
            }`}
          >
            Contact
          </Link>
          <Link
            href={isHome ? "#book" : "/#book"}
            className="font-sans font-medium text-white bg-orange text-base lg:text-lg leading-normal tracking-[-0.011em] px-5 md:px-6 py-1.5 md:py-2 rounded-full transition-colors hover:bg-navy"
          >
            Book Your Event
          </Link>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={isHome ? "#book" : "/#book"}
            className="font-sans font-medium text-white bg-orange text-sm leading-normal px-4 py-1.5 rounded-full transition-colors hover:bg-navy active:scale-95"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              mobileMenuOpen
                ? "bg-orange text-white"
                : "bg-sage/50 text-navy hover:bg-orange hover:text-white"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white overflow-hidden transition-all duration-300 ease-out z-50 ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 shadow-xl border-t-2 border-orange"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          <Link
            href="/"
            onClick={closeMenu}
            className={`group font-sans font-medium text-xl leading-normal tracking-[-0.011em] py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sage/30 hover:pl-6 flex items-center justify-between ${
              activePage === "home" ? "text-orange bg-sage/20" : "text-navy"
            }`}
          >
            Home
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`group font-sans font-medium text-xl leading-normal tracking-[-0.011em] py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sage/30 hover:pl-6 flex items-center justify-between ${
              activePage === "about" ? "text-orange bg-sage/20" : "text-navy"
            }`}
          >
            About
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={isHome ? "#services" : "/#services"}
            onClick={closeMenu}
            className={`group font-sans font-medium text-xl leading-normal tracking-[-0.011em] py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sage/30 hover:pl-6 flex items-center justify-between ${
              activePage === "services" ? "text-orange bg-sage/20" : "text-navy"
            }`}
          >
            Services
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={isHome ? "#faq" : "/#faq"}
            onClick={closeMenu}
            className={`group font-sans font-medium text-xl leading-normal tracking-[-0.011em] py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sage/30 hover:pl-6 flex items-center justify-between ${
              activePage === "faq" ? "text-orange bg-sage/20" : "text-navy"
            }`}
          >
            FAQ
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={isHome ? "#contact" : "/#contact"}
            onClick={closeMenu}
            className={`group font-sans font-medium text-xl leading-normal tracking-[-0.011em] py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sage/30 hover:pl-6 flex items-center justify-between ${
              activePage === "contact" ? "text-orange bg-sage/20" : "text-navy"
            }`}
          >
            Contact
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={isHome ? "#book" : "/#book"}
            onClick={closeMenu}
            className="font-sans font-medium text-white bg-orange text-xl leading-normal tracking-[-0.011em] px-6 py-4 rounded-full transition-all duration-200 hover:bg-navy active:scale-[0.98] text-center mt-4"
          >
            Book Your Event
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
            <a
              href="https://www.instagram.com/southboundsips/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-navy text-base transition-all duration-200 hover:text-orange"
            >
              Instagram
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.facebook.com/southboundsips"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-navy text-base transition-all duration-200 hover:text-orange"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-navy/20 z-40 backdrop-blur-sm"
          style={{ top: "100%" }}
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
