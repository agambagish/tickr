import { Footer } from "@/modules/layout/components/footer";
import { Header } from "@/modules/layout/components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
