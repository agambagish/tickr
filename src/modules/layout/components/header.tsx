import { Oswald } from "next/font/google";
import Link from "next/link";

import { TicketsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logoFont = Oswald({
  subsets: ["latin"],
});

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="layout-wrapper flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2.5">
          <TicketsIcon className="h-8 w-8 text-emerald-600" />
          <span
            className={cn(
              "font-bold text-2xl text-gray-900",
              logoFont.className,
            )}
          >
            Tickr
          </span>
        </Link>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#features"
            className="font-medium text-gray-600 text-sm hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="font-medium text-gray-600 text-sm hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="font-medium text-gray-600 text-sm hover:text-gray-900"
          >
            About
          </Link>
          <div className="space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
