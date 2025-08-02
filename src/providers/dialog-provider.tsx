"use client";

import { CreateEventDialog } from "@/modules/dashboard/dialogs/create-event-dialog";
import { UpdateEventDialog } from "@/modules/dashboard/dialogs/update-event-dialog";

export function DialogProvider() {
  return (
    <>
      <CreateEventDialog />
      <UpdateEventDialog />
    </>
  );
}
