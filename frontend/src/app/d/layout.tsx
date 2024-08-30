import Link from "next/link";
import { LogoRestify } from "@/icons";

import { MobileNavbar } from "@/components/shared/mobile-navbar";
import { Navbar } from "@/components/shared/navbar";
import { UserButton } from "@/components/shared/user-button";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LogoRestify />
            </Link>
          </div>
          <div className="mt-4 flex-1">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 md:justify-end lg:h-[60px] lg:px-6">
          <MobileNavbar />
          <UserButton />
        </header>
        {children}
      </div>
    </div>
  );
}
