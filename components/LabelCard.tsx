"use client";

import Image from "next/image";
import { redirectToLabel } from "@/utils";
import { LabelCardProps } from "@/types";

export default function LabelCard({ label }: LabelCardProps) {
  return (
    <a className="label-card" onClick={() => redirectToLabel(label)}>
      <h4 className="text-lg lg:text-[48px] uppercase font-semibold lg:tracking-tight">
        {label.name}
      </h4>

      <div className="label-card-img">
        <Image src={label.img} alt={label.name} quality={100} fill />
      </div>

      <div className="flex flex-col items-end text-[10px] lg:text-[14px] leading-none lg:leading-tight">
        <p className="uppercase ">{label.owner}</p>
        <p className="text-[#8e8b86] ">Accepting</p>
      </div>
    </a>
  );
}
