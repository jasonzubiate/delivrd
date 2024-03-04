"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const linkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const labelsSection = document.getElementById('labels');
      if (!labelsSection) return;

      const labelsSectionTop = labelsSection.getBoundingClientRect().top;
      setIsVisible(labelsSectionTop > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (!isVisible) {
      gsap.to(linkRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(linkRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Link
          href="/#labels"
          ref={linkRef}
          className="fixed right-4 bottom-4 md:right-6 md:bottom-6 flex items-center gap-2 py-2 px-3 text-sm rounded-md transparent-button font-light"
        >
          <span>View featured labels</span>
          <GoArrowDown size={16} className="icon" />
        </Link>
      )}
    </>
  );
}
