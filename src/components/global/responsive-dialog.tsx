"use client";

import { createContext, useContext } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const ResponsiveDialogContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
});
const useResponsiveDialog = () => useContext(ResponsiveDialogContext);

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function ResponsiveDialogComponent({
  title,
  description,
  children,
  isOpen,
  onClose,
}: Props) {
  const isMobile = useIsMobile();

  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }

  return (
    <ResponsiveDialogContext.Provider value={{ isMobile }}>
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={onChange}>
          <SheetContent side="bottom" className="flex h-full flex-col">
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription>{description}</SheetDescription>
            </SheetHeader>
            <div className="flex-1 p-4">{children}</div>
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog open={isOpen} onOpenChange={onChange}>
          <DialogContent className="flex flex-col">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      )}
    </ResponsiveDialogContext.Provider>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  const { isMobile } = useResponsiveDialog();

  if (isMobile) {
    return (
      <SheetFooter className="fixed right-0 bottom-0 left-0 z-10 border-t bg-background px-4 py-3 shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
        {children}
      </SheetFooter>
    );
  }

  return <DialogFooter>{children}</DialogFooter>;
}

export const ResponsiveDialog = Object.assign(ResponsiveDialogComponent, {
  Footer,
});
