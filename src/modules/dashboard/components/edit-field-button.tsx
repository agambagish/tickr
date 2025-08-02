"use client";

import { EditIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUpdateEventDialog } from "@/modules/dashboard/hooks/use-update-event-dialog";
import type { UpdateEventSchema } from "@/modules/dashboard/schemas/update-event-schema";

interface Props {
  field: keyof UpdateEventSchema;
  label: string;
  value: UpdateEventSchema[keyof UpdateEventSchema];
  type?: "text" | "textarea" | "datetime" | "select" | "timezone";
  options?: string[];
  eventId: number;
}

export function EditFieldButton({
  field,
  label,
  value,
  type = "text",
  options,
  eventId,
}: Props) {
  const { onOpen } = useUpdateEventDialog();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 text-gray-400 hover:text-emerald-600"
      onClick={() =>
        onOpen({
          field,
          label,
          value,
          type,
          options,
          eventId,
        })
      }
    >
      <EditIcon className="h-4 w-4" />
    </Button>
  );
}
