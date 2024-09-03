import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import { LuMoreHorizontal } from "react-icons/lu";
import { RxTrash } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PersonalButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <LuMoreHorizontal />
          <span className="sr-only">Toggle restaurant menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 rounded-[0.75rem] px-1 py-2">
        <DropdownMenuLabel className="p-2">Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex w-full items-center gap-2 p-2" href="">
            <FiEdit2 />
            Editar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex w-full items-center gap-2 p-2 text-destructive" href="">
            <RxTrash />
            Eliminar
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
