"use client";

import { useRouter } from "next/navigation";
import { LuUserCircle } from "react-icons/lu";

import { deleteCookie } from "@/lib/cookieUtils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserButton() {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("token");

    router.push("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <LuUserCircle className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Ajustes</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Salir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
