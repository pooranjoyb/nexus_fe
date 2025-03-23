import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Image from "next/image";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <header className="flex items-center gap-3 p-4 border-b border-slate-200">
            <SidebarTrigger className="cursor-pointer" size="lg" />
            <Image src="/next.svg" alt="Nexus Logo" width={64} height={64} />
          </header>

          <div className="radial1"></div>
          <div className="radial2"></div>

          <main className="flex-1 p-6 overflow-auto">
            <div className="border-[0.5px] border-slate-200 rounded-lg shadow-sm p-6 h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
