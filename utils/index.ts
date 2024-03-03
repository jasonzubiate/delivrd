import { Label } from "@/types";

export function redirectToLabel(label: Label) {
  if (label.url.startsWith("http://") || label.url.startsWith("https://")) {
    window.open(label.url, "_blank");
  } else if (label.url.includes("@")) {
    const subject = "Demo Submission: [Your Name] - [Song Title]";
    const emailUrl = `mailto:${label}?subject=${encodeURIComponent(subject)}`;
    window.location.href = emailUrl;
  } else {
    console.error("Invalid label format");
  }
}
