"use client";

import * as React from "react";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateTimePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function DateTimePicker({
  date,
  setDate,
  placeholder = "Pick a date and time",
  disabled,
}: DateTimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const hours = date ? date.getHours().toString().padStart(2, "0") : "12";
  const minutes = date ? date.getMinutes().toString().padStart(2, "0") : "00";

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      if (date) {
        newDate.setHours(date.getHours());
        newDate.setMinutes(date.getMinutes());
      } else {
        newDate.setHours(12);
        newDate.setMinutes(0);
      }
      setDate(newDate);
    } else {
      setDate(undefined);
    }
  };

  const handleTimeChange = (type: "hours" | "minutes", value: string) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hours") {
        newDate.setHours(Number.parseInt(value) || 0);
      } else {
        newDate.setMinutes(Number.parseInt(value) || 0);
      }
      setDate(newDate);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP 'at' HH:mm") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="border-border border-b p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </div>
        <div className="p-3">
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex-1">
              <Label htmlFor="hours" className="text-muted-foreground text-xs">
                Hours
              </Label>
              <Input
                id="hours"
                type="number"
                min="0"
                max="23"
                value={hours}
                onChange={(e) => handleTimeChange("hours", e.target.value)}
                className="text-center"
              />
            </div>
            <div className="mt-3.5 text-muted-foreground">:</div>
            <div className="flex-1">
              <Label
                htmlFor="minutes"
                className="text-muted-foreground text-xs"
              >
                Minutes
              </Label>
              <Input
                id="minutes"
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => handleTimeChange("minutes", e.target.value)}
                className="text-center"
              />
            </div>
          </div>
          <Button className="mt-3 w-full" onClick={() => setIsOpen(false)}>
            Set Date & Time
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
