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

interface Props {
  isFormOpen: boolean;
  handleFormState: (open: boolean) => void;
  formContent: null;
}

export const OrderForm = ({ isFormOpen, handleFormState, formContent }: Props) => {
  const formSchema = z.object({
    mesa: z.string(),
    description: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mesa: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { reset } = form;

  useEffect(() => {
    if (formContent) {
      reset({});
    } else {
      reset({
        mesa: "",
        description: "",
      });
    }
  }, [formContent, reset]);

  return (
    <Sheet open={isFormOpen} onOpenChange={handleFormState}>
      <SheetContent side="right" className="flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>{formContent ? "Editar pedido" : "Añadir pedido"}</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="mesa"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="rounded-[0.875rem]">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar mesa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
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

            <Button className="w-full" type="submit">
              {formContent ? "Guardar cambios" : "Añadir"}
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
