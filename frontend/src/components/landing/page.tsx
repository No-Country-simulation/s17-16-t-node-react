import Image from "next/image";
import { LuBadgeCheck, LuHeadphones, LuMonitorCheck } from "react-icons/lu";
import { RxCheck, RxChevronRight } from "react-icons/rx";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "../ui/button";

export const Landing = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-0 h-[42.5rem] bg-primary/10">{}</div>
      <section className="m-auto max-w-screen-xl py-20">
        <article className="relative z-0 mx-auto mb-14 flex max-w-[618px] flex-col items-center gap-9 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-semibold leading-[58px] text-foreground">
              Administra tu restaurante con eficiencia y facilidad
            </h1>
            <p className="text-muted-foreground">
              Simplifica la gestión diaria de tu restaurante con nuestra plataforma intuitiva.
              Registra tu negocio, delega tareas y optimiza el flujo de trabajo entre meseros,
              gerentes y cocineros.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant={"secondary"}
              className="flex items-center justify-center gap-3 rounded-[0.875rem] bg-background px-8 py-2"
            >
              Ver precios
              <RxChevronRight size={16} />
            </Button>
            <Button className="rounded-[0.875rem] bg-primary px-8 py-2">
              Principales características
            </Button>
          </div>
        </article>

        {/* <article className="relative z-0"> */}
        <Image
          className="relative z-0 mx-auto"
          width={956}
          height={560}
          src="/images/macbook.png"
          alt="macbook image"
        />
        {/* </article> */}
      </section>

      <section className="m-auto max-w-screen-xl py-20 text-center">
        <article className="mx-auto mb-9 max-w-[646px]">
          <h2 className="mb-3 text-4xl font-semibold leading-[42px] text-foreground">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground">
            Optimiza la gestión de tu restaurante con herramientas diseñadas para simplificar tus
            operaciones y mejorar la eficiencia, todo en una sola plataforma.
          </p>
        </article>

        <article className="mb-9 flex gap-8">
          <div className="flex flex-col items-center rounded-3xl p-6 shadow-card-shadow">
            <div className="mb-4 flex max-w-min items-center justify-center rounded-[0.5rem] bg-[rgba(254,109,115,0.20)] p-2">
              <LuBadgeCheck size={24} />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold">Experiencia</h3>
              <p className="text-sm text-muted-foreground">
                Más de 10 años perfeccionando soluciones para restaurantes. Nuestra trayectoria
                garantiza una plataforma confiable.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-3xl p-6 shadow-card-shadow">
            <div className="mb-4 flex max-w-min items-center justify-center rounded-[0.5rem] bg-[rgba(255,203,119,0.20)] p-2">
              <LuMonitorCheck size={24} />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold">Resultados</h3>
              <p className="text-sm text-muted-foreground">
                +500 restaurantes gestionados con mejoras significativas en eficiencia y
                satisfacción del cliente.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-3xl p-6 shadow-card-shadow">
            <div className="mb-4 flex max-w-min items-center justify-center rounded-[0.5rem] bg-[rgba(1,124,113,0.20)] p-2">
              <LuHeadphones size={24} />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold">Soporte 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Siempre a tu lado, nuestro equipo de soporte está disponible las 24 horas para
                asegurar que tu restaurante funcione sin problemas.
              </p>
            </div>
          </div>
        </article>
        <Button className="rounded-[0.875rem] px-8 py-2">
          Comienza ahora
          <RxChevronRight className="ml-2" size={16} />
        </Button>
      </section>

      <section className="m-auto max-w-screen-xl py-20 text-center">
        <h2 className="mx-auto mb-10 max-w-[646px] text-4xl font-semibold">
          Funciones diseñadas para ayudar a su restaurante a crecer
        </h2>

        <Tabs defaultValue="menu">
          <TabsList className="mb-9 p-2">
            <TabsTrigger className="px-20 text-sm" value="menu">
              Menu
            </TabsTrigger>
            <TabsTrigger className="px-20 text-sm" value="roles">
              Roles
            </TabsTrigger>
            <TabsTrigger className="px-20 text-sm" value="reports">
              Reportes
            </TabsTrigger>
            <TabsTrigger className="px-20 text-sm" value="reservations">
              Reservas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu">
            <article className="flex items-center justify-between gap-20">
              <div className="max-w-[530px] text-left">
                <h2 className="mb-2 text-4xl font-semibold">Crea tu menú digitalizado</h2>
                <p className="leading-7 text-muted-foreground">
                  Diseña y actualiza tu menú directamente en la app. Los meseros pueden tomar
                  pedidos con precisión y enviarlos automáticamente a la cocina, mejorando la
                  eficiencia y reduciendo errores.
                </p>
              </div>
              <Image src="/images/menu-img.png" width={588} height={300} alt="menu image" />
            </article>
          </TabsContent>
          <TabsContent value="roles">Roles</TabsContent>
          <TabsContent value="reports">Reportes</TabsContent>
          <TabsContent value="reservations">Reservas</TabsContent>
        </Tabs>
      </section>
      <section className="m-auto max-w-screen-xl py-20">
        <h2 className="mb-10 text-center text-4xl font-semibold">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-3 gap-8">
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.25rem] p-6 text-sm shadow-card-shadow">
            <p className="mb-6 text-muted-foreground">
              Sinceramente, en cuanto a reservas, esta aplicación es uno de los mejores sistemas de
              reservas con los que he trabajado. Y el equipo de soporte es genial. Te responden por
              la noche, no importa lo tarde que sea. Y esto es lo que necesita un restaurante.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" alt="avatar image" width={40} height={40} />
              <div>
                <p className="font-medium">Kevin Brown</p>
                <p className="text-muted-foreground">Dueño, Restaurante WolfPeach</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="m-auto max-w-screen-xl py-20">
        <h2 className="mx-auto mb-24 max-w-[646px] text-center text-4xl font-semibold">
          Precios que se adaptan a tus necesidades
        </h2>
        <div className="mx-auto flex w-max gap-8">
          <article className="max-w-[380px] rounded-[1rem] px-6 py-8 shadow-card-shadow">
            <h3 className="mb-6 text-2xl font-bold">Base</h3>
            <ul className="mb-6 max-w-[80%]">
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
            </ul>
            <p className="mb-6">
              $ <span className="text-2xl font-bold">123</span>{" "}
              <span className="text-muted-foreground">/month</span>
            </p>
            <Button variant="secondary" className="w-full rounded-[0.875rem] py-2">
              Elegir
            </Button>
          </article>
          <article className="max-w-[380px] -translate-y-12 rounded-[1rem] px-6 py-8 shadow-card-shadow">
            <h3 className="mb-6 text-2xl font-bold">Pro</h3>
            <ul className="mb-6 max-w-[80%]">
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
            </ul>
            <p className="mb-6">
              $ <span className="text-2xl font-bold">123</span>{" "}
              <span className="text-muted-foreground">/month</span>
            </p>
            <Button className="w-full rounded-[0.875rem] py-2">Elegir</Button>
          </article>
          <article className="max-w-[380px] rounded-[1rem] px-6 py-8 shadow-card-shadow">
            <h3 className="mb-6 text-2xl font-bold">Enterprise</h3>
            <ul className="mb-6 max-w-[80%]">
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
              <li className="mb-4 flex gap-4">
                <span>
                  <RxCheck size={24} />
                </span>
                Upload Video with 4K Resolution
              </li>
            </ul>
            <p className="mb-6">
              $ <span className="text-2xl font-bold">123</span>{" "}
              <span className="text-muted-foreground">/month</span>
            </p>
            <Button variant="secondary" className="w-full rounded-[0.875rem] py-2">
              Elegir
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};
