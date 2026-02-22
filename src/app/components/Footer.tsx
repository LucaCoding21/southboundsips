import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-navy pt-16 md:pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Mobile Footer */}
        <div className="md:hidden flex flex-col items-center text-center gap-8 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/southbound-logo.png"
              alt="Southbound Sips Logo"
              width={80}
              height={77}
              className="w-16 h-auto mb-4"
            />
            <p className="font-sans font-normal text-white/80 text-sm leading-[1.6] tracking-[-0.011em] mb-6 max-w-[300px]">
              Mobile bartending services bringing craft cocktails and unforgettable experiences to your events across Georgia and beyond.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/southboundsips/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/southboundsips"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links in two columns */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-[320px]">
            <div className="text-center">
              <h4 className="font-sans font-medium text-white text-base mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Home</a></li>
                <li><a href="/about" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">About</a></li>
                <li><a href="/services" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Services</a></li>
                <li><a href="/faq" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">FAQ</a></li>
                <li><a href="/contact" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-medium text-white text-base mb-3">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services#packages" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Mobile Bar Packages</a></li>
                <li><a href="/services#bartending" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Bartender Services</a></li>
                <li><a href="/services#rentals" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Add-ons & Rentals</a></li>
                <li><a href="/contact" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Booking</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3">
            <a href="mailto:events@southboundsips.com" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">
              events@southboundsips.com
            </a>
            <span className="font-sans text-white/80 text-sm">
              Serving Georgia & Surrounding Areas
            </span>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 md:mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/southbound-logo.png"
              alt="Southbound Sips Logo"
              width={80}
              height={77}
              className="w-16 h-auto mb-4"
            />
            <p className="font-sans font-normal text-white/80 text-sm leading-[1.6] tracking-[-0.011em] mb-6">
              Mobile bartending services bringing craft cocktails and unforgettable experiences to your events across Georgia and beyond.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/southboundsips/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/southboundsips"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">About</a>
              </li>
              <li>
                <a href="/services" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Services</a>
              </li>
              <li>
                <a href="/faq" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services#packages" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Mobile Bar Packages</a>
              </li>
              <li>
                <a href="/services#bartending" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Bartender Services</a>
              </li>
              <li>
                <a href="/services#rentals" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Add-ons & Rentals</a>
              </li>
              <li>
                <a href="/contact" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">Booking</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:events@southboundsips.com" className="font-sans text-white/80 text-sm hover:text-orange transition-colors">
                  events@southboundsips.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-sans text-white/80 text-sm">
                  Serving Georgia &<br />Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans font-normal text-white/60 text-sm leading-[1.6] tracking-[-0.011em] text-center md:text-left">
            &copy; {new Date().getFullYear()} Southbound Sips. All rights reserved.
          </p>
          <a href="https://cloverfield.studio/" target="_blank" rel="noopener noreferrer" className="font-sans text-white/40 text-xs hover:text-white/60 transition-colors">
            Built with care by Cloverfield
          </a>
        </div>
      </div>
    </footer>
  );
}
