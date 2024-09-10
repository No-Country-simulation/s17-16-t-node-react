"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import type { IPersonal } from "./personal.types";

interface Props {
  isFormOpen: boolean;
  handleFormState: (open: boolean) => void;
  formContent: null | IPersonal;
}

const PersonalForm = ({ isFormOpen, handleFormState, formContent }: Props) => {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
    lastName: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
    email: z
      .string()
      .email()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
    password: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
    phone: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
    role: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { reset } = form;

  useEffect(() => {
    if (formContent) {
      reset({
        name: formContent.name,
        lastName: formContent.lastName,
        email: formContent.email,
        phone: formContent.phone,
        role: formContent.role,
      });
    } else {
      reset({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
      });
    }
  }, [formContent, reset]);

  return (
    <Sheet open={isFormOpen} onOpenChange={handleFormState}>
      <SheetContent side="right" className="flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>{formContent ? "Editar personal" : "Añadir personal"}</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Nombres" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Apellidos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Correo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="password" placeholder="Contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Teléfono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Rol" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              {formContent ? "Guardar cambios" : "Añadir"}
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default PersonalForm;
