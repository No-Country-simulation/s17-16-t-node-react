import { LogoRestify } from "@/icons";

import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="flex h-full items-center justify-between">
        <LogoRestify />
        <ul className="flex gap-4">
          <li>
            <Button variant="ghost" className="rounded-[12px]">
              Iniciar sesión
            </Button>
          </li>
          <li>
            <Button className="rounded-[12px]">Pruébalo gratis</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
