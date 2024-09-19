"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RxMagnifyingGlass } from "react-icons/rx";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const MenuFilters = () => {
  const formSchema = z.object({
    search: z.string().min(2),
    category: z.string().min(2),
    available: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      category: "",
      available: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values", values);
  }

  return (
    <section className="pt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-xl items-center gap-6">
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
                      placeholder="Buscar carta"
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
                    <SelectItem value="Pastas">Pastas</SelectItem>
                    <SelectItem value="Sopas">Sopas</SelectItem>
                    <SelectItem value="Postres">Postres</SelectItem>
                    <SelectItem value="Carnes">Carnes</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Disponible</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
};
