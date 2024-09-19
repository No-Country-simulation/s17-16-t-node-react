"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuApple, LuClipboard, LuLayoutGrid, LuStore, LuUsers } from "react-icons/lu";
import { RxTable } from "react-icons/rx";

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
          <LuLayoutGrid /> Cocina
        </Link>
      </Button>
      <Button
        variant={pathname.includes("/d/dining-area") ? "default" : "ghost"}
        className="justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/dining-area">
          <LuClipboard /> Salón
        </Link>
      </Button>

      {/* <Button
        variant={pathname === "/d/orders" ? "default" : "ghost"}
        className="justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/orders">
          <LuClipboard />
          Pedidos
        </Link>
      </Button> */}

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
          <LuUsers /> Personal
        </Link>
      </Button>
      <Button
        variant={pathname === "/d/menu" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/menu">
          <LuApple /> Menú
        </Link>
      </Button>
      {/* <Button
        variant={pathname === "/d/tables" ? "default" : "ghost"}
        className="mb-2 justify-start rounded-[0.875rem]"
        asChild
      >
        <Link className="gap-2" href="/d/tables">
          <RxTable /> Mesas
        </Link>
      </Button> */}
    </nav>
  );
}
