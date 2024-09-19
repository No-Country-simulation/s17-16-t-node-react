import { table } from "console";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { KitchenSelect } from "@/components/dashboard/kitchen/kitchen-select";

const orders = [
  {
    id: "order-1",
    status: "Listo",
    orderNumber: "001",
    waiter: "Juan",
    table: "1",
    items: [
      {
        name: "Asado",

        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
        quantity: "1",
      },
      {
        name: "Pizza",
        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
        quantity: "1",
      },
      {
        name: "Ensalada César",

        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
        quantity: "1",
      },
      {
        name: "Sushi",
        quantity: "3",
        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
      },
      {
        name: "Tacos",
        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
        quantity: "1",
      },

      // Agrega más ítems según sea necesario
    ],
  },
  {
    id: "order-2",
    status: "En preparación",
    orderNumber: "002",
    table: " 2",
    waiter: "María",
    items: [
      {
        name: "Pizza",
        imageUrl: "https://res.cloudinary.com/restity/image/upload/v1726696788/food_moj0wq.png",
        quantity: "2",
      },
      // Agrega más ítems según sea necesario
    ],
  },
  // Agrega más órdenes según sea necesario
];
export const KitchenPage = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col items-start justify-start gap-6"
    >
      {orders.map((order) => (
        <AccordionItem key={order.id} className="w-full" value={order.id}>
          <AccordionTrigger className="flex w-full p-3">
            <div className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl p-4 shadow">
              <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                <div className="self-stretch0 inline-flex items-start justify-start gap-3">
                  <div className="flex w-full justify-evenly gap-6">
                    <h3 className="flex">Orden #{order.orderNumber}</h3>

                    <p className=""># Mesa: {order.table}</p>

                    <p className="">Mesero: {order.waiter}</p>
                  </div>

                  <KitchenSelect />
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <section className="flex flex-col gap-3 p-3">
              <h4 className="">Items de la orden:</h4>
              <ul className="list-disc pl-3">
                {order.items.map((item, index) => (
                  <li key={index} className="flex w-full p-2">
                    <div className="flex w-full items-start justify-between gap-3">
                      <div className="flex items-center justify-center gap-2.5 self-stretch rounded-xl">
                        <img className="h-10 w-10 rounded-lg" src={item.imageUrl} alt={item.name} />
                      </div>
                      <h3 className="block">{item.name}</h3>
                      <h3 className="flex items-center justify-center gap-2.5 self-stretch rounded-xl p-2">
                        Cantidad: {item.quantity};
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
