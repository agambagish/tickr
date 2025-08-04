"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/db";
import { events, ticketsCategories } from "@/db/schema";
import { tryCatch } from "@/lib/try-catch";
import type { CreateEventSchema } from "@/modules/dashboard/schemas/create-event-schema";

export async function createEvent(values: CreateEventSchema) {
  const { userId } = await auth();

  if (!userId) throw new Error("You're not logged in");

  const newEvent = await tryCatch(
    db.transaction(async (tx) => {
      const [event] = await tx
        .insert(events)
        .values({
          ...values,
          userId,
        })
        .returning({
          id: events.id,
        });

      const categories = values.ticketsCategories.map((category) => {
        const promise = tx
          .insert(ticketsCategories)
          .values({
            eventId: event.id,
            ...category,
            ticketType: values.ticketType,
          })
          .returning({
            id: ticketsCategories.id,
          });

        return promise;
      });

      await Promise.all(categories);
      return event.id;
    }),
  );

  if (newEvent.error) throw new Error("Unable to create event");

  return newEvent.data;
}
