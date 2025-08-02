import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date,
  opts: {
    timeZone: string;
    dateStyle?: "full" | "long";
    timeZoneName?: "longGeneric" | "shortGeneric";
  },
) {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    timeZone: opts.timeZone,
    dateStyle: opts.dateStyle,
    timeStyle: "short",
  }).format(date);

  const abbr =
    new Intl.DateTimeFormat("en-IN", {
      timeZone: opts.timeZone,
      timeZoneName: opts.timeZoneName,
    })
      .formatToParts(date)
      .find((p) => p.type === "timeZoneName")?.value ?? "";

  return `${formatted} ${abbr}`;
}
