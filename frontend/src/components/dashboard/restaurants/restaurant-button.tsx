import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FiEdit2 } from "react-icons/fi";
import { LuMoreHorizontal } from "react-icons/lu";
import { RxTrash } from "react-icons/rx";

import { Button } from "@/components/ui/button";

export const RestaurantButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <LuMoreHorizontal size={16} />
          <span className="sr-only">Toggle restaurant menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-40 rounded-[0.75rem] bg-background px-1 py-2 shadow-card-shadow"
      >
        <DropdownMenuLabel className="p-2">Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 p-2" href="">
            <FiEdit2 />
            Editar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 px-2 text-destructive" href="">
            <RxTrash />
            Eliminar
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
