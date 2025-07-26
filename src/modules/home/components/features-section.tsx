import { MailIcon, QrCodeIcon, ShieldIcon, ZapIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="layout-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
            Everything you need for modern ticketing
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Powerful features designed to streamline your event management and
            enhance attendee experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <QrCodeIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="mt-2">QR Code Generation</CardTitle>
                <CardDescription>
                  Automatically generate unique QR codes for each ticket with
                  advanced security features.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <MailIcon className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="mt-2">Email Invitations</CardTitle>
                <CardDescription>
                  Send beautiful, branded email invitations with embedded
                  tickets directly to attendees.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <ZapIcon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="mt-2">Real-time Validation</CardTitle>
                <CardDescription>
                  Instant ticket validation at entry points with real-time
                  status updates and analytics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <ShieldIcon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="mt-2">Fraud Prevention</CardTitle>
                <CardDescription>
                  Advanced security measures to prevent ticket duplication and
                  unauthorized access.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                  <svg
                    className="h-6 w-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title className="hidden">_</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle className="mt-2">Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive insights into ticket sales, attendance patterns,
                  and event performance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                  <svg
                    className="h-6 w-6 text-cyan-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title className="hidden">_</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 2.676-1.148 5.216-2.728 7.418-4.622.469-.403.81-.875 1.029-1.378A11.959 11.959 0 0021 9c0-1.657-.329-3.237-.93-4.678z"
                    />
                  </svg>
                </div>
                <CardTitle className="mt-2">Verification Management</CardTitle>
                <CardDescription>
                  Scan QR tickets to verify entry. Grant verification
                  permissions to team members or handle verification yourself.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
