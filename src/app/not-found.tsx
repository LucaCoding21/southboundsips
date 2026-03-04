import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#c9e5d6] px-6 text-center">
        <Image
          src="/southboundsips/logo.png"
          alt="Southbound Sips"
          width={120}
          height={120}
          className="h-auto mb-8 opacity-80"
        />
        <p
          className="text-[#de7f34] mb-2"
          style={{ fontFamily: "var(--font-badhorse)", fontSize: "clamp(5rem, 15vw, 9rem)", lineHeight: 1 }}
        >
          404
        </p>
        <p className="text-navy text-lg md:text-xl mb-2 font-semibold tracking-wide">
          Page not found
        </p>
        <p className="text-navy/60 text-sm mb-10 max-w-xs">
          Looks like this page wandered off the trail. Let&rsquo;s get you back.
        </p>
        <Link
          href="/"
          className="px-8 py-3 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: "#2f4e7e" }}
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
