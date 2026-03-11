"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Mobile refs
  const textTopRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  // Desktop refs (separate because a ref can only point to one DOM node)
  const dtTextTopRef = useRef<HTMLDivElement>(null);
  const dtTitleRef = useRef<HTMLDivElement>(null);
  const dtPhotoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      const end = () => window.innerHeight;
      const textY = isMobile ? 60 : 140;
      const photoY = isMobile ? 30 : 70;

      if (isMobile) {
        gsap.to(textTopRef.current, { y: textY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
        gsap.to(titleRef.current,   { y: textY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
        gsap.to(photoRef.current,   { y: photoY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
      } else {
        gsap.to(dtTextTopRef.current, { y: textY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
        gsap.to(dtTitleRef.current,   { y: textY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
        gsap.to(dtPhotoRef.current,   { y: photoY, ease: "none", scrollTrigger: { start: 0, end, scrub: true } });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* All spacing & sizing below uses vh so the content always occupies
     the same *fraction* of the hero (which is also vh-based).
     Fullscreen vs windowed just stretches/shrinks everything proportionally. */

  return (
    <section ref={sectionRef} className="sticky top-0 w-full h-[60vh] md:h-screen hero-tall z-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* ── Mobile layout (< md): flex column, anchored to bottom ── */}
      <div className="md:hidden relative z-10 h-full flex flex-col items-center justify-end pt-[70px] pb-[35px]">
        <div ref={textTopRef} className="flex flex-col items-center will-change-transform">
          <Image src="/images/meet-jaymi-heading.svg" alt="Meet Jaymi" width={250} height={38} className="w-[190px] h-auto" />
          <div className="h-6" />
          <Image src="/images/the-owner-of.svg" alt="the owner of" width={112} height={16} className="mb-14 w-[100px] h-auto" />
        </div>
        <div ref={titleRef} className="w-full flex justify-center will-change-transform -mb-1">
          <h1 className="text-navy leading-none tracking-tight hero-title-size" style={{ fontFamily: "'Badhorse', cursive" }}>Southbound</h1>
        </div>
        <div ref={photoRef} className="relative -mt-12 z-[100] will-change-transform">
          <Image src="/images/jaymi-composite.png" alt="Jaymi - Owner of Southbound Sips" width={670} height={406} className="object-contain w-[85vw] h-auto relative z-[100]" style={{ maxWidth: "670px" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[48%] z-[100]">
            <h2 className="text-navy leading-none tracking-tight hero-sips-size" style={{ fontFamily: "'Badhorse', cursive" }}>sips</h2>
          </div>
        </div>
      </div>

      {/* ── Desktop layout (≥ md): absolute positioning, each element pinned by vh ──
           This makes layout immune to content-height overflow — nothing can push
           SIPS out of frame because positions are set independently. */}
      {/* ── Desktop: whole block anchored from bottom as one unit ── */}
      <div className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-end pb-[16vh]">
        <div ref={dtTextTopRef} className="flex flex-col items-center will-change-transform">
          <Image src="/images/meet-jaymi-heading.svg" alt="Meet Jaymi" width={250} height={38} className="w-[180px] lg:w-[250px] h-auto" />
          <div className="h-[1vh]" />
          <Image src="/images/the-owner-of.svg" alt="the owner of" width={112} height={16} className="w-[90px] lg:w-[112px] h-auto mb-[3vh]" />
        </div>
        <div ref={dtTitleRef} className="w-full flex justify-center will-change-transform">
          <h1 className="text-navy leading-none tracking-tight hero-title-size" style={{ fontFamily: "'Badhorse', cursive" }}>Southbound</h1>
        </div>
        <div ref={dtPhotoRef} className="relative -mt-[4vh] z-[100] will-change-transform">
          <Image src="/images/jaymi-composite.png" alt="Jaymi - Owner of Southbound Sips" width={670} height={406} className="object-contain w-[500px] lg:w-[670px] h-auto relative z-[100] max-h-[48vh] -translate-y-8" style={{ maxWidth: "670px" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[48%] z-[100]">
            <h2 className="text-navy leading-none tracking-tight hero-sips-size" style={{ fontFamily: "'Badhorse', cursive" }}>sips</h2>
          </div>
        </div>
      </div>

    </section>
  );
}

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

function BehindTheBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=50vh bottom",
          pin: textRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });

        imagesRef.current.forEach((img, index) => {
          if (!img) return;
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            img,
            { x: isLeft ? -100 : 100, opacity: 0, scale: 0.8 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "top 40%",
                scrub: 1,
              },
            }
          );
        });
      }, sectionRef);
      return () => ctx.revert();
    } else {
      const ctx = gsap.context(() => {
        // Pin center text — no clip-path so position:fixed pins to viewport
        ScrollTrigger.create({
          trigger: mobileSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: mobileTextRef.current,
          pinSpacing: false,
        });

        // Images fade in from left/right
        mobileImagesRef.current.forEach((img, index) => {
          if (!img) return;
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            img,
            { x: isLeft ? -80 : 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "top 55%",
                scrub: 1,
              },
            }
          );
        });
      }, mobileSectionRef);
      return () => ctx.revert();
    }
  }, []);

  const desktopImages = [
    { src: "/images/image-26.png", alt: "Southbound Sips setup", className: "left-8 xl:left-16 top-[15%] w-[20vw] aspect-[4/3]" },
    { src: "/images/jaymi-team.png", alt: "Jaymi and team", className: "right-8 xl:right-16 top-[25%] w-[18vw] aspect-[3/4]" },
    { src: "/images/image-27.png", alt: "Southbound Sips event", className: "left-12 xl:left-24 top-[50%] w-[18vw] aspect-[4/3]" },
    { src: "/images/galleryphotos/southbound-sips-front.jpg", alt: "Southbound Sips trailer front", className: "right-12 xl:right-28 top-[62%] w-[20vw] aspect-[4/3]" },
  ];

  const mobileImages = [
    { src: "/images/galleryphotos/southbound-sips-front.jpg", alt: "Southbound Sips trailer front", className: "-left-4 top-[8%] w-[35vw] aspect-[4/3]" },
    { src: "/images/jaymi-team.png", alt: "Jaymi and team", className: "-right-4 top-[35%] w-[30vw] aspect-[3/4]" },
    { src: "/images/image-27.png", alt: "Southbound Sips event", className: "-left-4 top-[62%] w-[33vw] aspect-[4/3]" },
  ];

  return (
    <>
      {/* Desktop version with GSAP animations */}
      <div
        id="about"
        ref={sectionRef}
        className="hidden lg:block relative min-h-[160vh] bg-sage [clip-path:inset(0)] z-20"
      >
        {/* Pinned center text */}
        <div
          ref={textRef}
          className="relative h-screen flex items-center justify-center z-10"
        >
          <div className="text-center max-w-[600px] px-16 lg:px-24">
            {/* Behind The Bar heading */}
            <div className="flex justify-center mb-4 md:mb-6">
              <Image
                src="/images/behind-the-bar-heading.svg"
                alt="Behind The Bar"
                width={350}
                height={52}
                className="w-[300px] lg:w-[350px] h-auto"
              />
            </div>

            {/* Center content */}
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <p className="font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase">
                Your Event&apos;s Favorite Bartender
              </p>
              <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] text-center">
                Jaymi brings her love for great drinks and even better company to every event. Whether it&apos;s a wedding or backyard celebration, she&apos;s here to make it unforgettable.
              </p>
              <a
                href="#book"
                className="mt-4 font-sans font-medium text-orange text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-10 py-3 hover:bg-orange hover:text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>

        {/* Images that pop in from sides - desktop */}
        {desktopImages.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              imagesRef.current[i] = el;
            }}
            className={`absolute ${img.className} overflow-hidden z-0 rounded-lg`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>

      {/* Mobile version with scroll animation */}
      <div
        id="about-mobile"
        ref={mobileSectionRef}
        className="lg:hidden relative min-h-[155vh] bg-sage z-20"
      >
        {/* Pinned center text — GSAP pins this with position:fixed */}
        <div
          ref={mobileTextRef}
          className="relative h-screen flex items-center justify-center z-10"
        >
          <div className="text-center max-w-[280px] mx-auto px-8">
            {/* Behind The Bar heading */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/behind-the-bar-heading.svg"
                alt="Behind The Bar"
                width={350}
                height={52}
                className="w-[230px] md:w-[300px] h-auto"
              />
            </div>

            {/* Center content */}
            <div className="flex flex-col items-center gap-3">
              <p className="font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase">
                Your Event&apos;s Favorite Bartender
              </p>
              <p className="font-sans font-normal text-navy text-sm md:text-[18px] leading-[1.7] tracking-[-0.011em] text-center">
                Jaymi brings her love for great drinks and even better company to every event. Whether it&apos;s a wedding or backyard celebration, she&apos;s here to make it unforgettable.
              </p>
              <a
                href="#book"
                className="mt-3 font-sans font-medium text-orange text-sm md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-6 py-2.5 hover:bg-orange hover:text-white transition-all active:scale-95"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>

        {/* Images that fade in from left and right */}
        {mobileImages.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              mobileImagesRef.current[i] = el;
            }}
            className={`absolute ${img.className} overflow-hidden z-0 rounded-xl shadow-lg`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </>
  );
}

function MobileBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: imageRef.current, delay: 0 },
        { ref: headingRef.current, delay: 0.1 },
        { ref: subtitleRef.current, delay: 0.2 },
        { ref: paragraphRef.current, delay: 0.3 },
        { ref: paragraph2Ref.current, delay: 0.35 },
        { ref: buttonRef.current, delay: 0.4 },
      ];

      elements.forEach(({ ref, delay }) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full bg-sage pb-[100px] md:pb-[50px] pt-[60px] md:pt-[90px] mt-[60px] md:mt-[100px]">
      {/* Background texture */}
      <div className="absolute -top-[60px] md:-top-[90px] inset-x-0 bottom-0">
        <Image
          src="/images/backgroundfiller.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-x-0 -top-[60px] md:-top-[90px] bottom-[50px] bg-white/93" />
      </div>

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-0 md:min-h-[900px]">
        {/* Mobile: heading + subtitle above image */}
        <div ref={headingRef} className="md:hidden text-center px-6 mb-4">
          <Image
            src="/images/the-mobile-bar-heading.svg"
            alt="The Mobile Bar"
            width={350}
            height={53}
            className="w-[260px] h-auto mx-auto"
          />
          <h3 ref={subtitleRef} className="font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase mt-3">
            Meet &lsquo;Maybee&rsquo;
          </h3>
        </div>

        {/* Mobile bar image - square on mobile, fill on desktop */}
        <div ref={imageRef} className="order-2 md:order-none mx-6 md:mx-0 aspect-square md:aspect-auto relative rounded-2xl md:rounded-none overflow-hidden mb-6 md:mb-12 md:min-h-0">
          <Image
            src="/images/mobile-bar-2d1ce6.png"
            alt="Maybee - The Mobile Bar"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="order-3 md:order-none flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-10 lg:px-16 py-0 md:py-20">
          {/* Desktop only: heading + subtitle */}
          <div className="hidden md:block">
            <Image
              src="/images/the-mobile-bar-heading.svg"
              alt="The Mobile Bar"
              width={350}
              height={53}
              className="w-[300px] lg:w-[350px] h-auto"
            />
          </div>
          <h3 className="hidden md:block font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase mt-4">
            Meet &lsquo;Maybee&rsquo;
          </h3>

          <p ref={paragraphRef} className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] mt-4 md:mt-6">
            Born from a labor of love, thanks to the visionary Katie. She breathed life into this beauty, dubbing her &lsquo;Maybee&rsquo; with a hint of uncertainty and a whole lot of faith. &ldquo;Maybe this will soar, maybe it won&apos;t,&rdquo; she mused.
          </p>

          <p ref={paragraph2Ref} className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] mt-4">
            Fast forward a few years later, and here we are, bustling with bookings and making dreams a reality. The journey&apos;s been wild, and I&apos;m beyond excited to see where the next four years will take us. Here&apos;s to &lsquo;Maybee&rsquo; and the incredible adventure she&apos;s leading us on!
          </p>

          <div ref={buttonRef} className="mt-8 md:mt-10">
            <a
              href="/services#packages"
              className="inline-block font-sans font-medium text-white bg-orange text-base md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowerIcon() {
  return (
    <svg
      className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="6.5" rx="3" ry="4" fill="white" />
      <ellipse cx="12" cy="17.5" rx="3" ry="4" fill="white" />
      <ellipse cx="6.5" cy="12" rx="4" ry="3" fill="white" />
      <ellipse cx="17.5" cy="12" rx="4" ry="3" fill="white" />
      <ellipse cx="7.5" cy="7.5" rx="3" ry="3.5" fill="white" transform="rotate(-45 7.5 7.5)" />
      <ellipse cx="16.5" cy="7.5" rx="3" ry="3.5" fill="white" transform="rotate(45 16.5 7.5)" />
      <ellipse cx="7.5" cy="16.5" rx="3" ry="3.5" fill="white" transform="rotate(45 7.5 16.5)" />
      <ellipse cx="16.5" cy="16.5" rx="3" ry="3.5" fill="white" transform="rotate(-45 16.5 16.5)" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );
}

function MarqueeGroup() {
  return (
    <div className="flex items-center shrink-0">
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="flex-shrink-0 font-sans font-medium text-white text-lg md:text-xl lg:text-2xl uppercase tracking-wider mx-3 md:mx-4">
            Explore Our Packages
          </span>
          <FlowerIcon />
        </React.Fragment>
      ))}
    </div>
  );
}

function ChooseExperienceStrip() {
  return (
    <a href="/services#packages" className="block w-full bg-navy py-4 md:py-6 overflow-hidden hover:bg-navy/90 transition-colors">
      <div className="flex animate-scroll-left whitespace-nowrap">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </a>
  );
}

function WhatIOffer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Drink cards - staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Buttons animation
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.children;
        gsap.fromTo(
          buttons,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative w-full bg-white pt-24 md:pt-24 lg:pt-32 pb-28 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* What I Offer heading */}
        <div ref={headingRef} className="text-center md:text-left px-6 md:px-0">
          <Image
            src="/images/what-i-offer-heading.svg"
            alt="What I Offer"
            width={280}
            height={53}
            className="mb-3 md:mb-4 w-[200px] md:w-[240px] lg:w-[280px] h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Choose Your Experience subtitle */}
        <div ref={subtitleRef} className="text-center md:text-left px-6 md:px-0">
          <p className="font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase mb-3 md:mb-4">
            Choose Your Experience
          </p>
        </div>

        {/* Description */}
        <p ref={descriptionRef} className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] max-w-[900px] md:mx-0 mx-auto text-center md:text-left mb-16 md:mb-24 px-6 md:px-0">
          Whether you need the full experience or just a helping hand behind the
          bar, Jaymi got you covered.
        </p>

        {/* Drink cards with integrated info */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-6 md:mb-10 items-start md:px-0">
          {/* Mobile Bar Packages */}
          <a href="/services#packages" className="relative flex flex-col items-center group cursor-pointer">
            {/* Flower badge - desktop only */}
            <div className="hidden md:block absolute -top-8 right-6 z-20 w-[150px] h-[150px] text-navy group-hover:text-orange transition-colors duration-300">
              <svg viewBox="-5 -5 130 130" className="w-full h-full">
                <g fill="currentColor">
                  <ellipse cx="60" cy="20" rx="18" ry="22" />
                  <ellipse cx="60" cy="100" rx="18" ry="22" />
                  <ellipse cx="20" cy="60" rx="22" ry="18" />
                  <ellipse cx="100" cy="60" rx="22" ry="18" />
                  <ellipse cx="32" cy="32" rx="16" ry="20" transform="rotate(-45 32 32)" />
                  <ellipse cx="88" cy="32" rx="16" ry="20" transform="rotate(45 88 32)" />
                  <ellipse cx="32" cy="88" rx="16" ry="20" transform="rotate(45 32 88)" />
                  <ellipse cx="88" cy="88" rx="16" ry="20" transform="rotate(-45 88 88)" />
                  <circle cx="60" cy="60" r="28" />
                </g>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-xl leading-[1.03] tracking-[-0.011em] text-center">
                Fun Fave
              </span>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-t-[214px] md:rounded-b-[20px] aspect-square md:aspect-[3/4] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <Image src="/images/drink-fan-fave.png" alt="Fan Fave drink" width={449} height={607} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Mobile: title left, price right */}
            <div className="flex md:hidden justify-between items-baseline pt-2.5 w-full gap-3">
              <h3 className="font-serif text-2xl text-navy leading-tight">Mobile Bar Packages</h3>
              <p className="font-sans font-medium text-orange text-base whitespace-nowrap">Starting from $280/Hr</p>
            </div>
            {/* Desktop: centered text */}
            <div className="hidden md:block text-center pt-5 w-full">
              <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em] text-navy group-hover:text-orange transition-colors duration-300">
                Mobile Bar Packages
              </h3>
              <p className="font-sans font-medium text-orange text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-2">
                Starting from $280/Hr
              </p>
              <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-navy/50 group-hover:text-orange transition-all duration-300">
                Learn more <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </a>

          {/* Bartender Services */}
          <a href="/services#bar-services" className="relative flex flex-col items-center group cursor-pointer">
            {/* 6-pointed star badge - desktop only */}
            <div className="hidden md:block absolute -top-8 right-6 z-20 w-[150px] h-[150px] text-navy group-hover:text-orange transition-colors duration-300">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <polygon fill="currentColor" points="60,5 76,32 108,32 92,60 108,88 76,88 60,115 44,88 12,88 28,60 12,32 44,32" transform="rotate(30 60 60)" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-xl leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"Easy\nBreezy"}
              </span>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-t-[214px] md:rounded-b-[20px] aspect-square md:aspect-[3/4] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <Image src="/images/drink-easy-breezy-310de1.png" alt="Easy Breezy drink" width={450} height={607} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Mobile: title left, price right */}
            <div className="flex md:hidden justify-between items-baseline pt-2.5 w-full gap-3">
              <h3 className="font-serif text-2xl text-navy leading-tight">Bar Services</h3>
              <p className="font-sans font-medium text-orange text-base whitespace-nowrap">Starting from $90/Hr</p>
            </div>
            {/* Desktop: centered text */}
            <div className="hidden md:block text-center pt-5 w-full">
              <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em] text-navy group-hover:text-orange transition-colors duration-300">
                Bar Services
              </h3>
              <p className="font-sans font-medium text-orange text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-2">
                Starting from $90/Hr
              </p>
              <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-navy/50 group-hover:text-orange transition-all duration-300">
                Learn more <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </a>

          {/* Add-ons & Rentals */}
          <a href="/services#rentals" className="relative flex flex-col items-center group cursor-pointer">
            {/* 5-pointed star badge - desktop only */}
            <div className="hidden md:block absolute -top-8 right-6 z-20 w-[150px] h-[150px] text-navy group-hover:text-orange transition-colors duration-300">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <polygon fill="currentColor" points="60,2 74,35 115,42 88,65 95,112 60,88 25,112 32,65 5,42 46,35" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-xl leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"More\nPlease"}
              </span>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-t-[214px] md:rounded-b-[20px] aspect-square md:aspect-[3/4] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <Image src="/images/drink-more-please.png" alt="More Please drink" width={449} height={608} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Mobile: title left, price right */}
            <div className="flex md:hidden justify-between items-baseline pt-2.5 w-full gap-3">
              <h3 className="font-serif text-2xl text-navy leading-tight">Add-ons & Rentals</h3>
              <p className="font-sans font-medium text-orange text-base whitespace-nowrap">Starting at $25 Per Event</p>
            </div>
            {/* Desktop: centered text */}
            <div className="hidden md:block text-center pt-5 w-full">
              <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em] text-navy group-hover:text-orange transition-colors duration-300">
                Add-ons & Rentals
              </h3>
              <p className="font-sans font-medium text-orange text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-2">
                Starting at $25 Per Event
              </p>
              <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-navy/50 group-hover:text-orange transition-all duration-300">
                Learn more <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </a>
        </div>

        {/* Buttons - desktop only */}
        <div ref={buttonsRef} className="hidden md:flex flex-row items-center justify-center gap-4 mb-10 md:mb-16">
          <a
            href="#book"
            className="text-center font-sans font-medium text-white bg-orange text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-10 py-3 hover:bg-navy active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Event
          </a>
          <a
            href="/services"
            className="text-center font-sans font-medium text-orange text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-10 py-3 hover:bg-orange hover:text-white active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
}

function KindWordsSection() {
  const reviews = [
    {
      text: "Jaymi and her team made our wedding day absolutely perfect. The cocktails were delicious, the service was impeccable, and our guests couldn't stop raving about the drinks all night. She truly went above and beyond to make sure everyone had an amazing time!",
      name: "Sarah & Michael",
    },
    {
      text: "We hired South Bound Sips for our corporate event and it was the best decision we made. Professional, friendly, and the drink selection was incredible. Our employees are still talking about it weeks later!",
      name: "Jennifer R.",
    },
    {
      text: "From the first call to the last cocktail served, Jaymi was amazing to work with. She helped us create a custom menu that fit our backyard party perfectly. Can't wait to book again for our next celebration!",
      name: "David & Emma",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  // Cleanup pending resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    pauseAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    pauseAutoPlay();
  };

  return (
    <section className="relative w-full bg-sage pt-20 md:pt-32 pb-24 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center">
        {/* Kind Words heading */}
        <Image
          src="/images/kind-words-heading.svg"
          alt="Kind Words"
          width={230}
          height={47}
          className="scroll-fade-up mb-3 md:mb-4 w-[170px] md:w-[200px] lg:w-[230px] h-auto"
        />

        {/* Subtitle */}
        <p className="scroll-fade-up stagger-1 font-sans font-semibold text-orange text-sm md:text-base leading-[1.5] tracking-[0.15em] uppercase mb-8 md:mb-10">
          Straight From The Sippers
        </p>

        {/* Reviews carousel */}
        <div className="w-full max-w-[900px] relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={goToPrev}
            className="absolute -left-1 md:-left-12 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white active:scale-90 text-navy transition-all shadow-md"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Quotes area */}
          <div className="w-full max-w-[800px] mx-auto relative flex flex-col px-14 md:px-0">
            <div className="self-start">
              <Image
                src="/images/quote-open.svg"
                alt="Opening quote"
                width={35}
                height={30}
                className="w-[22px] md:w-[35px] h-auto"
              />
            </div>

            {/* Quote text with transition */}
            <div className="min-h-[140px] md:min-h-[100px] flex items-center">
              <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.7] tracking-[-0.011em] text-center max-w-[720px] mx-auto py-3 md:py-6 transition-opacity duration-500">
                {reviews[currentIndex].text}
              </p>
            </div>

            <div className="self-end">
              <Image
                src="/images/quote-close.svg"
                alt="Closing quote"
                width={35}
                height={30}
                className="w-[22px] md:w-[35px] h-auto"
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={goToNext}
            className="absolute -right-1 md:-right-12 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white active:scale-90 text-navy transition-all shadow-md"
            aria-label="Next review"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Attribution */}
        <p className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] capitalize mt-3 md:mt-4 transition-opacity duration-500">
          - {reviews[currentIndex].name}
        </p>

        {/* Page indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`!min-h-0 h-2.5 md:h-3 p-0 border-0 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange w-7 md:w-8"
                  : "bg-navy/20 hover:bg-navy/40 w-2.5 md:w-3"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Background image with GSAP parallax */}
      <div
        ref={bgRef}
        className="absolute -top-[40%] -bottom-[40%] left-0 right-0 will-change-transform"
      >
        <Image
          src="/images/backgroundfiller.png"
          alt=""
          fill
          className="object-cover opacity-70"
        />
      </div>
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[rgba(49,78,121,0.6)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-10 flex flex-col items-center text-center">
        <h2 className="scroll-fade-up font-sans font-medium text-white text-[26px] md:text-5xl lg:text-[48px] leading-[1.2] tracking-[-0.011em] max-w-[800px]">
          Now booking for upcoming dates, limited availability
        </h2>

        <a
          href="#book"
          className="scroll-fade-up stagger-2 mt-5 md:mt-5 font-sans font-medium text-white bg-[#E8792B] text-base md:text-lg leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2.5 md:py-2.5 hover:bg-[#d46a1f] active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Secure Your Date Now
        </a>
      </div>
    </section>
  );
}

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setErrorMessage(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    try {
      const response = await fetch("/api/southboundsips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          source: "home-booking-form",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          (data && (data.error as string)) ||
            "Something went wrong sending your inquiry. Please try again."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't send your inquiry right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="relative w-full py-14 md:py-24 lg:py-32">
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left side - Info */}
          <div className="scroll-fade-up flex flex-col justify-center">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase mb-4 text-center lg:text-left">
              Let&apos;s Work Together
            </span>
            <h2 className="font-serif text-navy text-4xl md:text-5xl lg:text-[64px] leading-[1.05] tracking-tight mb-5 md:mb-6 text-center lg:text-left">
              Your event,{" "}
              <span className="italic text-orange">elevated.</span>
            </h2>
            <p className="font-sans font-normal text-navy/70 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] mb-10 md:mb-12 max-w-[480px] text-center lg:text-left mx-auto lg:mx-0">
              Fill out the form and Jaymi will get back to you within 24&#8211;48 hours to discuss your vision and create a custom experience.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="mailto:events@southboundsips.com" className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                  <svg className="w-5 h-5 text-navy group-hover:text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-navy text-base md:text-lg group-hover:text-orange transition-colors">events@southboundsips.com</p>
                  <p className="font-sans text-navy/50 text-sm">Drop us a line anytime</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-navy text-base md:text-lg">Leander, Texas</p>
                  <p className="font-sans text-navy/50 text-sm">Serving the greater Austin area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="scroll-slide-right stagger-2 bg-sage rounded-3xl p-6 md:p-8 lg:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                    <option value="1-25">1-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-150">101-150 guests</option>
                    <option value="150+">150+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="services" className="block font-sans font-medium text-navy text-sm mb-2">
                  Services Needed *
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

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-sans font-medium text-white bg-orange text-base md:text-lg leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 py-3 md:py-4 hover:bg-navy transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
                {status === "success" && (
                  <p className="font-sans text-sm text-emerald-800">
                    Thank you! Your inquiry has been sent to Southbound Sips.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p className="font-sans text-sm text-red-700">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      {/* Content that scrolls over the hero */}
      <div className="relative z-10 bg-transparent hero-overlay-mt">
        <ScallopTop />
        <BehindTheBarSection />
        <ScallopBottom />
        <MobileBarSection />
        <ChooseExperienceStrip />
        <WhatIOffer />
        <ScallopTop />
        <KindWordsSection />
        <BookingBanner />
        <BookingForm />
        <Footer />
      </div>
    </main>
  );
}
