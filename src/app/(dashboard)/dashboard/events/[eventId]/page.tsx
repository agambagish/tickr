import { notFound } from "next/navigation";

import {
  Calendar,
  ChevronRight,
  Edit,
  Info,
  QrCode,
  Send,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/utils";
import { EditFieldButton } from "@/modules/dashboard/components/edit-field-button";
import { getEventById } from "@/modules/dashboard/server/get-event-by-id";

interface Props {
  params: Promise<{ eventId: string }>;
}

export default async function Page({ params }: Props) {
  const _params = await params;
  const event = await getEventById(Number(_params.eventId));

  if (!event) {
    notFound();
  }

  return (
    <main className="layout-wrapper flex-1 p-6">
      <Tabs defaultValue="event-details" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 lg:h-10 lg:grid-cols-5">
          <TabsTrigger value="event-details" className="text-xs lg:text-sm">
            Event Details
          </TabsTrigger>
          <TabsTrigger value="ticket-design" className="text-xs lg:text-sm">
            Ticket Design
          </TabsTrigger>
          <TabsTrigger value="event-page" className="text-xs lg:text-sm">
            Event Page
          </TabsTrigger>
          <TabsTrigger value="guest-tickets" className="text-xs lg:text-sm">
            Guest Tickets
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-xs lg:text-sm">
            Analytics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="event-details" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
            <div className="space-y-6 xl:col-span-3">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-gray-100 border-b px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                        <Calendar className="h-4 w-4 text-emerald-600" />
                      </div>
                      <h2 className="font-semibold text-gray-900 text-lg">
                        Event Details
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-gray-700 text-sm">
                            Event Name
                          </span>
                          <EditFieldButton
                            field="name"
                            label="Event Name"
                            value={event.name}
                            eventId={Number(_params.eventId)}
                          />
                        </div>
                        <p className="font-medium text-gray-900">
                          {event.name}
                        </p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-gray-700 text-sm">
                            Venue
                          </span>
                          <EditFieldButton
                            field="venue"
                            label="Venue"
                            value={event.venue}
                            eventId={Number(_params.eventId)}
                          />
                        </div>
                        <p className="font-medium text-gray-900">
                          {event.venue}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-gray-700 text-sm">
                            Starts At
                          </span>
                          <EditFieldButton
                            field="startsAt"
                            label="Starts At"
                            value={event.startsAt}
                            type="datetime"
                            eventId={Number(_params.eventId)}
                          />
                        </div>
                        <p className="font-medium text-gray-900">
                          {formatDate(event.startsAt, {
                            timeZone: event.timezone,
                            dateStyle: "long",
                            timeZoneName: "shortGeneric",
                          })}
                        </p>
                      </div>
                      {event.endsAt && (
                        <div className="rounded-lg bg-gray-50 p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-gray-700 text-sm">
                              Ends At
                            </span>
                            <EditFieldButton
                              field="endsAt"
                              label="Ends At"
                              value={event.endsAt}
                              type="datetime"
                              eventId={Number(_params.eventId)}
                            />
                          </div>
                          <p className="font-medium text-gray-900">
                            {formatDate(event.endsAt, {
                              timeZone: event.timezone,
                              dateStyle: "long",
                              timeZoneName: "shortGeneric",
                            })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-gray-700 text-sm">
                          Ticket Type
                        </span>
                        <EditFieldButton
                          field="ticketType"
                          label="Ticket Type"
                          value={event.ticketType}
                          type="select"
                          options={["free", "paid"]}
                          eventId={Number(_params.eventId)}
                        />
                      </div>
                      <p className="font-medium text-gray-900 capitalize">
                        {event.ticketType}
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-gray-700 text-sm">
                          Timezone
                        </span>
                        <EditFieldButton
                          field="timezone"
                          label="Timezone"
                          value={event.timezone}
                          type="timezone"
                          eventId={Number(_params.eventId)}
                        />
                      </div>
                      <p className="font-medium text-gray-900 capitalize">
                        {event.timezone}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-gray-700 text-sm">
                            Event Type
                          </span>
                          <EditFieldButton
                            field="type"
                            label="Event Type"
                            value={event.type}
                            eventId={Number(_params.eventId)}
                          />
                        </div>
                        <p className="font-medium text-gray-900">
                          {event.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="h-fit rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-gray-100 border-b px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Event Coordinators
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Assigned coordinators
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 font-bold text-3xl text-gray-900">
                      1
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent text-xs"
                      >
                        View List
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent text-xs"
                      >
                        Add New
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-fit rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-gray-100 border-b px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                        <QrCode className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Total Tickets
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Generated tickets
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 font-bold text-3xl text-gray-900">
                      0
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent text-xs"
                      >
                        Export
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent text-xs"
                      >
                        Deactivate
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-gray-100 border-b px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                        <Zap className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Quick Actions
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Ticket operations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 p-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-medium text-sm"
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Send Single Ticket
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-medium text-sm"
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Send Bulk Tickets
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-medium text-sm"
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Resend Ticket
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-medium text-sm"
                    >
                      <Edit className="mr-3 h-4 w-4" />
                      Ticket Design
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-medium text-sm"
                    >
                      <Calendar className="mr-3 h-4 w-4" />
                      View Analytics
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-gray-100 border-b px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                        <Calendar className="h-4 w-4 text-emerald-600" />
                      </div>
                      <h2 className="font-semibold text-gray-900 text-lg">
                        Event Page
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-gray-600">
                    Setup event registration to create event page, get
                    registrations, and automatically send tickets to approved
                    guests.
                  </p>
                  <Button variant="outline">Setup Event Page</Button>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-gray-100 border-b px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                      <Info className="h-4 w-4 text-emerald-600" />
                    </div>
                    <h2 className="font-semibold text-gray-900 text-lg">
                      FAQs
                    </h2>
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded p-3 text-left text-sm hover:bg-gray-50">
                      <span className="font-medium">
                        How to quickly send Single Tickets for an event?
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3 text-gray-600 text-sm">
                      You can send single tickets by clicking on the "Send
                      Single Ticket" button in the Quick Actions section.
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded p-3 text-left text-sm hover:bg-gray-50">
                      <span className="font-medium">
                        How can I setup Event Registration?
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3 text-gray-600 text-sm">
                      Click on "Setup Event Page" to create a registration form
                      for your event.
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded p-3 text-left text-sm hover:bg-gray-50">
                      <span className="font-medium">
                        How can I buy more credits?
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3 text-gray-600 text-sm">
                      You can purchase additional credits through your
                      subscription settings or by clicking the upgrade button.
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-center">
                  <p className="mb-2 font-medium text-gray-600 text-sm">
                    Event Starts In
                  </p>
                  <p className="mb-4 font-bold text-2xl text-gray-900">
                    0 days 5 hours 46 minutes
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      End Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      Extend Event
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white shadow-sm">
                <h3 className="mb-2 font-semibold text-lg">
                  Need More Credits?
                </h3>
                <p className="mb-4 text-emerald-100 text-sm leading-relaxed">
                  Depending on the number of tickets you need, you can buy
                  different credit packages
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-emerald-700 hover:bg-gray-50"
                >
                  Buy Credits
                </Button>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-gray-100 border-b px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                      <QrCode className="h-4 w-4 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Scan Tickets
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="ticket-design">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <p className="text-center text-gray-500">
                Ticket Design content coming soon...
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="event-page">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <p className="text-center text-gray-500">
                Event Page content coming soon...
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="guest-tickets">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <p className="text-center text-gray-500">
                Guest Tickets content coming soon...
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <p className="text-center text-gray-500">
                Analytics content coming soon...
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
