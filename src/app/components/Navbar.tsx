import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  activePage = "home",
}: {
  activePage?: "home" | "about" | "services" | "contact";
}) {
  const isHome = activePage === "home";

  return (
    <header className="w-full bg-white z-50">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-5">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="South Bound Sips Logo"
            width={80}
            height={78}
            className="object-contain w-14 h-14 md:w-[80px] md:h-[78px]"
          />
        </Link>
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
          <Link
            href="/"
            className={`hidden md:inline font-sans font-medium text-base lg:text-[28px] leading-[1.5] tracking-[-0.011em] ${
              activePage === "home" ? "text-orange" : "text-navy"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hidden md:inline font-sans font-medium text-base lg:text-[28px] leading-[1.5] tracking-[-0.011em] ${
              activePage === "about" ? "text-orange" : "text-navy"
            }`}
          >
            About
          </Link>
          <Link
            href={isHome ? "#services" : "/#services"}
            className={`hidden md:inline font-sans font-medium text-base lg:text-[28px] leading-[1.5] tracking-[-0.011em] ${
              activePage === "services" ? "text-orange" : "text-navy"
            }`}
          >
            Services
          </Link>
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className={`hidden md:inline font-sans font-medium text-base lg:text-[28px] leading-[1.5] tracking-[-0.011em] ${
              activePage === "contact" ? "text-orange" : "text-navy"
            }`}
          >
            Contact
          </Link>
          <Link
            href={isHome ? "#book" : "/#book"}
            className="font-sans font-medium text-white bg-orange text-sm md:text-base lg:text-[28px] leading-[1.5] tracking-[-0.011em] px-5 md:px-8 py-1.5 rounded-full"
          >
            Book
          </Link>
        </div>
      </nav>
    </header>
  );
}
