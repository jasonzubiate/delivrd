"use client";

import { GeistMono } from "geist/font/mono";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      const percentage = Math.round((scrollY / documentHeight) * 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formattedPercentage =
    scrollPercentage < 10 ? `0${scrollPercentage}` : scrollPercentage;

  return (
    <p className={`${GeistMono.className} uppercase text-sm text-demo-smoke`}>
      (Scroll {formattedPercentage}%)
    </p>
  );
}
