"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // "Meet Jaymi" text — faster parallax
      gsap.to(textTopRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: textTopRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        },
      });

      // "Southbound" title — medium parallax
      gsap.to(titleRef.current, {
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        },
      });

      // Photo composite — slowest parallax
      gsap.to(photoRef.current, {
        y: 70,
        ease: "none",
        scrollTrigger: {
          trigger: photoRef.current,
          start: "top 30%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="sticky top-0 w-full overflow-hidden z-0">
      {/* Background layer with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 flex flex-col items-center">
        {/* MEET JAYMI + the owner of - moves slower */}
        <div ref={textTopRef} className="flex flex-col items-center will-change-transform">
          <Image
            src="/images/meet-jaymi-heading.svg"
            alt="Meet Jaymi"
            width={250}
            height={38}
            className="w-[130px] md:w-[180px] lg:w-[250px] h-auto"
          />
          <Image
            src="/images/the-owner-of.svg"
            alt="the owner of"
            width={112}
            height={16}
            className="mt-6 md:mt-8 mb-2 md:mb-3 w-[70px] md:w-[90px] lg:w-[112px] h-auto"
          />
        </div>

        {/* SOUTHBOUND title - moves at medium speed */}
        <div ref={titleRef} className="w-full flex justify-center px-0 will-change-transform">
          <h1
            className="text-navy text-[5rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] leading-none tracking-tight"
            style={{ fontFamily: "'Badhorse', cursive" }}
          >
            Southbound
          </h1>
        </div>

        {/* Jaymi photo composite with SIPS overlay - moves slowest */}
        <div ref={photoRef} className="relative -mt-12 md:-mt-20 lg:-mt-28 z-[100] will-change-transform">
          <Image
            src="/images/jaymi-composite.png"
            alt="Jaymi - Owner of South Bound Sips"
            width={670}
            height={406}
            className="object-contain w-[300px] md:w-[500px] lg:w-[670px] h-auto relative z-[100]"
          />
          {/* SIPS title - overlaying the image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[35%] z-[100]">
            <h2
              className="text-navy text-[4rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] leading-none tracking-tight"
              style={{ fontFamily: "'Badhorse', cursive" }}
            >
              sips
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScallopTop() {
  return (
    <div
      className="w-full relative z-10 -mt-[90px]"
      style={{
        height: "90px",
        background:
          "radial-gradient(circle 90px at center bottom, #CFE2D6 98%, transparent 100%)",
        backgroundSize: "120px 90px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function ScallopBottom() {
  return (
    <div
      className="w-full relative z-10 -mb-[90px]"
      style={{
        height: "90px",
        background:
          "radial-gradient(circle 90px at center top, #CFE2D6 98%, transparent 100%)",
        backgroundSize: "120px 90px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function BehindTheBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center text while scrolling through section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=50vh bottom",
        pin: textRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });

      // Animate images from their respective sides
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        const isLeft = index % 2 === 0;

        gsap.fromTo(
          img,
          {
            x: isLeft ? -100 : 100,
            opacity: 0,
            scale: 0.8,
          },
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
  }, []);

  const images = [
    { src: "/images/image-26.png", alt: "South Bound Sips setup", className: "left-8 xl:left-16 top-[15%] w-[20vw] aspect-[4/3]" },
    { src: "/images/jaymi-team.png", alt: "Jaymi and team", className: "right-8 xl:right-16 top-[25%] w-[18vw] aspect-[3/4]" },
    { src: "/images/image-27.png", alt: "South Bound Sips event", className: "left-12 xl:left-24 top-[50%] w-[18vw] aspect-[4/3]" },
    { src: "/images/image-26.png", alt: "South Bound Sips detail", className: "right-12 xl:right-28 top-[62%] w-[20vw] aspect-[4/3]" },
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
          <div className="text-center max-w-[600px] px-8">
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
              <p className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em]">
                Your Event&apos;s Favourite Bartender
              </p>
              <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] text-center">
                As the new owner of South Bound Sips, Jaymi brings her love for great drinks and even better company to every event. Whether it's a wedding, corporate event, or backyard celebration, she's here to make your event unforgettable, one cocktail at a time.
              </p>
              <a
                href="#book"
                className="mt-4 font-sans font-medium text-orange text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-10 py-3 hover:bg-orange hover:text-white transition-colors"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>

        {/* Images that pop in from sides */}
        {images.map((img, i) => (
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

      {/* Mobile version - simple static layout */}
      <section id="about-mobile" className="lg:hidden relative w-full bg-sage py-20 md:py-32">
        <div className="max-w-[600px] mx-auto px-4 md:px-8">
          {/* Behind The Bar heading */}
          <div className="flex justify-center mb-4 md:mb-6">
            <Image
              src="/images/behind-the-bar-heading.svg"
              alt="Behind The Bar"
              width={350}
              height={52}
              className="w-[250px] md:w-[300px] h-auto"
            />
          </div>

          {/* Center content */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <p className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em]">
              Your Event&apos;s Favourite Bartender
            </p>
            <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] text-center">
              As the new owner of South Bound Sips, Jaymi brings her love for great drinks and even better company to every event. Whether it's a wedding, corporate event, or backyard celebration, she's here to make your event unforgettable, one cocktail at a time.
            </p>
            <a
              href="#book"
              className="mt-2 md:mt-4 font-sans font-medium text-orange text-base md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange hover:text-white transition-colors"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>

        {/* Mobile photos grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mt-12">
          <Image
            src="/images/image-26.png"
            alt="South Bound Sips setup"
            width={504}
            height={378}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="/images/image-27.png"
            alt="South Bound Sips event"
            width={460}
            height={345}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="/images/jaymi-team.png"
            alt="Jaymi and team"
            width={509}
            height={636}
            className="rounded-lg object-cover w-full col-span-2 max-w-[300px] mx-auto"
          />
        </div>
      </section>
    </>
  );
}

function MobileBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: imageRef.current, delay: 0 },
        { ref: headingRef.current, delay: 0.1 },
        { ref: subtitleRef.current, delay: 0.2 },
        { ref: paragraphRef.current, delay: 0.3 },
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
    <section ref={sectionRef} className="relative w-full bg-sage pb-[50px] pt-[90px] mt-[100px]">
      {/* Background texture */}
      <div className="absolute -top-[90px] inset-x-0 bottom-0">
        <Image
          src="/images/backgroundfiller.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-x-0 -top-[90px] bottom-[50px] bg-white/93" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[900px]">
        {/* Left - Mobile bar image */}
        <div ref={imageRef} className="relative min-h-[400px] md:min-h-0 mb-8 md:mb-12">
          <Image
            src="/images/mobile-bar-2d1ce6.png"
            alt="The Mobile Bar"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-20">
          <div ref={headingRef}>
            <Image
              src="/images/the-mobile-bar-heading.svg"
              alt="The Mobile Bar"
              width={350}
              height={53}
              className="w-[260px] md:w-[300px] lg:w-[350px] h-auto"
            />
          </div>

          <h3 ref={subtitleRef} className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] capitalize mt-3 md:mt-4">
            Bringing the experience to you
          </h3>

          <p ref={paragraphRef} className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] mt-4 md:mt-6">
            Our fully equipped mobile bar comes directly to your venue, bringing everything needed to serve up craft cocktails, beer, wine, and more. From intimate gatherings to large celebrations, we set up, serve, and clean up so you can focus on enjoying your event.
          </p>

          <div ref={buttonRef} className="mt-8 md:mt-10">
            <a
              href="#services"
              className="inline-block font-sans font-medium text-white bg-orange text-base md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange/90 transition-colors"
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
    <div className="w-full bg-navy py-4 md:py-6 overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}

function WhatIOffer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
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

      // Packages grid animation
      if (packagesRef.current) {
        const packages = packagesRef.current.children;
        gsap.fromTo(
          packages,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            scrollTrigger: {
              trigger: packagesRef.current,
              start: "top 85%",
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
    <section ref={sectionRef} id="services" className="relative w-full bg-white pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* What I Offer heading */}
        <div ref={headingRef} className="text-left">
          <Image
            src="/images/what-i-offer-heading.svg"
            alt="What I Offer"
            width={280}
            height={53}
            className="mb-3 md:mb-4 w-[200px] md:w-[240px] lg:w-[280px] h-auto"
          />
        </div>

        {/* Choose Your Experience subtitle */}
        <div ref={subtitleRef} className="text-left">
          <p className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-3 md:mb-4">
            Choose Your Experience
          </p>
        </div>

        {/* Description */}
        <p ref={descriptionRef} className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] max-w-[900px] mb-16 md:mb-24">
          Whether you need the full experience or just a helping hand behind the
          bar, Jaymi got you covered.
        </p>

        {/* Drink cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-3 md:mb-6 items-end">
          {/* Fan Fave */}
          <div className="relative flex flex-col items-center">
            {/* Flower badge - top right */}
            <div className="absolute -top-8 right-2 md:right-6 z-20 w-[130px] h-[130px] md:w-[150px] md:h-[150px]">
              <svg viewBox="-5 -5 130 130" className="w-full h-full">
                <g fill="#1a3a5c">
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
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-xl leading-[1.03] tracking-[-0.011em] text-center">
                Fun Fave
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px] aspect-[3/4]">
              <Image
                src="/images/drink-fan-fave.png"
                alt="Fan Fave drink"
                width={449}
                height={607}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Easy Breezy */}
          <div className="relative flex flex-col items-center">
            {/* 6-pointed star badge - top right */}
            <div className="absolute -top-8 right-2 md:right-6 z-20 w-[130px] h-[130px] md:w-[150px] md:h-[150px]">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <polygon
                  fill="#1a3a5c"
                  points="60,5 76,32 108,32 92,60 108,88 76,88 60,115 44,88 12,88 28,60 12,32 44,32"
                  transform="rotate(30 60 60)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-xl leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"Easy\nBreezy"}
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px] aspect-[3/4]">
              <Image
                src="/images/drink-easy-breezy-310de1.png"
                alt="Easy Breezy drink"
                width={450}
                height={607}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* More Please */}
          <div className="relative flex flex-col items-center md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-none">
            {/* 5-pointed star badge - top right */}
            <div className="absolute -top-8 right-2 md:right-6 z-20 w-[130px] h-[130px] md:w-[150px] md:h-[150px]">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <polygon
                  fill="#1a3a5c"
                  points="60,2 74,35 115,42 88,65 95,112 60,88 25,112 32,65 5,42 46,35"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-xl leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"More\nPlease"}
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px] aspect-[3/4]">
              <Image
                src="/images/drink-more-please.png"
                alt="More Please drink"
                width={449}
                height={608}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Packages grid */}
        <div ref={packagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-1 md:mb-2">
          <div className="text-center">
            <h3 className="font-serif text-navy text-2xl md:text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em]">
              Mobile Bar Packages
            </h3>
            <p className="font-sans font-medium text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-4 md:mb-6">
              Starting from $260/Hr
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-navy text-2xl md:text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em]">
              Bartender Services
            </h3>
            <p className="font-sans font-medium text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-4 md:mb-6">
              Starting from $180/Hr
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-navy text-2xl md:text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.011em]">
              Add-ons & Rentals
            </h3>
            <p className="font-sans font-medium text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] mb-4 md:mb-6">
              Starting at $25 Per Event
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-10 md:mb-16">
          <div className="flex justify-center">
            <a
              href="#"
              className="font-sans font-medium text-orange text-base md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange hover:text-white transition-colors"
            >
              View Packages
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="font-sans font-medium text-orange text-base md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange hover:text-white transition-colors"
            >
              See Services
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="font-sans font-medium text-orange text-base md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange hover:text-white transition-colors"
            >
              Explore Services
            </a>
          </div>
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
    <section className="relative w-full bg-sage pt-24 md:pt-32 pb-28 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center">
        {/* Kind Words heading */}
        <Image
          src="/images/kind-words-heading.svg"
          alt="Kind Words"
          width={230}
          height={47}
          className="mb-3 md:mb-4 w-[170px] md:w-[200px] lg:w-[230px] h-auto"
        />

        {/* Subtitle */}
        <p className="font-sans font-semibold text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] capitalize mb-8 md:mb-10">
          Straight From The Sippers
        </p>

        {/* Reviews carousel */}
        <div className="w-full max-w-[900px] relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:-left-12 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-navy transition-colors shadow-md"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Quotes area */}
          <div className="w-full max-w-[800px] mx-auto relative flex flex-col px-12 md:px-0">
            <div className="self-start">
              <Image
                src="/images/quote-open.svg"
                alt="Opening quote"
                width={35}
                height={30}
                className="w-[25px] md:w-[35px] h-auto"
              />
            </div>

            {/* Quote text with transition */}
            <div className="min-h-[120px] md:min-h-[100px] flex items-center">
              <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] text-center max-w-[720px] mx-auto py-4 md:py-6 transition-opacity duration-500">
                {reviews[currentIndex].text}
              </p>
            </div>

            <div className="self-end">
              <Image
                src="/images/quote-close.svg"
                alt="Closing quote"
                width={35}
                height={30}
                className="w-[25px] md:w-[35px] h-auto"
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-12 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-navy transition-colors shadow-md"
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
        <div className="flex items-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange w-6 md:w-8"
                  : "bg-navy/30 hover:bg-navy/50"
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-10 flex flex-col items-center text-center">
        <h2 className="font-sans font-medium text-white text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.011em] max-w-[800px]">
          Now booking February & March with limited dates available
        </h2>

        <a
          href="#book"
          className="mt-4 md:mt-5 font-sans font-medium text-navy bg-white text-base md:text-lg leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2 md:py-2.5 hover:bg-white/90 transition-colors"
        >
          Secure Your Date Now
        </a>
      </div>
    </section>
  );
}

function BookingForm() {
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
          <div className="flex flex-col justify-center">
            <Image
              src="/images/lets-chat-heading.svg"
              alt="Let's Chat"
              width={200}
              height={40}
              className="w-[150px] md:w-[180px] lg:w-[200px] h-auto mb-4 md:mb-6"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <h2 className="font-sans font-medium text-navy text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.011em] mb-4 md:mb-6">
              Book Your Event
            </h2>
            <p className="font-sans font-normal text-navy text-base md:text-[18px] lg:text-[22px] leading-[1.6] tracking-[-0.011em] mb-6 md:mb-8">
              Ready to elevate your next event? Fill out the form and Jaymi will get back to you within 24-48 hours to discuss your vision and create a custom experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-sans text-navy text-base md:text-lg">hello@southboundsips.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-sans text-navy text-base md:text-lg">Serving Georgia & Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
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
                className="w-full font-sans font-medium text-white bg-orange text-base md:text-lg leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 py-3 md:py-4 hover:bg-navy transition-colors"
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Content that scrolls over the hero */}
      <div className="relative z-10 bg-transparent">
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
