"use client";

import { useEffect, useState } from "react";
import { getStaff } from "@/services/staff";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { PersonalCard } from "./personal-card";
import PersonalForm from "./personal-form";
import type { IPersonal } from "./personal.types";

export function PersonalPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formContent, setFormContent] = useState<null | IPersonal>(null);

  const [personalList, setPersonalList] = useState<IPersonal[]>([]);

  const handleFormState = (state: boolean) => {
    setFormContent(null);
    setIsFormOpen(state);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getStaff();
        setPersonalList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    void getData();
  }, []);

  return (
    <>
      <PersonalForm
        isFormOpen={isFormOpen}
        handleFormState={handleFormState}
        formContent={formContent}
      />
      <div className="flex items-center justify-between pb-6">
        <h3>Personal</h3>
        <Button className="cursor-pointer rounded-[0.875rem]" onClick={() => setIsFormOpen(true)}>
          <div className="flex gap-2">
            <RxPlus size={16} />
            Añadir personal
            <span className="sr-only">Toggle personal form</span>
          </div>
        </Button>
      </div>
      <Separator />
      {personalList.length < 1 ? (
        <section className="flex min-h-full items-center justify-center pt-6 text-center">
          <div>
            <h4 className="mb-2">No hay personal disponible</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningún personal, añade uno a continuación
            </p>
            <Button
              className="cursor-pointer rounded-[0.875rem]"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="flex gap-2">
                <RxPlus size={16} />
                Añadir personal
              </div>
            </Button>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-4 gap-6 pt-6">
          {personalList.map((p) => (
            <PersonalCard
              key={p.id}
              personal={p}
              setIsFormOpen={setIsFormOpen}
              setFormContent={setFormContent}
            />
          ))}
        </section>
      )}
    </>
  );
}
