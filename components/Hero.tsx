"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });
    tl.from(ref1.current, {
      yPercent: 100,
      duration: 1,
    });
    tl.from(
      ref2.current,
      {
        yPercent: 100,
        duration: 1,
      },
      "-=90%"
    );
    tl.from(
      ref3.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=90%"
    );
  });

  return (
    <section id="hero" className="flex flex-col pt-24 md:pt-48 pb-32">
      <div className="flex flex-col gap-3">
        <h1 className="uppercase font-semibold leading-[85%] tracking-tighter px-4 md:px-6">
          <div className="mask">
            <span ref={ref1} className="block">
              One Submission
            </span>
          </div>
          <div className="mask">
            <span ref={ref2} className="block">
              From Discovery
            </span>
          </div>
        </h1>
        <video
          ref={ref3}
          src="/herovid.mp4"
          autoPlay
          loop
          muted
          className="h-[600px] md:h-screen w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
