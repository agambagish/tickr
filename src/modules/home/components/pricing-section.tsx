import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="layout-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Choose the plan that fits your event size and needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for small events</CardDescription>
              <div className="mt-4">
                <span className="font-bold text-4xl">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Up to 500 tickets/month
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Email invitations
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Email support
                </li>
              </ul>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="relative border-2 border-emerald-500">
            <div className="-top-3 -translate-x-1/2 absolute left-1/2 transform">
              <span className="rounded-full bg-emerald-600 px-3 py-1 font-medium text-sm text-white">
                Most Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="font-bold text-4xl">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Up to 5,000 tickets/month
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  API access
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Custom branding
                </li>
              </ul>
              <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="font-bold text-4xl">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Unlimited tickets
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  White-label solution
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-3 h-4 w-4 text-emerald-600" />
                  SLA guarantee
                </li>
              </ul>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
