import { ResponsiveDialog } from "@/components/global/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useCreateEventDialog } from "@/modules/dashboard/hooks/use-create-event-dialog";

export function CreateEventDialog() {
  const { isOpen, onClose } = useCreateEventDialog();

  return (
    <ResponsiveDialog
      title="Test Title"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi laboriosam obcaecati?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Button>Demo Button</Button>
    </ResponsiveDialog>
  );
}
