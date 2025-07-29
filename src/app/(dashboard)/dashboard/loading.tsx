import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="layout-wrapper flex-1 p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Skeleton className="h-[150px] w-full" />
          <Skeleton className="h-[150px] w-full" />
          <Skeleton className="h-[150px] w-full" />
        </div>
      </div>
    </main>
  );
}
