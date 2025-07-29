import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { events } from "@/db/schema";

export const createEventSchema = createInsertSchema(events, {
  name: (s) =>
    s
      .min(3, {
        message: "At least 3 characters required",
      })
      .max(50, {
        message: "Max 50 characters allowed",
      }),
  venue: (s) =>
    s
      .min(2, {
        message: "At least 2 characters required",
      })
      .max(75, {
        message: "Max 75 characters allowed",
      }),
  type: (s) =>
    s.min(1, {
      message: "Can't be empty",
    }),
  timezone: (s) =>
    s.min(1, {
      message: "Can't be empty",
    }),
})
  .omit({
    userId: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    ticketType: z.enum(["free", "paid"]),
    ticketsCategories: z.array(
      z.object({
        name: z
          .string()
          .min(3, {
            message: "At least 3 characters required",
          })
          .max(30, {
            message: "Max 30 characters allowed",
          }),
        description: z
          .string()
          .max(50, {
            message: "Max 50 characters allowed",
          })
          .optional(),
        price: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
          message: "Must be valid price",
        }),
      }),
    ),
  })
  .refine(
    (data) => {
      if (data.ticketType === "paid") {
        return data.ticketsCategories && data.ticketsCategories.length > 0;
      }
      return true;
    },
    {
      message: "At least one ticket category is required for paid events",
      path: ["ticketCategories"],
    },
  )
  .refine(
    (data) => {
      if (data.endsAt) {
        return data.endsAt > data.startsAt;
      }
    },
    {
      message: "End date and time must be after start date and time",
      path: ["endsAt"],
    },
  );

export type CreateEventSchema = z.infer<typeof createEventSchema>;
