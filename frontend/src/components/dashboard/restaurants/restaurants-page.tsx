import Link from "next/link";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Restaurant from "./restaurant";

export function RestaurantsPage() {
  const restaurants = [
    {
      id: 1,
      name: "Burger Joint 1",
      address: "Nueva York, EE.UU.",
      category: "Pizzería",
      logo: "/images/res-logo1.jpg",
    },
    {
      id: 2,
      name: "Burger Joint 2",
      address: "Tokio, Japón.",
      category: "Shusi",
      logo: "/images/res-logo2.jpg",
    },
    {
      id: 3,
      name: "Burger Joint 3",
      address: "Nueva York, EE.UU.",
      category: "Pizzería",
      logo: "/images/res-logo1.jpg",
    },
    {
      id: 4,
      name: "Burger Joint 4",
      address: "Tokio, Japón.",
      category: "Shusi",
      logo: "/images/res-logo2.jpg",
    },
    {
      id: 5,
      name: "Burger Joint 5",
      address: "Nueva York, EE.UU.",
      category: "Pizzería",
      logo: "/images/res-logo1.jpg",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h3>Tus Restaurantes</h3>

        <Button className="rounded-[0.875rem]" asChild>
          <Link className="gap-2" href="/d/add">
            <RxPlus size={15} />
            Crear restaurante
          </Link>
        </Button>
      </div>
      <Separator />
      {restaurants.length < 1 ? (
        <section className="flex min-h-full items-center justify-center text-center">
          <div>
            <h4 className="mb-2">No hay restaurantes</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              No tienes ningún restaurante, añade uno a continuación
            </p>
            <Button className="rounded-[0.875rem]" asChild>
              <Link className="gap-2" href="/d/add">
                Añadir restaurante
              </Link>
            </Button>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-4 gap-6">
          {restaurants.map((r) => (
            <Restaurant key={r.id} restaurant={r} />
          ))}
        </section>
      )}
    </>
  );
}
