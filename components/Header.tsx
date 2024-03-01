import Link from "next/link";
import { GeistMono } from "geist/font/mono";

export default function Header() {
  return (
    <header className="flex justify-between w-full p-4 md:p-5 fixed">
      <Link href={"/"} className="uppercase text-sm text-demo-smoke">
        Delivrd
      </Link>
      <p className={`${GeistMono.className} uppercase text-sm text-demo-smoke`}>
        (Scroll 0%)
      </p>
    </header>
  );
}
