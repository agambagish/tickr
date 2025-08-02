"use server";

import { revalidatePath } from "next/cache";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { events } from "@/db/schema";
import { tryCatch } from "@/lib/try-catch";
import type { UpdateEventSchema } from "@/modules/dashboard/schemas/update-event-schema";

export async function updateEvent(
  eventId: number,
  data: {
    [K in keyof UpdateEventSchema]: UpdateEventSchema[K];
  },
) {
  const event = await tryCatch(
    db.query.events.findFirst({
      where: (events, { eq }) => eq(events.id, eventId),
      columns: {
        id: true,
        startsAt: true,
        endsAt: true,
      },
    }),
  );

  if (event.error || !event.data) {
    throw new Error("Event not found");
  }

  const { startsAt, endsAt } = data;
  const { startsAt: eventStarts, endsAt: eventEnds } = event.data;

  if (
    (startsAt && eventEnds && startsAt > eventEnds) ||
    (endsAt && endsAt < eventStarts)
  ) {
    throw new Error("Start date must be before end date");
  }

  const updatedEvent = await tryCatch(
    db.update(events).set(data).where(eq(events.id, event.data.id)).returning({
      id: events.id,
    }),
  );

  if (updatedEvent.error) throw new Error("Unable to update event");

  revalidatePath(`/dashboard/events/${event.data.id}`);
  return updatedEvent.data[0].id;
}
