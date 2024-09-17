"use client";

import { useParams } from "next/navigation";

import { TableOrder } from "@/components/dashboard/tables/table-order";

const OrderTable = () => {
  const { tableNumber } = useParams<{ tableNumber: string }>();

  return (
    <main className="min-h-full p-8 pt-6">
      <TableOrder tableNumber={tableNumber} />
    </main>
  );
};

export default OrderTable;
