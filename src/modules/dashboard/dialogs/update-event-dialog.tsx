"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { DateTimePicker } from "@/components/global/date-time-picker";
import { ResponsiveDialog } from "@/components/global/responsive-dialog";
import { TimezoneInput } from "@/components/global/timezone-input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateEventDialog } from "@/modules/dashboard/hooks/use-update-event-dialog";
import type { UpdateEventSchema } from "@/modules/dashboard/schemas/update-event-schema";
import { updateEventSchema } from "@/modules/dashboard/schemas/update-event-schema";
import { updateEvent } from "@/modules/dashboard/server/update-event";

export function UpdateEventDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isOpen, field, label, value, type, options, onClose, eventId } =
    useUpdateEventDialog();

  const form = useForm<{
    [K in keyof UpdateEventSchema]: UpdateEventSchema[K];
  }>({
    mode: "onChange",
    resolver: field
      ? zodResolver(
          z.object({
            [field]: updateEventSchema.shape[field],
          }),
        )
      : undefined,
    defaultValues: {} as Partial<UpdateEventSchema>,
  });

  useEffect(() => {
    if (isOpen && field && value !== undefined) {
      form.reset({ [field]: value });
    } else if (!isOpen) {
      form.reset({});
    }
  }, [isOpen, field, value, form]);

  function onSubmit(
    data: {
      [K in keyof UpdateEventSchema]: UpdateEventSchema[K];
    },
  ) {
    if (!field) return;
    setIsLoading(true);

    toast.promise(updateEvent(eventId, data), {
      loading: "Updating event...",
      success: () => {
        onClose();
        return "Event updated";
      },
      error: ({ message }: { message: string }) => message,
      finally: () => setIsLoading(false),
    });
  }

  function renderFormField() {
    if (!field) return null;

    switch (type) {
      case "textarea":
        return (
          <FormField
            control={form.control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="min-h-[100px]"
                    disabled={isLoading}
                    {...formField}
                    value={(formField.value as string) ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "select":
        return (
          <FormField
            control={form.control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select
                  onValueChange={formField.onChange}
                  defaultValue={(formField.value as string) ?? ""}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={`Select ${label.toLowerCase()}`}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "datetime":
        return (
          <FormField
            control={form.control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <DateTimePicker
                    date={(formField.value as Date) ?? ""}
                    setDate={formField.onChange}
                    placeholder="Pick start date and time"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "timezone":
        return (
          <FormField
            control={form.control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>Timezone</FormLabel>
                <FormControl>
                  <TimezoneInput
                    field={formField}
                    open={open}
                    setOpen={setOpen}
                    disabled={isLoading}
                    onSelect={(currentValue) => {
                      formField.onChange(currentValue);
                      form.setValue(
                        formField.name,
                        currentValue === formField.value ? "" : currentValue,
                      );
                      setOpen(false);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      default:
        return (
          <FormField
            control={form.control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Enter ${label.toLowerCase()}`}
                    disabled={isLoading}
                    {...formField}
                    value={(formField.value as string) ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
    }
  }

  return (
    <ResponsiveDialog
      title={`Edit ${label}`}
      description={`Update the ${label.toLowerCase()} for your event. Changes will be saved immediately.`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {renderFormField()}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !form.formState.isDirty}
              className="min-w-[100px]"
            >
              {isLoading && <Loader2Icon className="animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </ResponsiveDialog>
  );
}
