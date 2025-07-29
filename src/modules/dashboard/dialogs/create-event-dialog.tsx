"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, PlusIcon, Trash2Icon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { DateTimePicker } from "@/components/global/date-time-picker";
import { ResponsiveDialog } from "@/components/global/responsive-dialog";
import { TimezoneInput } from "@/components/global/timezone-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateEventDialog } from "@/modules/dashboard/hooks/use-create-event-dialog";
import type { CreateEventSchema } from "@/modules/dashboard/schemas/create-event-schema";
import { createEventSchema } from "@/modules/dashboard/schemas/create-event-schema";
import { createEvent } from "@/modules/dashboard/server/create-event";

export function CreateEventDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isOpen, onClose } = useCreateEventDialog();
  const router = useRouter();

  const form = useForm<CreateEventSchema>({
    mode: "onChange",
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      venue: "",
      type: "",
      timezone: "",
      ticketType: "free",
      ticketsCategories: [
        {
          name: "Standard",
          description: "",
          price: "0",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketsCategories",
  });

  function onSubmit(values: CreateEventSchema) {
    setIsLoading(true);

    toast.promise(createEvent(values), {
      loading: "Creating event...",
      success: (newEventId) => {
        form.reset();
        setIsLoading(false);
        router.push(`/dashboard/events/${newEventId}`);
        onClose();
        return "Event created ✅";
      },
      error: ({ message }: { message: string }) => {
        setIsLoading(false);
        return message;
      },
    });
  }

  return (
    <ResponsiveDialog
      title="Create a new Event"
      description="Create and manage a new event, whether free or paid."
      isOpen={isOpen}
      onClose={onClose}
    >
      <ScrollArea className="h-[600px] pr-4">
        <Form {...form}>
          <form
            id="form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pb-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter event name"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="venue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter venue location"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "Conference",
                        "Workshop",
                        "Seminar",
                        "Networking",
                        "Concert",
                        "Festival",
                        "Sports",
                        "Exhibition",
                        "Other",
                      ].map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startsAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starts At</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      date={field.value}
                      setDate={field.onChange}
                      placeholder="Pick start date and time"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endsAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ends At</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      date={field.value as Date | undefined}
                      setDate={field.onChange}
                      placeholder="Pick end date and time"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezone</FormLabel>
                  <FormControl>
                    <TimezoneInput
                      field={field}
                      open={open}
                      setOpen={setOpen}
                      disabled={isLoading}
                      onSelect={(currentValue) => {
                        form.setValue(
                          field.name,
                          currentValue === field.value ? "" : currentValue,
                        );
                        setOpen(false);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Ticket Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex"
                      disabled={isLoading}
                    >
                      <div className="flex items-center space-x-3 space-y-0">
                        <RadioGroupItem value="free" disabled={isLoading} />
                        <FormLabel className="font-normal">
                          Free Event
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-3 space-y-0">
                        <RadioGroupItem value="paid" disabled={isLoading} />
                        <FormLabel className="font-normal">
                          Paid Event
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("ticketType") === "paid" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Ticket Categories
                    </span>
                    <p className="text-muted-foreground text-sm">
                      Configure different ticket types and pricing
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={isLoading}
                    onClick={() =>
                      append({
                        name: "",
                        description: "",
                        price: "0",
                      })
                    }
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <PlusIcon className="h-4 w-4" />
                    Add
                  </Button>
                </div>
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <Card key={field.id} className="p-4">
                      <div className="mb-4 flex items-start justify-between">
                        <h4 className="font-medium">Category {index + 1}</h4>
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => remove(index)}
                            className="text-red-600 hover:text-red-700"
                            disabled={isLoading}
                          >
                            <Trash2Icon className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name={`ticketsCategories.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., VIP, General"
                                  disabled={isLoading}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`ticketsCategories.${index}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  disabled={isLoading}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name={`ticketsCategories.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe what's included with this ticket"
                                className="resize-none"
                                disabled={isLoading}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </form>
        </Form>
      </ScrollArea>
      <Button type="submit" form="form" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2Icon className="animate-spin" />}
        Create
      </Button>
    </ResponsiveDialog>
  );
}
