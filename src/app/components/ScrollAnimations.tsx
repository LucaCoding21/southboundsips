"use client";

import { useEffect } from "react";

const SCROLL_CLASSES = [
  "scroll-fade-up",
  "scroll-fade-in",
  "scroll-slide-left",
  "scroll-slide-right",
  "scroll-scale-in",
];

export default function ScrollAnimations() {
  useEffect(() => {
    const selector = SCROLL_CLASSES.map((c) => `.${c}`).join(", ");
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
