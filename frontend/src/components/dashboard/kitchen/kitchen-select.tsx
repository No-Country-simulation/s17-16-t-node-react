import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const KitchenSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a order state" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecciona el estado de la orden</SelectLabel>
          <SelectItem value="Preparando">Tomar pedido</SelectItem>
          <SelectItem value="Nueva">Listo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
