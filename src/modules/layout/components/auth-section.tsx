import Link from "next/link";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function AuthSection() {
  return (
    <div className="flex space-x-4">
      <SignedIn>
        <ClerkLoading>
          <Skeleton className="size-8" />
          <Skeleton className="h-8 w-24" />
        </ClerkLoading>
        <ClerkLoaded>
          <Button variant="ghost" className="size-8">
            <UserButton />
          </Button>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ size: "sm" }),
              "w-24 bg-emerald-600 hover:bg-emerald-700",
            )}
          >
            Dashboard
          </Link>
        </ClerkLoaded>
      </SignedIn>
      <SignedOut>
        <ClerkLoading>
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-24" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignInButton mode="modal">
            <Button variant="outline" size="sm" className="w-16">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button
              size="sm"
              className="w-24 bg-emerald-600 hover:bg-emerald-700"
            >
              Get Started
            </Button>
          </SignUpButton>
        </ClerkLoaded>
      </SignedOut>
    </div>
  );
}
