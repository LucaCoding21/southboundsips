import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

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
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch lg:min-h-[90vh]">
          {/* Left: text content */}
          <div className="animate-enter-up w-full lg:w-[42%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 md:px-8 lg:px-12 xl:pl-[calc((100vw-1440px)/2+48px)] pt-8 pb-10 lg:py-0">
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block">
              About Us
            </span>
            <h1
              className="text-navy text-3xl md:text-5xl lg:text-[64px] xl:text-[78px] leading-[0.95] tracking-tight mt-4 lg:mt-6 whitespace-nowrap"
              style={{ fontFamily: "'Badhorse', cursive" }}
            >
              SouthBound sips
            </h1>
            <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] mt-5 lg:mt-8 max-w-[480px]">
              We bring the bar to you, crafting unforgettable mobile cocktail
              experiences for weddings, parties, and corporate events across the
              South.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 lg:mt-10">
              <a
                href="/#book"
                className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base lg:text-lg rounded-full px-7 py-2.5 hover:bg-orange/90 active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Your Event
              </a>
              <a
                href="#team"
                className="inline-flex items-center justify-center font-sans font-medium text-navy border-2 border-navy/20 text-base lg:text-lg rounded-full px-7 py-2.5 hover:border-navy/40 active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Meet the Team
              </a>
            </div>
          </div>

          {/* Right: hero image — bleeds to viewport edge */}
          <div className="animate-enter-right w-full lg:w-[58%] relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[90vh]">
              <Image
                src="/images/about-hero.png"
                alt="Southbound Sips experience"
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left: Jaymi photo with arch shape */}
          <div className="scroll-slide-left w-full lg:w-[42%] flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[420px]">
              <div className="overflow-hidden rounded-t-[160px] md:rounded-t-[200px] rounded-b-[20px]">
                <Image
                  src="/images/jaymi-team.png"
                  alt="Jaymi - Owner of Southbound Sips"
                  width={509}
                  height={636}
                  className="object-cover w-full"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -inset-3 rounded-t-[172px] md:rounded-t-[212px] rounded-b-[28px] border-2 border-white/20 -z-10" />
            </div>
          </div>

          {/* Right: text content */}
          <div className="scroll-fade-up stagger-2 w-full lg:w-[53%]">
            {/* Small label */}
            <span className="font-sans font-medium text-orange text-lg md:text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.05em] uppercase">
              Your Event&apos;s Best Friend
            </span>

            {/* Name in script font */}
            <h2
              className="font-serif text-white text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight mt-2 lg:mt-3"
            >
              Hi, I&apos;m Jaymi
            </h2>

            <p className="font-sans font-normal text-white/90 mt-6 lg:mt-8 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[600px]">
              Island roots, cowboy boots. That&apos;s my vibe! From Hawaii to
              the heart of Texas, this mama traded leis for lassos and embraced
              the wild world of entrepreneurship. Catch me with a whiskey in
              hand, swapping lilikoi for sweet tea and toasting to this
              thrilling rodeo called life!
            </p>

            <p className="font-sans font-normal text-white/75 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[600px] mt-4 lg:mt-5">
              Life is wild and I&apos;m keeping my thoughts positive, my tribe
              tight, and my adventures out of the box. I&apos;m a single mom
              hustling through the same things every other millennial is
              navigating, but I see wonderful things ahead for me, my family,
              and this business venture.
            </p>

            <p className="font-sans font-normal text-white/75 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[600px] mt-4 lg:mt-5">
              Whether it&apos;s shaking up cocktails at your next event or
              just being a safe space to unwind, I&apos;ve got your back.
              Let&apos;s sip, chat, and unravel this wild journey together!
            </p>

            {/* What you get */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 lg:mt-10">
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
              className="inline-flex items-center justify-center font-sans font-medium text-navy bg-white text-base md:text-lg lg:text-[20px] leading-[1.5] tracking-[-0.011em] capitalize rounded-full px-8 lg:px-10 py-3 lg:py-3 mt-8 lg:mt-12 hover:bg-orange hover:text-white active:scale-95 transition-all hover:shadow-lg hover:-translate-y-0.5"
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
    <section id="mission" className="relative w-full pt-16 lg:pt-32 pb-24 lg:pb-48 bg-white overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Centered heading block */}
        <div className="scroll-fade-up text-center mb-12 lg:mb-20">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
            Why We Do It
          </span>
          <h2
            className="font-serif text-navy text-4xl md:text-6xl lg:text-[80px] leading-[1] tracking-tight"
          >
            Our Mission
          </h2>
        </div>

        {/* Content in a two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: large quote-style mission statement */}
          <div className="scroll-fade-up w-full lg:w-[48%] text-center lg:text-left">
            <div className="relative">
              {/* Large decorative quote mark */}
              <span
                className="hidden lg:block absolute -top-12 -left-4 text-orange/20 text-[180px] leading-[1] select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <p className="font-sans font-semibold text-navy text-xl md:text-2xl lg:text-[28px] leading-[1.5] tracking-[-0.011em] relative z-10 lg:pl-6">
                Fostering Community Through Unforgettable Moments
              </p>
            </div>

            <p className="font-sans font-normal text-navy/80 mt-6 lg:mt-8 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] lg:pl-6 max-w-[650px] mx-auto lg:mx-0">
              Southbound Sips brings people together through unforgettable
              mobile bar experiences, from block parties to corporate galas and
              everything in between. We&apos;re not just pouring drinks,
              we&apos;re crafting moments that last long after the last cocktail.
            </p>

          </div>

          {/* Right: image grid collage */}
          <div className="scroll-slide-right stagger-2 w-full lg:w-[48%]">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="relative aspect-[2/3] rounded-t-[100px] rounded-b-[20px] overflow-hidden">
                <Image
                  src="/images/image-26.png"
                  alt="Southbound Sips event setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="relative aspect-[2/3] rounded-t-[100px] rounded-b-[20px] overflow-hidden mt-10">
                <Image
                  src="/images/image-27.png"
                  alt="Southbound Sips serving"
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
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-32">
        {/* Header */}
        <div className="scroll-fade-up flex flex-col items-center md:items-start gap-6 mb-16 lg:mb-20 text-center md:text-left">
          <div>
            <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
              What We Stand For
            </span>
            <h2 className="font-serif text-navy text-4xl md:text-6xl lg:text-[80px] leading-[1] tracking-tight">
              Our Values
            </h2>
          </div>
          <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] max-w-[420px]">
            Four principles that spell out who we are, in every sip we serve.
          </p>
        </div>

        {/* Values rows */}
        <div className="flex flex-col">
          {values.map((value, i) => (
            <div key={i} className="scroll-fade-up" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
              {/* Divider line */}
              <div className="h-px bg-navy/10" />

              <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center gap-2 md:gap-0 py-8 lg:py-10">
                {/* Large letter */}
                <span className="font-serif text-orange text-[64px] md:text-[80px] lg:text-[100px] leading-[0.8] md:w-[100px] lg:w-[130px] shrink-0">
                  {value.initial}
                </span>

                {/* Title */}
                <h3 className="font-sans font-semibold text-navy text-xl md:text-2xl lg:text-[28px] leading-[1.2] tracking-[-0.01em] md:flex-1 md:px-6 lg:px-10">
                  {value.title}
                </h3>

                {/* Body */}
                <p className="font-sans font-normal text-navy/80 text-base md:text-[18px] lg:text-[20px] leading-[1.7] tracking-[-0.011em] md:w-[420px] lg:w-[500px] shrink-0">
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
    <section id="team" className="relative w-full pt-32 lg:pt-56 pb-20 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading block */}
        <div className="scroll-fade-up text-center mb-5 lg:mb-8">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-3">
            The People Behind The Pour
          </span>
          <h2 className="font-serif text-navy text-4xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-tight">
            Meet the Team
          </h2>
        </div>

        <p className="scroll-fade-up stagger-1 font-sans font-normal text-navy/70 text-base md:text-[18px] lg:text-[20px] leading-[1.6] tracking-[-0.011em] text-center max-w-[600px] mx-auto mb-10 lg:mb-20">
          The crew that makes every event feel like the best night out. Good drinks, great energy, and a whole lot of heart.
        </p>

        {/* Mobile: Single cohesive 2-col grid (Law of Proximity — team is one group) */}
        <div className="scroll-fade-up stagger-2 md:hidden">
          {/* Lead member full-width (Von Restorff — owner stands out) */}
          <div className="max-w-[75%] mx-auto mb-6">
            <TeamMemberCard
              name="Jaymi M."
              role="Owner & Head Bartender"
              imageSrc="/images/meettheteam/Group 54.png"
              imageWidth={525}
              imageHeight={411}
            />
          </div>
          {/* Rest of team in consistent 2-col grid */}
          <div className="grid grid-cols-2 gap-4">
            <TeamMemberCard
              name="Nohea M."
              role="Marketing Maven"
              imageSrc="/images/meettheteam/Group 55.png"
              imageWidth={586}
              imageHeight={520}
            />
            <TeamMemberCard
              name="Alexis R."
              role="Quiet Capital King"
              imageSrc="/images/meettheteam/Group 53.png"
              imageWidth={564}
              imageHeight={435}
            />
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
              imageWidth={740}
              imageHeight={537}
            />
          </div>
        </div>

        {/* Desktop: Original staggered layout */}
        <div className="hidden md:block">
          <div className="scroll-fade-up stagger-2 grid grid-cols-3 gap-5 lg:gap-7 items-end mb-5 lg:mb-7">
            <div className="mt-12">
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
            <div className="mt-12">
              <TeamMemberCard
                name="Alexis R."
                role="Quiet Capital King"
                imageSrc="/images/meettheteam/Group 53.png"
                imageWidth={564}
                imageHeight={435}
              />
            </div>
          </div>
          <div className="scroll-fade-up stagger-3 grid grid-cols-[1fr_1.4fr] gap-5 lg:gap-7 max-w-[80%] mx-auto">
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
              imageWidth={740}
              imageHeight={537}
            />
          </div>
        </div>
      </div>

    </section>
  );
}

/* ═══════════════════════════ GALLERY SECTION ═════════════════════════ */
function GallerySection() {
  const photos = [
    { src: "/images/mobile-bar-2d1ce6.png", alt: "The mobile bar", label: "The Bar", span: "col-span-2 row-span-2" },
    { src: "/images/cocktail1.png", alt: "Craft cocktail", label: "Craft Cocktails", span: "" },
    { src: "/images/image-26.png", alt: "Event setup", label: "Event Setup", span: "md:row-span-2" },
    { src: "/images/champagne-glasses.png", alt: "Champagne toast", label: "Celebrations", span: "" },
    { src: "/images/pitcher.png", alt: "Pitcher service", label: "Pitcher Service", span: "" },
    { src: "/images/jaymi-team.png", alt: "Jaymi and the team", label: "The Team", span: "col-span-2" },
    { src: "/images/image-27.png", alt: "Southbound Sips event", label: "Good Times", span: "" },
  ];

  return (
    <section className="relative w-full bg-navy pt-10 lg:pt-16 pb-16 lg:pb-28 overflow-hidden">

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="scroll-fade-up text-center mb-6 lg:mb-10">
          <span className="font-sans font-semibold text-orange text-sm md:text-base tracking-[0.15em] uppercase block mb-2">
            Moments We&apos;ve Made
          </span>
          <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-[64px] leading-[1] tracking-tight">
            The Gallery
          </h2>
        </div>

        {/* Bento grid */}
        <div className="scroll-fade-up stagger-2 grid grid-cols-2 md:grid-cols-4 auto-rows-[190px] sm:auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[300px] gap-2 md:gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-white/10 hover:ring-orange/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <span className="font-sans font-semibold text-white text-sm md:text-base tracking-wide drop-shadow-lg">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════ DECORATIVE FLOWER STRIP ══════════════════════ */
function FlowerStrip() {
  return (
    <div className="relative w-full h-[60px] overflow-hidden">
      <Image
        src="/images/backgroundfiller.png"
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );
}

/* ════════════════════════════ PAGE EXPORT ════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimations />
      <Navbar activePage="about" />
      <HeroSection />
      <HiImJaymiSection />
      <OurMissionSection />
      <ScallopTop />
      <OurValuesSection />
      <ScallopBottom />
      <MeetTheTeamSection />
      <GallerySection />
      <FlowerStrip />
      <Footer />
    </main>
  );
}
