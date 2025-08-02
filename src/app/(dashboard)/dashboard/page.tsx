import { Calendar, QrCode, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="layout-wrapper flex-1 p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Events
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">3</div>
              <p className="text-muted-foreground text-xs">
                2 active, 1 expired
              </p>
            </CardContent>
          </Card>
          <Card className="h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Tickets
              </CardTitle>
              <QrCode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">475</div>
              <p className="text-muted-foreground text-xs">
                425 active, 50 expired
              </p>
            </CardContent>
          </Card>
          <Card className="h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Revenue
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">$23,750</div>
              <p className="text-muted-foreground text-xs">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
