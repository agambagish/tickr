"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

import { db } from "@/db";
import { events, ticketsCategories } from "@/db/schema";
import { tryCatch } from "@/lib/try-catch";

export async function getEventById(id: number) {
  const { userId } = await auth();

  if (!userId) return null;

  const { data, error } = await tryCatch(
    db
      .select({
        name: events.name,
        venue: events.venue,
        type: events.type,
        startsAt: events.startsAt,
        endsAt: events.endsAt,
        timezone: events.timezone,
        ticketType: ticketsCategories.ticketType,
      })
      .from(events)
      .innerJoin(ticketsCategories, eq(ticketsCategories.eventId, events.id))
      .where(and(eq(events.id, id), eq(events.userId, userId))),
  );

  if (error || data.length === 0) return null;

  return data[0];
}
