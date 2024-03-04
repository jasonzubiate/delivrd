"use client";

import Image from "next/image";
import { redirectToLabel } from "@/utils";
import { LabelCardProps } from "@/types";

export default function LabelCard({ label }: LabelCardProps) {
  return (
    <div className="label-card" onClick={() => redirectToLabel(label)}>
      <h4>{label.name}</h4>

      <div className="label-card-img">
        <Image
          src={label.img}
          alt={label.name}
          fill
          priority
          sizes="(max-width: 1024px) 150px, 200px"
        />
      </div>

      <div className="label-card-details">
        <p className="uppercase ">{label.owner}</p>
        <p className="text-ashen-taupe ">Accepting</p>
      </div>
    </div>
  );
}
