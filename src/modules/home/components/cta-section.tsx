import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-emerald-600 py-20 sm:py-32">
      <div className="layout-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-3xl text-white tracking-tight sm:text-4xl">
            Ready to revolutionize your events?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg">
            Join thousands of event organizers who trust Tickr for their
            ticketing infrastructure.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
