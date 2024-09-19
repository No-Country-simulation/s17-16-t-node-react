import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useGlobalStore } from "@/store/globalStore";
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
  const { orders } = useGlobalStore((state) => ({
    orders: state.orders,
  }));

  const tableOrder = orders.find((o) => o.tableNumber === table.tableNumber);

  const statusColors = {
    Esperando: "#FF6347",
    Preparando: "#8C6A2D",
    Listo: "#6AB04C",
    Entregado: "#4A90E2",
    Terminado: "#42526E",
  };

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
      <div className="mb-2">
        {table.available && !tableOrder ? (
          <Badge className="mr-2 rounded-full px-3 py-1">Disponible</Badge>
        ) : (
          <Badge className="rounded-full bg-destructive px-3 py-1 hover:bg-destructive hover:opacity-80">
            Ocupada
          </Badge>
        )}
      </div>
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[0.75rem] bg-gray-400 p-2 text-white">
        <h6 className="font-semibold">Mesa #{table.tableNumber}</h6>
      </div>
      <p className="mt-2 text-sm">
        <span className="text-muted-foreground">Sillas:</span> <span>{table.chairs}</span>
      </p>
      {tableOrder && (
        <div className="rounded-[0.875rem] p-2 text-center shadow-card-shadow">
          <p className="mb-2 text-xs font-medium">Estado de Pedido</p>
          <Badge
            style={{ backgroundColor: statusColors[tableOrder.status] }}
            className={`rounded-full p-2 text-xs`}
          >
            {tableOrder.status}
          </Badge>
        </div>
      )}

      {table.available && !tableOrder ? (
        <Button className="mt-2">
          <Link href={`/d/dining-area/${table.tableNumber}`}>Tomar pedido</Link>
        </Button>
      ) : (
        <Button className="mt-2 bg-gray-600 hover:bg-gray-600/80">
          <Link href={`/d/dining-area/${table.tableNumber}`}>Ver pedido</Link>
        </Button>
      )}
    </article>
  );
};
