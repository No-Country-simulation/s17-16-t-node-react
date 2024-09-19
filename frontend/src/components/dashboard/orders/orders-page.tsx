"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/services/orders";
import { RxPlus } from "react-icons/rx";

import type { Order } from "@/types/orders";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert } from "@/components/shared/alert";

import { OrderForm } from "./order-form";
import { OrderProductCard } from "./order-product-card";

export const OrdersPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formContent, setFormContent] = useState<null>(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);

  const handleFormState = (state: boolean) => {
    setFormContent(null);
    setIsFormOpen(state);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getOrders();
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    void getData();
  }, []);

  return (
    <>
      <Alert
        title="¿Seguro que deseas eliminar este producto?"
        description="Esta acción eliminará el producto de forma permanente."
        confirm="Eliminar"
        cancel="Cancelar"
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
      <OrderForm
        isFormOpen={isFormOpen}
        handleFormState={handleFormState}
        formContent={formContent}
      />
      <div className="flex items-center justify-between pb-6">
        <h3>Pedidos</h3>
        <Button className="cursor-pointer rounded-[0.875rem]" onClick={() => setIsFormOpen(true)}>
          <div className="flex gap-2">
            <RxPlus size={16} />
            Tomar pedido
            <span className="sr-only">Toggle product form</span>
          </div>
        </Button>
      </div>
      <Separator />
      {orders.length < 1 ? (
        <section className="flex min-h-full items-center justify-center pt-6 text-center">
          <div>
            <h4 className="mb-2">No hay pedidos disponibles</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningún pedido, añade uno a continuación
            </p>
            <Button
              className="cursor-pointer rounded-[0.875rem]"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="flex gap-2">
                <RxPlus size={16} />
                Tomar pedido
              </div>
            </Button>
          </div>
        </section>
      ) : (
        <section className="flex flex-col gap-4 pt-6">
          {orders.map((o) => (
            <div key={o.id}>
              <h4>Mesa #{o.tableNumber}</h4>
              <section>
                {o.products.map((p) => (
                  <OrderProductCard key={p.id} orderProduct={p} />
                ))}
              </section>
            </div>
          ))}
        </section>
      )}
    </>
  );
};
