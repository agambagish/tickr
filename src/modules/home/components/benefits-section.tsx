import Image from "next/image";

import { CheckIcon } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="layout-wrapper">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
              Why choose Tickr?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Built for modern events, Tickr provides the infrastructure you
              need to create professional ticketing experiences.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-3">
                <CheckIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Lightning Fast Setup
                  </h3>
                  <p className="text-gray-600">
                    Get your ticketing system up and running in minutes, not
                    days.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600">
                    Bank-level security with encrypted QR codes and fraud
                    detection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Handle events of any size, from intimate gatherings to
                    massive conferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Mobile QR Scanner"
              height={500}
              width={600}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
