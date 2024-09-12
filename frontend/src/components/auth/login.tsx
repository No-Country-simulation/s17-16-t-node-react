"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axiosInstance from "@/lib/axiosInstance";
import { getExpToken, setCookie } from "@/lib/cookieUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";

const formSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

interface LoginResponse {
  token: string;
}

export function LoginPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post(
        "/users/login",
        values,
      );
      const { token } = response.data;
      const expiresDate = getExpToken(token);

      setCookie("token", token, expiresDate);
      router.push("/d");
    } catch (error) {
      console.error("Error logging in", error);
      throw error;
    }
  }

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="relative hidden h-full w-full lg:block">
        <Image src="/images/bg-log.jpg" alt="Image" layout="fill" objectFit="cover" />
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
