import { Oswald } from "next/font/google";
import Link from "next/link";

import { TicketsIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const logoFont = Oswald({
  subsets: ["latin"],
});

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="layout-wrapper py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <TicketsIcon className="h-6 w-6 text-emerald-600" />
              <span
                className={cn(
                  "font-bold text-gray-900 text-xl",
                  logoFont.className,
                )}
              >
                Tickr
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Modern QR ticketing infrastructure for events of all sizes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Tickr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
