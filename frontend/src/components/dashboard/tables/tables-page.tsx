"use client";

import { useEffect, useState } from "react";
import { getTables } from "@/services/orders";
import { RxPlus } from "react-icons/rx";

import type { Table } from "@/types/tables";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert } from "@/components/shared/alert";

import { TableCard } from "./table-card";
import { TablesForm } from "./tables-form";

export function TablesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formContent, setFormContent] = useState<null | Table>(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [tables, setTables] = useState<Table[]>([]);

  const handleFormState = (state: boolean) => {
    setFormContent(null);
    setIsFormOpen(state);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTables();
        setTables(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    void getData();
  }, []);

  return (
    <>
      <Alert
        title="¿Seguro que deseas eliminar esta mesa?"
        description="Esta acción eliminará la mesa de forma permanente."
        confirm="Eliminar"
        cancel="Cancelar"
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
      <TablesForm
        isFormOpen={isFormOpen}
        handleFormState={handleFormState}
        formContent={formContent}
      />
      <div className="flex items-center justify-between">
        <h3>Salón</h3>
        <Button className="cursor-pointer rounded-[0.875rem]" onClick={() => setIsFormOpen(true)}>
          <div className="flex gap-2">
            <RxPlus size={16} />
            Añadir mesa
            <span className="sr-only">Toggle product form</span>
          </div>
        </Button>
      </div>
      <Separator />
      {tables.length < 1 ? (
        <section className="flex min-h-full items-center justify-center text-center">
          <div>
            <h4 className="mb-2">No hay mesas disponibles</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningúna mesa, añade una a continuación
            </p>
            <Button
              className="cursor-pointer rounded-[0.875rem]"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="flex gap-2">
                <RxPlus size={16} />
                Añadir mesa
                <span className="sr-only">Toggle product form</span>
              </div>
            </Button>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(100px,150px))] gap-4">
          {tables.map((t) => (
            <TableCard
              key={t.id}
              table={t}
              setFormContent={setFormContent}
              setIsAlertOpen={setIsAlertOpen}
              setIsFormOpen={setIsFormOpen}
            />
          ))}
        </section>
      )}
    </>
  );
}
