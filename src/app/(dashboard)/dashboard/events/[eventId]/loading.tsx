import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Loading() {
  return (
    <main className="layout-wrapper flex-1 p-6">
      <Tabs defaultValue="a" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 lg:h-10 lg:grid-cols-5">
          <TabsTrigger value="a" className="text-xs lg:text-sm">
            Event Details
          </TabsTrigger>
          <TabsTrigger value="b" className="text-xs lg:text-sm">
            Ticket Design
          </TabsTrigger>
          <TabsTrigger value="c" className="text-xs lg:text-sm">
            Event Page
          </TabsTrigger>
          <TabsTrigger value="d" className="text-xs lg:text-sm">
            Guest Tickets
          </TabsTrigger>
          <TabsTrigger value="e" className="text-xs lg:text-sm">
            Analytics
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-3">
          <Skeleton className="h-64 w-full rounded-lg" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i.toString()} className="h-40 w-full rounded-lg" />
            ))}
          </div>
        </div>
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    </main>
  );
}
