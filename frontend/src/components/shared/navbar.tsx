import Link from "next/link";
import { LuStore } from "react-icons/lu";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <p className="mb-2 text-[1.125rem] font-semibold">Navegación</p>
      <Button className="justify-start rounded-[0.875rem]" asChild>
        <Link className="gap-2" href="/d/restaurants">
          <LuStore /> Restaurantes
        </Link>
      </Button>
    </nav>
  );
}
