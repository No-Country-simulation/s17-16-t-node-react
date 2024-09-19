import React, { useState } from "react";
import { useGlobalStore } from "@/store/globalStore";
import { toast } from "sonner";

import type { Order, OrderStatus } from "@/types/orders";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const KitchenSelect = ({ order }: { order: Order }) => {
  const [orderState, setOrderState] = useState<OrderStatus>(order.status);

  const { updateOrder } = useGlobalStore((state) => ({
    updateOrder: state.updateOrder,
  }));

  const handleStatusChange = (newStatus: OrderStatus) => {
    setOrderState(newStatus);
  };

  return (
    <>
      <Select value={orderState} onValueChange={handleStatusChange}>
        <SelectTrigger>
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Esperando">Esperando</SelectItem>
          <SelectItem value="Preparando">Preparando</SelectItem>
          <SelectItem value="Listo">Listo</SelectItem>
        </SelectContent>
      </Select>
      <div>
        <Button
          onClick={() => {
            updateOrder({ ...order, status: orderState });
            toast.success("Pedido actualizado");
          }}
          variant={"outline"}
          className=""
        >
          Actualizar Estado
        </Button>
      </div>
    </>
  );
};
