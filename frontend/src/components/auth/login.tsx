"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { loginSchema, type LoginRequest } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";

export function LoginPage() {
  const router = useRouter();
  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginRequest) {
    loginUser(values)
      .then((response) => {
        toast.success(`Bienvenido ${response.data.user?.name}`);
        router.push("/d");
      })
      .catch(() => {
        form.reset();
        toast.error("Credenciales incorrectas");
      });
  }

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="relative hidden h-full w-full lg:block">
        <Image
          src="/images/bg-log.jpg"
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
            <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                Ingresar
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center font-medium text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="text-primary underline">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
