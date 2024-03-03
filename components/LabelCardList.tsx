"use client";
import { useEffect, useState } from "react";
import { fetchLabels } from "@/lib/apiMethods";
import LabelCard from "./LabelCard";
import { Label } from "@/types";

export default function LabelCardList() {
  const [labels, setLabels] = useState<Label[]>([]);

  useEffect(() => {
    async function getLabels() {
      const data = await fetchLabels();
      setLabels(data);
    }
    getLabels();
  }, []);

  return (
    <ul className="labels-list flex flex-col">
      {labels.map((label, index) => (
        <li key={index}>
          <LabelCard label={label} />
        </li>
      ))}
    </ul>
  );
}
