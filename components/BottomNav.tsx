"use client";

import { GoArrowDown } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="fixed right-6 bottom-6 flex gap-2 items-center">
      <button className="flex items-center gap-2 py-2 px-3 text-sm rounded-md transparent-button">
        <span>View featured labels</span>
        <GoArrowDown size={16} className="icon" />
      </button>
      <button className="flex items-center p-2 rounded-md transparent-button">
        <FaInstagram size={20} className="icon" />
      </button>
    </div>
  );
}
