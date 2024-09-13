"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { registerSchema, type RegisterRequest } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";

export function RegisterPage() {
  const router = useRouter();

  const form = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      lastName: "",
    },
  });

  async function onSubmit(values: RegisterRequest) {
    registerUser(values)
      .then(() => {
        toast.success("Gracias por registrarte. Ahora puedes iniciar sesión");
        router.push("/login");
      })
      .catch(() => {
        form.reset();
        toast.error("Vuelve a intentarlo");
      });
  }

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="relative hidden h-full w-full lg:block">
        <Image
          src="/images/bg-reg.jpg"
          alt="Image"
          width={1400}
          height={800}
          priority
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-semibold">Crea tu cuenta</h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu nombre"
                        className="rounded-[0.875rem] bg-[#EFEFEF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu apellido"
                        className="rounded-[0.875rem] bg-[#EFEFEF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu correo electrónico"
                        className="rounded-[0.875rem] bg-[#EFEFEF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="rounded-[0.875rem] bg-[#EFEFEF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full rounded-[0.875rem]">
                Registrarse
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center font-medium text-muted-foreground">
            ¿Tienes cuenta?{" "}
            <Link href="/login" className="text-primary underline">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
