import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ───────────────────────── Team Member Card ──────────────────────────── */
function TeamMemberCard({
  name,
  role,
  imageSrc,
  imageWidth,
  imageHeight,
}: {
  name: string;
  role: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={`${name} - ${role}`}
        width={imageWidth}
        height={imageHeight}
        className="object-contain w-full h-auto"
      />
      <p
        className="text-navy leading-[1.1] tracking-tight mt-4 text-xl md:text-2xl lg:text-3xl"
        style={{ fontFamily: "'Badhorse', cursive" }}
      >
        {name}
      </p>
      <p className="font-sans font-medium text-orange text-xs md:text-sm lg:text-base leading-[1.5] tracking-wide uppercase mt-1">
        {role}
      </p>
    </div>
  );
}

/* ════════════════════════════ HERO SECTION ════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[90vh]">
          {/* Left: text content */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center px-4 md:px-8 lg:px-12 xl:pl-[calc((100vw-1440px)/2+48px)] pt-32 pb-12 lg:py-0">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block">
              About Us
            </span>
            <h1
              className="text-navy text-3xl md:text-5xl lg:text-[64px] xl:text-[78px] leading-[0.95] tracking-tight mt-4 lg:mt-6 whitespace-nowrap"
              style={{ fontFamily: "'Badhorse', cursive" }}
            >
              SouthBound sips
            </h1>
            <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] mt-6 lg:mt-8 max-w-[480px]">
              We bring the bar to you — crafting unforgettable mobile cocktail
              experiences for weddings, parties, and corporate events across the
              South.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 lg:mt-10">
              <a
                href="/#book"
                className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base lg:text-lg rounded-full px-7 py-2.5 hover:bg-orange/90 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="#team"
                className="inline-flex items-center justify-center font-sans font-medium text-navy border-2 border-navy/20 text-base lg:text-lg rounded-full px-7 py-2.5 hover:border-navy/40 transition-colors"
              >
                Meet the Team
              </a>
            </div>
          </div>

          {/* Right: hero image — bleeds to viewport edge */}
          <div className="w-full lg:w-[58%] relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[90vh]">
              <Image
                src="/images/about-hero.png"
                alt="South Bound Sips experience"
                fill
                className="object-cover object-center lg:rounded-bl-[60px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════ HI I'M JAYMI SECTION ═══════════════════════ */
function HiImJaymiSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgroundfiller.png"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[rgba(26,58,92,0.75)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Jaymi photo with arch shape */}
          <div className="w-full lg:w-[42%] flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="overflow-hidden rounded-t-[200px] rounded-b-[20px]">
                <Image
                  src="/images/jaymi-team.png"
                  alt="Jaymi - Owner of South Bound Sips"
                  width={509}
                  height={636}
                  className="object-cover w-full"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -inset-3 rounded-t-[212px] rounded-b-[28px] border-2 border-white/20 -z-10" />
            </div>
          </div>

          {/* Right: text content */}
          <div className="w-full lg:w-[53%]">
            {/* Small label */}
            <span className="font-sans font-medium text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.05em] uppercase">
              The Woman Behind The Bar
            </span>

            {/* Name in script font */}
            <h2
              className="font-serif text-white text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight mt-2 lg:mt-3"
            >
              Hi, I&apos;m Jaymi
            </h2>

            <p className="font-sans font-normal text-white/90 mt-6 lg:mt-8 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[600px]">
              As the proud owner of South Bound Sips, I pour my heart into every event. What started as a passion for mixology and bringing people together has grown into something truly special — a mobile bar experience built on warmth, creativity, and southern hospitality.
            </p>

            <p className="font-sans font-normal text-white/75 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[600px] mt-4 lg:mt-5">
              Whether it&apos;s your wedding day, a milestone birthday, or a corporate celebration, I&apos;m here to make sure the drinks are flowing and the vibes are unforgettable.
            </p>

            {/* What you get */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 lg:mt-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange mt-2 shrink-0" />
                <p className="font-sans font-medium text-white text-sm md:text-base lg:text-lg leading-[1.5]">
                  Full setup, service & cleanup
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange mt-2 shrink-0" />
                <p className="font-sans font-medium text-white text-sm md:text-base lg:text-lg leading-[1.5]">
                  Custom cocktail menus
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange mt-2 shrink-0" />
                <p className="font-sans font-medium text-white text-sm md:text-base lg:text-lg leading-[1.5]">
                  Licensed & insured
                </p>
              </div>
            </div>

            <a
              href="/#book"
              className="inline-flex items-center justify-center font-sans font-medium text-navy bg-white text-base md:text-lg lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 lg:px-10 py-2.5 lg:py-3 mt-10 lg:mt-12 hover:bg-orange hover:text-white transition-colors"
            >
              Let&apos;s Plan Your Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ OUR MISSION SECTION ═════════════════════════ */
function OurMissionSection() {
  return (
    <section id="mission" className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Centered heading block */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
            Why We Do It
          </span>
          <h2
            className="font-serif text-navy text-5xl md:text-6xl lg:text-[80px] leading-[1] tracking-tight"
          >
            Our Mission
          </h2>
        </div>

        {/* Content in a two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: large quote-style mission statement */}
          <div className="w-full lg:w-[48%]">
            <div className="relative">
              {/* Large decorative quote mark */}
              <span
                className="absolute -top-8 -left-2 lg:-top-12 lg:-left-4 text-orange/20 text-[120px] lg:text-[180px] leading-[1] select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <p className="font-sans font-semibold text-navy text-xl md:text-2xl lg:text-[28px] leading-[1.5] tracking-[-0.011em] relative z-10 pl-4 lg:pl-6">
                Fostering Community Through Unforgettable Moments
              </p>
            </div>

            <p className="font-sans font-normal text-navy/80 mt-6 lg:mt-8 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] pl-4 lg:pl-6 max-w-[650px]">
              Southbound Sips brings people together through unforgettable
              mobile bar experiences, from block parties to corporate galas and
              everything in between. We&apos;re not just pouring drinks,
              we&apos;re crafting moments that last long after the last cocktail.
            </p>

            <div className="pl-4 lg:pl-6 mt-8 lg:mt-10">
              <a
                href="/#book"
                className="inline-flex items-center justify-center font-sans font-medium text-white bg-navy text-base lg:text-lg rounded-full px-8 py-2.5 hover:bg-orange transition-colors"
              >
                Start Planning
              </a>
            </div>
          </div>

          {/* Right: image grid collage */}
          <div className="w-full lg:w-[48%]">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="relative aspect-[2/3] rounded-t-[100px] rounded-b-[20px] overflow-hidden">
                <Image
                  src="/images/image-26.png"
                  alt="South Bound Sips event setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="relative aspect-[2/3] rounded-t-[100px] rounded-b-[20px] overflow-hidden mt-10">
                <Image
                  src="/images/image-27.png"
                  alt="South Bound Sips serving"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SCALLOP EDGES ═══════════════════════════════ */
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

/* ═══════════════════════ OUR VALUES SECTION ══════════════════════════ */
function OurValuesSection() {
  const values = [
    {
      initial: "S",
      title: "Savoring Connections",
      body: "We believe in savoring every moment, fostering genuine connections, and turning each interaction into a lasting memory.",
    },
    {
      initial: "I",
      title: "Inclusive Atmosphere",
      body: "Our events welcome everyone to the table, creating an atmosphere where all feel valued and celebrated.",
    },
    {
      initial: "P",
      title: "Personalized Experiences",
      body: "Every experience is tailored to our guests, ensuring each moment with us is memorable and meaningful.",
    },
    {
      initial: "S",
      title: "Social Impact",
      body: "We\u2019re committed to making a lasting impact beyond our events through charitable initiatives and community engagement.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-sage">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
              What We Stand For
            </span>
            <h2 className="font-serif text-navy text-5xl md:text-6xl lg:text-[80px] leading-[1] tracking-tight">
              Our Values
            </h2>
          </div>
          <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[420px]">
            Four principles that spell out who we are — in every sip we serve.
          </p>
        </div>

        {/* Values rows */}
        <div className="flex flex-col">
          {values.map((value, i) => (
            <div key={i}>
              {/* Divider line */}
              <div className="h-px bg-navy/10" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 lg:py-10">
                {/* Number */}
                <span className="font-sans font-medium text-navy/20 text-sm md:text-base tracking-[0.1em] md:w-[60px] lg:w-[80px] shrink-0">
                  0{i + 1}
                </span>

                {/* Large letter */}
                <span className="font-serif text-orange text-[64px] md:text-[80px] lg:text-[100px] leading-[0.8] md:w-[100px] lg:w-[130px] shrink-0">
                  {value.initial}
                </span>

                {/* Title */}
                <h3 className="font-sans font-semibold text-navy text-xl md:text-2xl lg:text-[28px] leading-[1.2] tracking-[-0.01em] md:flex-1 md:px-6 lg:px-10">
                  {value.title}
                </h3>

                {/* Body */}
                <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] md:w-[320px] lg:w-[380px] shrink-0">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
          {/* Final divider */}
          <div className="h-px bg-navy/10" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ MEET THE TEAM SECTION ══════════════════════ */
function MeetTheTeamSection() {
  return (
    <section id="team" className="relative w-full py-28 lg:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading block */}
        <div className="text-center mb-6 lg:mb-8">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
            The People Behind The Pour
          </span>
          <h2 className="font-serif text-navy text-5xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-tight">
            Meet the Team
          </h2>
        </div>

        <p className="font-sans font-normal text-navy/70 text-base md:text-[18px] lg:text-[20px] leading-[1.6] tracking-[-0.011em] text-center max-w-[600px] mx-auto mb-14 lg:mb-20">
          The crew that makes every event feel like the best night out. Good drinks, great energy, and a whole lot of heart.
        </p>

        {/* Featured row: Jaymi center, flanked by two */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-end mb-5 lg:mb-7">
          <div className="md:mt-12">
            <TeamMemberCard
              name="Nohea M."
              role="Marketing Maven"
              imageSrc="/images/meettheteam/Group 55.png"
              imageWidth={586}
              imageHeight={520}
            />
          </div>
          <div>
            <TeamMemberCard
              name="Jaymi M."
              role="Owner & Head Bartender"
              imageSrc="/images/meettheteam/Group 54.png"
              imageWidth={525}
              imageHeight={411}
            />
          </div>
          <div className="md:mt-12">
            <TeamMemberCard
              name="Alexis R."
              role="Quiet Capital King"
              imageSrc="/images/meettheteam/Group 53.png"
              imageWidth={564}
              imageHeight={435}
            />
          </div>
        </div>

        {/* Bottom row: two remaining members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 max-w-[58%] mx-auto">
          <TeamMemberCard
            name="Rhodie R."
            role="Expert Mocktail Taster"
            imageSrc="/images/meettheteam/Group 52.png"
            imageWidth={493}
            imageHeight={442}
          />
          <TeamMemberCard
            name="Jay M."
            role={'Bar "Baddie Dad" Bartender'}
            imageSrc="/images/meettheteam/Group 51.png"
            imageWidth={617}
            imageHeight={448}
          />
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div className="relative z-10 mt-20 lg:mt-32 w-full h-[60px] lg:h-[109px] overflow-hidden">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

/* ════════════════════════════ PAGE EXPORT ════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar activePage="about" />
      <HeroSection />
      <HiImJaymiSection />
      <OurMissionSection />
      <ScallopTop />
      <OurValuesSection />
      <ScallopBottom />
      <MeetTheTeamSection />
      <Footer />
    </main>
  );
}
