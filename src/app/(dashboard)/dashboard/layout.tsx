import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/modules/dashboard/components/dashboard-header";
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar";
import { DialogProvider } from "@/providers/dialog-provider";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      defaultOpen={false}
    >
      <DashboardSidebar variant="inset" />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          {children}
          <DialogProvider />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
