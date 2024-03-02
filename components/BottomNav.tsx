"use client";

import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

export default function BottomNav() {
  return (
    <Link
      href={"/#labels"}
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 flex items-center gap-2 py-2 px-3 text-sm rounded-md transparent-button font-light"
    >
      <span>View featured labels</span>
      <GoArrowDown size={16} className="icon" />
    </Link>
  );
}
