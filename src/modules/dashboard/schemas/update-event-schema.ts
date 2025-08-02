import type { z } from "zod/v4";

import { createEventSchema } from "@/modules/dashboard/schemas/create-event-schema";

export const updateEventSchema = createEventSchema.partial();

export type UpdateEventSchema = z.infer<typeof updateEventSchema>;
