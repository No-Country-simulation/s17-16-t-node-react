import Link from "next/link";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { PersonalCard } from "./personal-card";

export function PersonalPage() {
  const personalList = [
    {
      id: 1,
      name: "Miguel Loaiza",
      email: "miguel@gmail.com",
      rol: "Mesero/a",
      photo: "/images/personal1.jpg",
      phone: "098-765-4321",
      restaurant: "Burger Joint",
    },
    {
      id: 2,
      name: "Juan Gonzales",
      email: "juan@gmail.com",
      rol: "Chef",
      photo: "/images/personal2.jpg",
      phone: "098-765-4321",
      restaurant: "Burger Joint",
    },
    {
      id: 3,
      name: "Maria Garcia",
      email: "maria@gmail.com",
      rol: "Mesero/a",
      photo: "/images/personal3.jpg",
      phone: "098-765-4321",
      restaurant: "Burger Joint",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h3>Personal</h3>

        <Button className="rounded-[0.875rem]" asChild>
          <Link className="gap-2" href="/d/add">
            <RxPlus size={15} />
            Añadir personal
          </Link>
        </Button>
      </div>
      <Separator />
      {personalList.length < 1 ? (
        <section className="flex min-h-full items-center justify-center text-center">
          <div>
            <h4 className="mb-2">No hay personal disponible</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningún personal, añade uno a continuación
            </p>
            <Button className="rounded-[0.875rem]" asChild>
              <Link className="gap-2" href="/d/add">
                Añadir personal
              </Link>
            </Button>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-4 gap-6">
          {personalList.map((p) => (
            <PersonalCard key={p.id} personal={p} />
          ))}
        </section>
      )}
    </>
  );
}
