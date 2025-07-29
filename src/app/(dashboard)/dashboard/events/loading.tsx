import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="layout-wrapper flex-1 p-6">
      <Skeleton className="h-[250px] w-full" />
    </main>
  );
}
