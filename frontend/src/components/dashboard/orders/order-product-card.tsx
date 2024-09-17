import Image from "next/image";
import { LuTrash } from "react-icons/lu";

import type { OrderProduct } from "@/types/orders";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  orderProduct: OrderProduct;
}

export const OrderProductCard = ({ orderProduct }: Props) => {
  return (
    <article className="flex gap-4 rounded-[1rem] p-4 shadow-card-shadow">
      <div className="min-w-[150px] overflow-hidden rounded-[0.875rem]">
        <Image src={orderProduct.photo} width={150} height={150} alt={orderProduct.name} />
      </div>
      <section className="w-full">
        <header className="mb-4 flex w-full items-center justify-between">
          <div>
            <Badge className="mr-2 rounded-full bg-[#FFCB77] px-3 py-1 text-secondary-foreground hover:bg-[#FFCB77] hover:opacity-80">
              Plato principal
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button variant={"ghost"} className="shadow-card-shadow">
              <LuTrash size={16} />
            </Button>
          </div>
        </header>
        <div className="mb-4">
          <h4>{orderProduct.name}</h4>
          <p className="max-w-xl text-muted-foreground">{orderProduct.description}</p>
        </div>
        <footer className="flex gap-8 md:gap-12">
          <p>
            Código: <span className="text-muted-foreground">{orderProduct.code}</span>
          </p>
          <p>
            Precio: <span className="text-muted-foreground">${orderProduct.price}</span>
          </p>
          <p>
            Cantidad: <span className="text-muted-foreground">{orderProduct.quantity} Unid.</span>
          </p>
        </footer>
      </section>
    </article>
  );
};
