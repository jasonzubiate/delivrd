"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function LenisContext({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisContext;
