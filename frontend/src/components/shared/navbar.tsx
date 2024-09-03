"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuStore } from "react-icons/lu";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <p className="mb-2 text-[1.125rem] font-semibold">Interno</p>
      <Button
        variant={pathname === "/d/kitchen" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/kitchen">
          <LuStore /> Cocina
        </Link>
      </Button>
      <Button
        variant={pathname === "/d/dining-area" ? "default" : "ghost"}
        className="justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/dining-area">
          <LuStore /> Salón
        </Link>
      </Button>

      <p className="mb-2 mt-4 text-[1.125rem] font-semibold">Configuración</p>

      <Button
        variant={pathname === "/d/restaurant" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/restaurant">
          <LuStore /> Mi Restaurante
        </Link>
      </Button>
      <Button
        variant={pathname === "/d/personal" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/personal">
          <LuStore /> Personal
        </Link>
      </Button>
      <Button
        variant={pathname === "/d/menu" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/menu">
          <LuStore /> Menú
        </Link>
      </Button>
      <Button
        variant={pathname === "/d/tables" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/tables">
          <LuStore /> Mesas
        </Link>
      </Button>
    </nav>
  );
}
