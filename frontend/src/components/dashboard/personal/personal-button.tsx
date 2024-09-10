"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
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
import { Alert } from "@/components/shared/alert";

import type { IPersonal } from "./personal.types";

interface Props {
  personal: IPersonal;
  setIsFormOpen: (open: boolean) => void;
  setFormContent: Dispatch<SetStateAction<IPersonal | null>>;
}

export const PersonalButton = ({ setIsFormOpen, personal, setFormContent }: Props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <>
      <Alert
        title="¿Seguro que deseas eliminar este personal?"
        description="Esta acción eliminará el personal de forma permanente."
        confirm="Eliminar"
        cancel="Cancelar"
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
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
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 p-2"
            onClick={() => {
              setIsFormOpen(true);
              setFormContent(personal);
            }}
          >
            <FiEdit2 />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex w-full cursor-pointer items-center gap-2 p-2 text-destructive focus:text-destructive"
            onClick={() => setIsAlertOpen(true)}
          >
            <RxTrash />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
