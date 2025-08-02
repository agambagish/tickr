import { create } from "zustand";

import type { UpdateEventSchema } from "@/modules/dashboard/schemas/update-event-schema";

type FieldType = "text" | "textarea" | "datetime" | "select" | "timezone";

interface Store {
  isOpen: boolean;
  field: keyof UpdateEventSchema | null;
  label: string;
  value: UpdateEventSchema[keyof UpdateEventSchema];
  type: FieldType;
  options?: string[];
  eventId: number;
  onOpen: (props: {
    field: keyof UpdateEventSchema;
    label: string;
    value: UpdateEventSchema[keyof UpdateEventSchema];
    type?: FieldType;
    options?: string[];
    eventId: number;
  }) => void;
  onClose: () => void;
}

export const useUpdateEventDialog = create<Store>((set) => ({
  isOpen: false,
  field: null,
  label: "",
  value: "",
  type: "text",
  options: undefined,
  eventId: NaN,
  onOpen: ({ field, label, value, type = "text", options, eventId }) =>
    set({
      isOpen: true,
      field,
      label,
      value,
      type,
      options,
      eventId,
    }),
  onClose: () =>
    set({
      isOpen: false,
      field: null,
      label: "",
      value: "",
      type: "text",
      options: undefined,
      eventId: NaN,
    }),
}));
