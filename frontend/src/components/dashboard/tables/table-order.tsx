"use client";

import { useState } from "react";
import Image from "next/image";
import { useGlobalStore } from "@/store/globalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TiDeleteOutline } from "react-icons/ti";
import type { z } from "zod";

import { orderSchema, type OrderProduct } from "@/types/orders";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const TableOrder = ({ tableNumber }: { tableNumber: string }) => {
  const { menu } = useGlobalStore((state) => ({
    menu: state.menu,
  }));
  const [selectedProducts, setSelectedProducts] = useState<OrderProduct[] | []>([]);

  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      tableNumber: tableNumber,
      products: selectedProducts,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof orderSchema>) {
    console.log(values);
  }

  function handleAddProduct(product: OrderProduct) {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        // Update quantity if product already in list
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      } else {
        // Add new product
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function handleRemoveProduct(productId: string) {
    setSelectedProducts((prev) => prev.filter((product) => product.id !== productId));
  }

  return (
    <>
      <div className="flex items-center justify-between pb-6">
        <h3>Pedido - Mesa #{tableNumber}</h3>
      </div>
      <Separator />
      <section className="pt-6">
        {/* <Button
          disabled
          variant={"destructive"}
          className="flex items-center gap-2 rounded-[0.875rem]"
        >
          Cancelar pedido
          <TiDeleteOutline size={24} />
        </Button> */}

        <div>
          {menu.map((product) => (
            <div key={product.id} className="mb-2 flex">
              <Image src={product.photo} width={100} height={100} alt={product.name} />
              <div>
                <h5 className="font-semibold">{product.name}</h5>
                <p>
                  Precio: <span>{product.price}</span>
                </p>
                <p>
                  Stock: <span>{product.stock}</span>
                </p>

                <div>
                  <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                  <Button>Añadir</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[320px]">
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
              Guardar cambios
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
};
