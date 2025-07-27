"use client";

import { useState } from "react";

import { Calendar, MoreHorizontal, Plus, QrCode, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sampleEvents = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    ticketsIssued: 245,
    totalCapacity: 500,
    status: "active",
    revenue: "$12,250",
  },
  {
    id: 2,
    name: "Product Launch Event",
    date: "2024-02-28",
    time: "06:00 PM",
    location: "New York, NY",
    ticketsIssued: 180,
    totalCapacity: 200,
    status: "active",
    revenue: "$9,000",
  },
  {
    id: 3,
    name: "Workshop: Digital Marketing",
    date: "2024-01-20",
    time: "02:00 PM",
    location: "Online",
    ticketsIssued: 50,
    totalCapacity: 50,
    status: "expired",
    revenue: "$2,500",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("active");
  const [events] = useState(sampleEvents);

  return (
    <main className="layout-wrapper flex-1 p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
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
          <Card>
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
          <Card>
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
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Events</CardTitle>
                <CardDescription>
                  Manage and track all your events in one place
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Tabs value={filter} onValueChange={setFilter}>
                  <TabsList>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <EventsTable events={events} filter={filter} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function EventsTable({
  events,
  filter,
}: {
  events: typeof sampleEvents;
  filter: string;
}) {
  const filteredEvents = events.filter(
    (event) => filter === "all" || event.status === filter,
  );

  if (filteredEvents.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Tickets</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{event.date}</span>
                  <span className="text-gray-500 text-sm">{event.time}</span>
                </div>
              </TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>
                    {event.ticketsIssued} / {event.totalCapacity}
                  </span>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                    <div
                      className="h-1.5 rounded-full bg-emerald-600"
                      style={{
                        width: `${(event.ticketsIssued / event.totalCapacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">{event.revenue}</TableCell>
              <TableCell>
                <Badge
                  variant={event.status === "active" ? "default" : "secondary"}
                  className={
                    event.status === "active"
                      ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                      : ""
                  }
                >
                  {event.status === "active" ? "Active" : "Expired"}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Event</DropdownMenuItem>
                    <DropdownMenuItem>Download QR Codes</DropdownMenuItem>
                    <DropdownMenuItem>View Analytics</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete Event
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
        <Calendar className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="mb-2 font-semibold text-gray-900 text-xl">
        No events yet
      </h3>
      <p className="mb-6 max-w-md text-center text-gray-600">
        Get started by creating your first event. You can generate QR tickets
        and manage attendees all in one place.
      </p>
      <Button className="bg-emerald-600 hover:bg-emerald-700">
        <Plus className="mr-2 h-4 w-4" />
        Create Your First Event
      </Button>
    </div>
  );
}
