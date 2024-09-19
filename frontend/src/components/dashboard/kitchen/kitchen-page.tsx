"use client";

import Image from "next/image";
import { useGlobalStore } from "@/store/globalStore";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { KitchenSelect } from "@/components/dashboard/kitchen/kitchen-select";

export const KitchenPage = () => {
  const { orders } = useGlobalStore((state) => ({
    updateOrder: state.updateOrder,
    orders: state.orders,
  }));

  const statusColors = {
    Esperando: "#FF6347",
    Preparando: "#8C6A2D",
    Listo: "#6AB04C",
    Entregado: "#4A90E2",
    Terminado: "#42526E",
  };

  return (
    <>
      <div className="pb-6">
        <h3>Cocina - Pedidos</h3>
      </div>
      <Separator />
      <section className="pt-6">
        {orders.length < 1 && (
          <p className="mt-12 text-center italic">No hay pedidos disponibles</p>
        )}
        <Accordion
          type="single"
          collapsible
          className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-start gap-6 rounded-2xl shadow"
        >
          {orders.map((order) => (
            <AccordionItem key={order.id} className="w-full" value={order.id}>
              <AccordionTrigger className="flex w-full p-3">
                <div className="flex w-full flex-col items-center justify-center gap-3 p-4">
                  <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                    <div className="self-stretch0 inline-flex items-start justify-start gap-3">
                      <div className="flex w-full items-center justify-evenly gap-6">
                        <h3 className="flex text-lg">Orden #{order.id.slice(-5)}</h3>

                        <p className="">Mesa: #{order.tableNumber}</p>

                        <p className="">Mesero/a: {order.waiter}</p>

                        <Badge
                          style={{ backgroundColor: statusColors[order.status] }}
                          className={`rounded-full p-2 text-xs`}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="w-full bg-gray-100 p-2">
                <section className="flex flex-col gap-3 p-3">
                  <div className="flex justify-between">
                    <h4 className="">Lista de pedido:</h4>
                    {order.status !== "Entregado" && order.status !== "Terminado" && (
                      <div className="flex gap-2">
                        <KitchenSelect order={order} />
                      </div>
                    )}
                  </div>
                  <Separator />
                  <ul className="list-disc pl-3">
                    {order.products.map((item, index) => (
                      <li key={index} className="flex w-full p-2">
                        <div className="flex w-full items-center gap-8">
                          <div className="flex items-center justify-center gap-2.5 self-stretch rounded-xl">
                            <Image
                              width={40}
                              height={40}
                              className="rounded-lg"
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                          <h3 className="ml-12 block text-lg">{item.name}</h3>
                          <h3 className="ml-auto flex items-center justify-center gap-2.5 self-stretch rounded-xl p-2 text-lg">
                            Cantidad: {item.quantity}
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
                {order.description ? (
                  <div className="mt-2 px-16 text-xs">
                    <p className="mb-2 font-semibold">Nota:</p>
                    <p>{order.description}</p>
                  </div>
                ) : (
                  <div className="mt-2 px-16 text-xs">
                    <p className="mb-2 font-semibold">Nota:</p>
                    <p className="italic">No hay nota disponible</p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};
