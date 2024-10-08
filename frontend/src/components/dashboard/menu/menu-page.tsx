"use client";

import { useState } from "react";
import { useGlobalStore } from "@/store/globalStore";
import { RxPlus } from "react-icons/rx";

import type { IProduct } from "@/types/menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert } from "@/components/shared/alert";

import { MenuCard } from "./menu-card";
import { MenuFilters } from "./menu-filters";
import { MenuForm } from "./menu-form";

export const MenuPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formContent, setFormContent] = useState<null | IProduct>(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleFormState = (state: boolean) => {
    setFormContent(null);
    setIsFormOpen(state);
  };

  const { menu } = useGlobalStore((state) => ({
    menu: state.menu,
  }));

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
      {menu.length < 1 ? (
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
          {menu.map((p) => (
            <MenuCard
              key={p.id}
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
