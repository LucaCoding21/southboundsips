import Image from "next/image";
import Navbar from "./components/Navbar";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-4 md:pt-8 pb-8 md:pb-12 flex flex-col items-center">
        {/* MEET JAYMI + the owner of */}
        <div className="flex flex-col items-center mb-2">
          <Image
            src="/images/meet-jaymi-heading.svg"
            alt="Meet Jaymi"
            width={330}
            height={50}
            className="w-[180px] md:w-[260px] lg:w-[330px] h-auto"
          />
          <Image
            src="/images/the-owner-of.svg"
            alt="the owner of"
            width={112}
            height={16}
            className="mt-1 md:mt-2 w-[70px] md:w-[90px] lg:w-[112px] h-auto"
          />
        </div>

        {/* SOUTHBOUND title */}
        <div className="w-full flex justify-center -mt-2 md:-mt-4">
          <Image
            src="/images/southbound-title.png"
            alt="Southbound"
            width={1280}
            height={325}
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Jaymi photo composite */}
        <div className="relative -mt-16 md:-mt-28 lg:-mt-36 z-20">
          <Image
            src="/images/jaymi-composite.png"
            alt="Jaymi - Owner of South Bound Sips"
            width={670}
            height={406}
            className="object-contain w-[300px] md:w-[500px] lg:w-[670px] h-auto"
          />
        </div>

        {/* SIPS title */}
        <div className="-mt-10 md:-mt-16 lg:-mt-20 z-10">
          <Image
            src="/images/sips-title.png"
            alt="Sips"
            width={370}
            height={233}
            className="object-contain w-[180px] md:w-[280px] lg:w-[370px] h-auto"
          />
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
        height: "60px",
        background:
          "radial-gradient(ellipse 72px 60px at center bottom, #CFE2D6 99%, transparent 100%)",
        backgroundSize: "144px 60px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function ScallopBottom() {
  return (
    <div
      className="w-full relative z-10"
      style={{
        height: "40px",
        background:
          "radial-gradient(ellipse 72px 40px at center top, #CFE2D6 99%, transparent 100%)",
        backgroundSize: "144px 40px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function BehindTheBarSection() {
  return (
    <section id="about" className="relative w-full bg-sage overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Behind The Bar heading */}
        <div className="flex justify-center mb-8 md:mb-10">
          <Image
            src="/images/behind-the-bar-heading.svg"
            alt="Behind The Bar"
            width={350}
            height={52}
            className="w-[250px] md:w-[300px] lg:w-[350px] h-auto"
          />
        </div>

        {/* Mobile: single column / Desktop: 3-column grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">
          {/* Left column - images */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
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
          </div>

          {/* Center column - text content */}
          <div className="lg:col-span-4 flex flex-col items-center gap-4 md:gap-6 pt-4">
            <Image
              src="/images/decorative-group.svg"
              alt="Your Event's Favourite Bartender"
              width={500}
              height={29}
              className="w-[280px] md:w-[360px] lg:w-[400px] h-auto"
            />
            <p className="font-sans font-normal text-navy text-lg md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] text-center">
              Lorem ipsum dolor sit amet consectetur. Lobortis semper sit
              sodales elit tellus nec nibh. Velit varius dui in sagittis nulla
              pellentesque id tellus morbi. Cras dignissim lobortis aliquet
              fermentum montes. Mi odio tortor eget tristique.
            </p>
            <a
              href="#book"
              className="mt-2 md:mt-4 font-sans font-medium text-orange text-base md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize border-2 border-orange rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange hover:text-white transition-colors"
            >
              Reserve Your Spot
            </a>
          </div>

          {/* Right column - team photo */}
          <div className="lg:col-span-4">
            <Image
              src="/images/jaymi-team.png"
              alt="Jaymi and team"
              width={509}
              height={636}
              className="rounded-[10px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileBarSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/93" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 items-stretch md:min-h-[600px]">
          {/* Left - Mobile bar image */}
          <div className="relative min-h-[300px] md:min-h-0">
            <Image
              src="/images/mobile-bar-2d1ce6.png"
              alt="The Mobile Bar"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 py-10 md:py-16">
            <Image
              src="/images/the-mobile-bar-heading.svg"
              alt="The Mobile Bar"
              width={350}
              height={53}
              className="w-[260px] md:w-[300px] lg:w-[350px] h-auto"
            />

            <h3 className="font-sans font-medium text-orange text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize mt-4 md:mt-6">
              Bringing the experience to you
            </h3>

            <p className="font-sans font-normal text-navy text-lg md:text-[24px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] mt-3 md:mt-4">
              Lorem ipsum dolor sit amet consectetur. Lobortis semper sit
              sodales elit tellus nec nibh. Velit varius dui in sagittis nulla
              pellentesque id tellus morbi. Cras dignissim lobortis aliquet
              fermentum montes. Mi odio tortor eget tristique.
            </p>

            <div className="mt-6 md:mt-8">
              <a
                href="#services"
                className="inline-block font-sans font-medium text-white bg-orange text-base md:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-orange/90 transition-colors"
              >
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChooseExperienceStrip() {
  return (
    <div className="w-full bg-navy py-4 md:py-6 overflow-hidden">
      <div className="flex items-center gap-4 md:gap-8 justify-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src="/images/choose-your-experience.svg"
            alt="Choose Your Experience"
            width={260}
            height={25}
            className="flex-shrink-0 w-[160px] md:w-[200px] lg:w-[260px] h-auto"
          />
        ))}
      </div>
    </div>
  );
}

function WhatIOffer() {
  return (
    <section id="services" className="relative w-full bg-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* What I Offer heading */}
        <Image
          src="/images/what-i-offer-heading.svg"
          alt="What I Offer"
          width={280}
          height={53}
          className="mb-3 md:mb-4 w-[200px] md:w-[240px] lg:w-[280px] h-auto"
        />

        {/* Choose Your Experience subtitle */}
        <Image
          src="/images/choose-your-experience.svg"
          alt="Choose Your Experience"
          width={260}
          height={25}
          className="mb-3 md:mb-4 w-[180px] md:w-[220px] lg:w-[260px] h-auto"
        />

        {/* Description */}
        <p className="font-sans font-normal text-navy text-lg md:text-[24px] lg:text-[28px] leading-[1.5] tracking-[-0.011em] max-w-[900px] mb-10 md:mb-16">
          Whether you need the full experience or just a helping hand behind the
          bar, Jaymi got you covered.
        </p>

        {/* Drink cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-20 items-end">
          {/* Fan Fave */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
              <Image
                src="/images/star-badge.png"
                alt=""
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-[22px] leading-[1.03] tracking-[-0.011em] text-center">
                Fan Fave
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px]">
              <Image
                src="/images/drink-fan-fave.png"
                alt="Fan Fave drink"
                width={449}
                height={607}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Easy Breezy */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-6 right-0 z-20 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
              <Image
                src="/images/star-badge.png"
                alt=""
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-[22px] leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"Easy\nBreezy"}
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px]">
              <Image
                src="/images/drink-easy-breezy-310de1.png"
                alt="Easy Breezy drink"
                width={450}
                height={607}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* More Please */}
          <div className="relative flex flex-col items-center md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-none">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
              <Image
                src="/images/star-badge.png"
                alt=""
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg md:text-[22px] leading-[1.03] tracking-[-0.011em] text-center whitespace-pre-line">
                {"More\nPlease"}
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-t-[160px] md:rounded-t-[214px] rounded-b-[20px]">
              <Image
                src="/images/drink-more-please.png"
                alt="More Please drink"
                width={449}
                height={608}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-8">
          <div className="text-center">
            <h3 className="font-sans font-medium text-navy text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize">
              Mobile Bar Packages
            </h3>
            <p className="font-sans font-normal text-orange text-base md:text-[20px] lg:text-[24px] leading-[1.5] tracking-[-0.011em] mt-1 md:mt-2">
              Starting from 260/Hr
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-sans font-medium text-navy text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize">
              Bartender Services
            </h3>
            <p className="font-sans font-normal text-orange text-base md:text-[20px] lg:text-[24px] leading-[1.5] tracking-[-0.011em] mt-1 md:mt-2">
              Starting from 180/Hr
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-sans font-medium text-navy text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize">
              Add-ons & Rentals
            </h3>
            <p className="font-sans font-normal text-orange text-base md:text-[20px] lg:text-[24px] leading-[1.5] tracking-[-0.011em] mt-1 md:mt-2">
              Starting at $25 Per Event
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-10 md:mb-16">
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

        {/* Description text */}
        <p className="font-sans font-normal text-navy text-lg md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] text-center max-w-[720px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Lobortis semper sit sodales
          elit tellus nec nibh. Velit varius dui in sagittis nulla pellentesque
          id tellus morbi. Cras dignissim lobortis aliquet fermentum montes. Mi
          odio tortor eget tristique.
        </p>
      </div>
    </section>
  );
}

function KindWordsSection() {
  return (
    <section className="relative w-full bg-sage py-12 md:py-16">
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
        <p className="font-sans font-normal text-orange text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize mb-8 md:mb-10">
          Straight From The Sippers
        </p>

        {/* Quotes area */}
        <div className="w-full max-w-[800px] relative min-h-[140px] md:min-h-[180px] flex flex-col justify-between">
          <div className="self-start">
            <Image
              src="/images/quote-open.svg"
              alt="Opening quote"
              width={50}
              height={43}
              className="w-[35px] md:w-[50px] h-auto"
            />
          </div>

          <div className="flex-1" />

          <div className="self-end">
            <Image
              src="/images/quote-close.svg"
              alt="Closing quote"
              width={50}
              height={43}
              className="w-[35px] md:w-[50px] h-auto"
            />
          </div>
        </div>

        {/* Attribution */}
        <p className="font-sans font-normal text-orange text-xl md:text-[26px] lg:text-[33px] leading-[1.5] tracking-[-0.011em] capitalize mt-3 md:mt-4">
          -  Lorem Ipsum
        </p>
      </div>
    </section>
  );
}

function BookingBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/booking-bg.png"
          alt=""
          fill
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[rgba(49,78,121,0.49)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 flex flex-col items-center text-center">
        <h2 className="font-sans font-medium text-white text-2xl md:text-[34px] lg:text-[42px] leading-[1.5] tracking-[-0.011em] max-w-[1000px]">
          Now booking February & March with limited dates available
        </h2>

        <a
          href="#book"
          className="mt-6 md:mt-8 font-sans font-medium text-navy bg-white text-base md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 md:px-10 py-2.5 md:py-3 hover:bg-white/90 transition-colors"
        >
          Secure Your Date Now
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ScallopTop />
      <BehindTheBarSection />
      <ScallopBottom />
      <MobileBarSection />
      <ChooseExperienceStrip />
      <WhatIOffer />
      <ScallopTop />
      <KindWordsSection />
      <BookingBanner />
    </main>
  );
}
