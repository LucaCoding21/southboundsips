import Image from "next/image";
import Navbar from "../components/Navbar";

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
        className="object-contain w-full max-w-[320px] lg:max-w-[400px] h-auto"
      />
    </div>
  );
}

/* ════════════════════════════ HERO SECTION ════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Textured background with white overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative lg:min-h-[700px]">
          {/* Right: hero image — positioned absolutely on desktop, starts near top */}
          <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-full">
            <Image
              src="/images/about-hero.png"
              alt="South Bound Sips experience"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Left: text content — starts lower with generous top padding */}
          <div className="relative z-10 w-full lg:w-[45%] pt-8 lg:pt-[220px] pb-12 lg:pb-20">
            <span className="font-sans text-navy text-lg lg:text-[24px] leading-[1.5] tracking-[-0.011em] block">
              about
            </span>
            <h1 className="font-sans font-medium text-navy text-5xl md:text-6xl lg:text-[90px] leading-[1.1] tracking-[-0.011em] mt-3 lg:mt-6">
              SouthBound Sips
            </h1>
            <p className="font-sans font-normal text-navy text-lg md:text-xl lg:text-[30px] leading-[1.5] tracking-[-0.011em] mt-6 lg:mt-10 max-w-[702px]">
              Lorem ipsum dolor sit amet consectetur. Lobortis semper sit
              sodales elit tellus nec nibh. Velit varius dui in sagittis.
            </p>
            <a
              href="/#book"
              className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base md:text-lg lg:text-[30px] leading-[1.5] tracking-[-0.011em] capitalize rounded-[42px] px-8 lg:px-[39px] py-2.5 lg:py-[10px] mt-8 lg:mt-16 hover:bg-orange/90 transition-colors"
            >
              Reserve Your Spot
            </a>
          </div>

          {/* Mobile: hero image below text */}
          <div className="lg:hidden relative w-full aspect-[1236/902] mt-8 rounded-lg overflow-hidden">
            <Image
              src="/images/about-hero.png"
              alt="South Bound Sips experience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════ HI I'M JAYMI SECTION ═══════════════════════ */
function HiImJaymiSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with dark blue overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(49,78,121,0.88)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left: Jaymi & team photo */}
          <div className="w-full lg:w-[40%]">
            <Image
              src="/images/jaymi-team.png"
              alt="Jaymi and team"
              width={509}
              height={636}
              className="rounded-[10px] object-cover w-full max-w-[509px]"
            />
          </div>

          {/* Right: text content */}
          <div className="w-full lg:w-[55%] pt-4 lg:pt-8">
            <h2 className="font-sans font-medium text-white text-4xl md:text-5xl lg:text-[70px] leading-[1.1] tracking-[-0.011em]">
              Hi I&apos;m Jaymi
            </h2>
            <p className="font-sans font-normal text-white text-lg md:text-xl lg:text-[41px] leading-[1.5] tracking-[-0.011em] mt-6 lg:mt-8 max-w-[753px]">
              Lorem ipsum dolor sit amet consectetur. Lobortis semper sit
              sodales elit tellus nec nibh. Velit varius dui in sagittis nulla
              pellentesque id tellus morbi.
            </p>
            <a
              href="/#book"
              className="inline-flex items-center justify-center font-sans font-medium text-white bg-orange text-base md:text-lg lg:text-[30px] leading-[1.5] tracking-[-0.011em] capitalize rounded-[42px] px-8 lg:px-[39px] py-2.5 lg:py-[10px] mt-10 lg:mt-16 hover:bg-orange/90 transition-colors"
            >
              Reserve Your Spot
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
    <section className="relative w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left: image placeholder */}
          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-[751/607] bg-[#D9D9D9] rounded-[20px] overflow-hidden">
              {/* Placeholder — this is gray in Figma too (Rectangle 27) */}
            </div>
          </div>

          {/* Right: mission text */}
          <div className="w-full lg:w-[50%] pt-4 lg:pt-8">
            <h2 className="font-sans font-medium text-navy text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.011em]">
              Our Mission
            </h2>
            <p className="font-sans font-medium text-orange text-xl md:text-2xl lg:text-[40px] leading-[1.5] tracking-[-0.011em] mt-4 lg:mt-8">
              Fostering Community Through Unforgettable Moments
            </p>
            <p className="font-sans font-normal text-navy text-lg md:text-xl lg:text-[40px] leading-[1.5] tracking-[-0.011em] mt-3 lg:mt-4 max-w-[770px]">
              Southbound Sips brings people together through unforgettable
              mobile bar experiences, from block parties to corporate galas and
              everything in between. We&apos;re not just pouring drinks,
              we&apos;re crafting moments that last long after the last cocktail.
            </p>
          </div>
        </div>
      </div>
    </section>
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
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="font-sans font-medium text-navy text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.011em] text-center mb-10 lg:mb-20">
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-sage rounded-[39px] px-10 lg:px-12 pt-8 lg:pt-10 pb-10 lg:pb-12"
            >
              <span className="font-serif text-navy text-[80px] lg:text-[100px] leading-[1] block">
                {value.initial}
              </span>
              <h3 className="font-sans font-medium text-orange text-xl lg:text-[30px] leading-[1.5] tracking-[-0.011em] -mt-2 lg:-mt-3">
                {value.title}
              </h3>
              <p className="font-sans font-normal text-navy text-base lg:text-[25px] leading-[1.5] tracking-[-0.011em] mt-2 lg:mt-3">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ MEET THE TEAM SECTION ══════════════════════ */
function MeetTheTeamSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with white overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-bg-1a3da5.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/[0.93]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <h2 className="font-sans font-medium text-navy text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.011em] text-center mb-12 lg:mb-16">
          Meet the Team
        </h2>

        {/* Top row: Nohea, Jaymi, Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start mb-8 lg:mb-12">
          <div>
            <TeamMemberCard
              name="Nohea M."
              role="Marketing Maven"
              imageSrc="/images/team-nohea.png"
              imageWidth={1172}
              imageHeight={1266}
            />
          </div>
          <div className="lg:mt-16">
            <TeamMemberCard
              name="Jaymi M."
              role="Owner & Head Bartender"
              imageSrc="/images/team-jaymi.png"
              imageWidth={1049}
              imageHeight={1057}
            />
          </div>
          <div className="flex items-center justify-center lg:pt-24">
            <p className="font-sans font-normal text-navy text-lg lg:text-[40px] leading-[1.5] tracking-[-0.011em] text-center max-w-[454px]">
              Lorem ipsum dolor sit amet consectetur. Lobortis semper sit
              sodales elit tellus nec nibh. Velit varius dui in sagittis nulla
              pellentesque id tellus morbi.
            </p>
          </div>
        </div>

        {/* Bottom row: Alexis, Rhodie, Jay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          <TeamMemberCard
            name="Alexis R."
            role="Quiet Capital King"
            imageSrc="/images/team-alexis.png"
            imageWidth={1234}
            imageHeight={1121}
          />
          <TeamMemberCard
            name="Rhodie R."
            role="Expert Mocktail Taster"
            imageSrc="/images/team-rhodie.png"
            imageWidth={986}
            imageHeight={1109}
          />
          <TeamMemberCard
            name="Jay M."
            role={'Bar "Baddie Dad" Bartender'}
            imageSrc="/images/team-jay.png"
            imageWidth={1128}
            imageHeight={1107}
          />
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div className="relative z-10 mt-16 lg:mt-24 w-full h-[60px] lg:h-[109px] overflow-hidden">
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
      <OurValuesSection />
      <MeetTheTeamSection />
    </main>
  );
}
