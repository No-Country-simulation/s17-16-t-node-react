"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import type { IProduct } from "./menu.types";

interface Props {
  isFormOpen: boolean;
  handleFormState: (open: boolean) => void;
  formContent: null | IProduct;
}

export const MenuForm = ({ isFormOpen, handleFormState, formContent }: Props) => {
  const formSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    category: z.string(),
    stock: z.string(),
    code: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      code: "",
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
        description: formContent.description,
        price: formContent.price,
        category: formContent.category,
        stock: formContent.stock.toString(),
        code: formContent.code,
      });
    } else {
      reset({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        code: "",
      });
    }
  }, [formContent, reset]);

  return (
    <Sheet open={isFormOpen} onOpenChange={handleFormState}>
      <SheetContent side="right" className="flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>{formContent ? "Editar producto" : "Añadir producto"}</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="number" placeholder="Código" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input placeholder="Descripción" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="number" placeholder="Precio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="number" placeholder="Cantidad disponible" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="rounded-[0.875rem]">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="one">One</SelectItem>
                      <SelectItem value="two">Two</SelectItem>
                      <SelectItem value="three">Three</SelectItem>
                    </SelectContent>
                  </Select>
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