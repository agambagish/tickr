import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 sm:py-32">
      <div className="layout-wrapper relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight sm:text-6xl">
            QR Ticketing
            <span className="text-emerald-600"> Infrastructure</span>
            <br />
            Made Simple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg leading-8">
            Create, manage, and distribute QR-based tickets for your events.
            Send invitations via email and provide seamless entry experiences
            for your attendees.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Free Trial
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
          <div className="mt-16">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Tickr Dashboard"
              height={400}
              width={800}
              className="mx-auto rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
