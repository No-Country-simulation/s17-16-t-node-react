"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RxMagnifyingGlass } from "react-icons/rx";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MenuFilters = () => {
  const formSchema = z.object({
    search: z.string().min(2),
    category: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values", values);
  }

  return (
    <section className="mb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <div className="relative flex items-center">
                    <RxMagnifyingGlass size={18} className="absolute left-1 opacity-50" />
                    <Input
                      className="rounded-[0.875rem] pl-6 pr-3"
                      type="search"
                      placeholder="Buscar"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="rounded-[0.875rem]">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pastas">Pastas</SelectItem>
                    <SelectItem value="Carnes">Carnes</SelectItem>
                    <SelectItem value="Sopas">Sopas</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
};
