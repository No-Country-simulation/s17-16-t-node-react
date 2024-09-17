"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { tableFormSchema, type Table } from "@/types/tables";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface Props {
  isFormOpen: boolean;
  handleFormState: (open: boolean) => void;
  formContent: null | Table;
}

export const TablesForm = ({ isFormOpen, handleFormState, formContent }: Props) => {
  const form = useForm<z.infer<typeof tableFormSchema>>({
    resolver: zodResolver(tableFormSchema),
    defaultValues: {
      tableNumber: "",
      chairs: "",
    },
  });

  function onSubmit(values: z.infer<typeof tableFormSchema>) {
    console.log(values);
  }

  const { reset } = form;

  useEffect(() => {
    if (formContent) {
      reset({
        tableNumber: formContent.tableNumber,
        chairs: formContent.chairs,
      });
    } else {
      reset({
        tableNumber: "",
        chairs: "",
      });
    }
  }, [formContent, reset]);

  return (
    <Sheet open={isFormOpen} onOpenChange={handleFormState}>
      <SheetContent side="right" className="flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>{formContent ? "Editar mesa" : "Añadir mesa"}</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="tableNumber"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="number" placeholder="N° de Mesa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="chairs"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input type="number" placeholder="Sillas disponibles" {...field} />
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
