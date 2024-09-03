import Link from "next/link";
import { LogoRestify } from "@/icons";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="h-16 bg-primary/10">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <LogoRestify />
        <ul className="flex gap-4">
          <li>
            <Button variant="ghost" className="rounded-[12px]">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </li>
          <li>
            <Button className="rounded-[12px]">
              <Link href="/register">Pruébalo gratis</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
