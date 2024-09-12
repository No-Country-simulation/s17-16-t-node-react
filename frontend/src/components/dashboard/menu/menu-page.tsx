"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert } from "@/components/shared/alert";

import { MenuCard } from "./menu-card";
import { MenuFilters } from "./menu-filters";
import { MenuForm } from "./menu-form";
import type { IProduct } from "./menu.types";

export const MenuPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formContent, setFormContent] = useState<null | IProduct>(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [products, setProducts] = useState<IProduct[]>([]);

  const handleFormState = (state: boolean) => {
    setFormContent(null);
    setIsFormOpen(state);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
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
      <MenuForm
        isFormOpen={isFormOpen}
        handleFormState={handleFormState}
        formContent={formContent}
      />
      <div className="flex items-center justify-between pb-6">
        <h3>Carta</h3>
        <Button className="cursor-pointer rounded-[0.875rem]" onClick={() => setIsFormOpen(true)}>
          <div className="flex gap-2">
            <RxPlus size={16} />
            Añadir producto
            <span className="sr-only">Toggle product form</span>
          </div>
        </Button>
      </div>
      <Separator />
      <MenuFilters />
      {products.length < 1 ? (
        <section className="flex min-h-full items-center justify-center pt-6 text-center">
          <div>
            <h4 className="mb-2">No hay productos disponible</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningún producto, añade uno a continuación
            </p>
            <Button
              className="cursor-pointer rounded-[0.875rem]"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="flex gap-2">
                <RxPlus size={16} />
                Añadir producto
              </div>
            </Button>
          </div>
        </section>
      ) : (
        <section className="flex flex-col gap-4 pt-6">
          {products.map((p) => (
            <MenuCard
              key={p.code}
              setIsAlertOpen={setIsAlertOpen}
              setFormContent={setFormContent}
              setIsFormOpen={setIsFormOpen}
              product={p}
            />
          ))}
        </section>
      )}
    </>
  );
};
