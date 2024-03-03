import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import ScrollIndicator from "./ScrollIndicator";

export default function Header() {
  return (
    <header className="flex justify-between w-full p-4 md:p-6 fixed">
      <Link href={"/"} className="uppercase text-sm text-demo-smoke">
        Delivrd
      </Link>
      <ScrollIndicator />
    </header>
  );
}
