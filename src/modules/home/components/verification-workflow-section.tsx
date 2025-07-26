import Image from "next/image";

import { QrCodeIcon } from "lucide-react";

export function VerificationWorkflowSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
      <div className="layout-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
            Seamless ticket verification workflow
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From creation to verification, manage your entire ticketing process
            with complete control over who can verify entries.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <span className="font-semibold text-emerald-600 text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Create & Distribute Tickets
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Generate QR tickets for your event and send them via email
                      to attendees. Each ticket contains unique verification
                      data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <span className="font-semibold text-sm text-teal-600">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Manage Verification Permissions
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Grant verification access to team members, volunteers, or
                      security staff. Control who can validate tickets at entry
                      points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <span className="font-semibold text-orange-600 text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Scan & Verify
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Use any smartphone or tablet to scan QR codes. Get instant
                      verification results with attendee details and entry
                      status.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <span className="font-semibold text-purple-600 text-sm">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Real-time Updates
                    </h3>
                    <p className="mt-2 text-gray-600">
                      All verification activities sync instantly across devices.
                      Track attendance in real-time and prevent duplicate
                      entries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="QR Ticket Verification Process"
                  height={600}
                  width={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="-bottom-6 -left-6 absolute rounded-xl border bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="font-medium text-gray-900 text-sm">
                      Ticket Verified
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 text-xs">
                    John Doe - VIP Access
                  </p>
                </div>
                <div className="-top-6 -right-6 absolute rounded-xl bg-emerald-600 p-4 text-white shadow-lg">
                  <div className="flex items-center space-x-2">
                    <QrCodeIcon className="h-5 w-5" />
                    <span className="font-medium text-sm">Live Scanning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title className="hidden">_</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Team Collaboration
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Add multiple verifiers and manage their access levels for
                different event areas.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <svg
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title className="hidden">_</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Instant Validation
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Get immediate feedback on ticket validity with clear visual and
                audio confirmation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title className="hidden">_</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                Offline Capable
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Continue verifying tickets even without internet connection.
                Sync when back online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
