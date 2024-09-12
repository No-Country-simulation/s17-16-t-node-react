import type { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { LiaEditSolid } from "react-icons/lia";
import { LuTrash } from "react-icons/lu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { IProduct } from "./menu.types";

interface Props {
  product: IProduct;
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>;
  setFormContent: Dispatch<SetStateAction<IProduct | null>>;
  setIsFormOpen: (open: boolean) => void;
}

export const MenuCard = ({ product, setIsAlertOpen, setFormContent, setIsFormOpen }: Props) => {
  return (
    <article className="flex gap-4 rounded-[1rem] p-4 shadow-card-shadow">
      <div className="min-w-[150px] overflow-hidden rounded-[0.875rem]">
        <Image src={product.photo} width={150} height={150} alt={product.name} />
      </div>
      <section className="w-full">
        <header className="mb-4 flex w-full items-center justify-between">
          <div>
            <Badge className="mr-2 rounded-full bg-[#FFCB77] px-3 py-1 text-secondary-foreground hover:bg-[#FFCB77] hover:opacity-80">
              Plato principal
            </Badge>
            {product.available > 0 ? (
              <Badge className="mr-2 rounded-full px-3 py-1">Disponible</Badge>
            ) : (
              <Badge className="rounded-full bg-destructive px-3 py-1 hover:bg-destructive hover:opacity-80">
                No disponible
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant={"ghost"}
              className="shadow-card-shadow"
              onClick={() => setIsAlertOpen(true)}
            >
              <LuTrash size={16} />
            </Button>
            <Button
              variant={"ghost"}
              className="shadow-card-shadow"
              onClick={() => {
                setIsFormOpen(true);
                setFormContent(product);
              }}
            >
              <LiaEditSolid size={16} />
            </Button>
          </div>
        </header>
        <div className="mb-4">
          <h4>{product.name}</h4>
          <p className="max-w-xl text-muted-foreground">{product.description}</p>
        </div>
        <footer className="flex gap-8 md:gap-12">
          <p>
            Código: <span className="text-muted-foreground">{product.code}</span>
          </p>
          <p>
            Precio: <span className="text-muted-foreground">${product.price}</span>
          </p>
          <p>
            Stock: <span className="text-muted-foreground">{product.stock} Unid.</span>
          </p>
          <p>
            Disponible: <span className="text-muted-foreground">{product.available} Unid.</span>
          </p>
        </footer>
      </section>
    </article>
  );
};
