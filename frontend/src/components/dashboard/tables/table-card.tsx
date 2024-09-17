import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { LiaEditSolid } from "react-icons/lia";
import { LuTrash } from "react-icons/lu";

import type { Table } from "@/types/tables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  table: Table;
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>;
  setFormContent: Dispatch<SetStateAction<Table | null>>;
  setIsFormOpen: (open: boolean) => void;
}

export const TableCard = ({ table, setIsAlertOpen, setIsFormOpen, setFormContent }: Props) => {
  return (
    <article className="rounded-2xl p-4 shadow-card-shadow">
      <div className="mb-4 flex gap-1">
        <Button
          variant={"ghost"}
          className="shadow-card-shadow"
          onClick={() => {
            setIsFormOpen(true);
            setFormContent(table);
          }}
        >
          <LiaEditSolid size={16} />
        </Button>
        <Button
          variant={"ghost"}
          className="shadow-card-shadow"
          onClick={() => setIsAlertOpen(true)}
        >
          <LuTrash size={16} />
        </Button>
      </div>
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[0.75rem] bg-gray-400 p-2 text-white">
        <h6 className="font-semibold">Mesa #{table.tableNumber}</h6>
      </div>
      <p>
        Sillas: <span className="text-muted-foreground">{table.chairs}</span>
      </p>
      {table.available ? (
        <Badge className="mr-2 rounded-full px-3 py-1">Disponible</Badge>
      ) : (
        <Badge className="rounded-full bg-destructive px-3 py-1 hover:bg-destructive hover:opacity-80">
          No disponible
        </Badge>
      )}

      {table.available ? (
        <Button className="mt-2">
          <Link href={`/d/dining-area/${table.tableNumber}`}>Tomar pedido</Link>
        </Button>
      ) : (
        <Button className="mt-2">Ver pedido</Button>
      )}
    </article>
  );
};
