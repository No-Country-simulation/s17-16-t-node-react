"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getRestaurant } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RxCamera } from "react-icons/rx";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const RestaurantPage = () => {
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const [restaurantData, setRestaurantData] = useState(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

  const formSchema = z.object({
    avatar: z
      .instanceof(File)
      .refine((file) => file?.type && ALLOWED_FILE_TYPES.includes(file.type), {
        message: "El archivo debe ser una imagen JPEG o PNG.",
      })
      .refine((file) => file?.size && file.size <= MAX_FILE_SIZE, {
        message: "El archivo debe ser menor de 2 MB.",
      })
      .optional(),

    name: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),

    address: z
      .string()
      .min(2, { message: "Debería contener al menos 2 caracteres." })
      .max(50, { message: "Debería contener 50 caracteres como máximo." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      name: "",
      address: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Update preview
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      // Update form value
      form.setValue("avatar", file);
    } else {
      setPreview(undefined);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values", values);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getRestaurant();
        setRestaurantData(res.data);
        setPreview(res.data.avatar);
      } catch (error) {
        console.log("datos", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (restaurantData) {
      form.reset({
        avatar: undefined,
        name: restaurantData.name,
        address: restaurantData.address,
      });
    }
  }, [restaurantData]);

  return (
    <>
      <div className="pb-6">
        <h3>Información de mi restaurante</h3>
      </div>
      <Separator />
      <section className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl">
            <p className="mb-4 text-lg font-normal">Logo de tu restaurante</p>
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem className="relative mb-5 max-w-max overflow-hidden">
                    <FormLabel>
                      <div className="overflow-hidden rounded-full">
                        {preview ? (
                          <div className="cursor-pointer overflow-hidden rounded-full">
                            <Image
                              className="aspect-square object-cover"
                              src={preview}
                              alt="Vista previa de la imagen"
                              width={100}
                              height={100}
                            />
                          </div>
                        ) : (
                          <div className="cursor-pointer overflow-hidden rounded-full">
                            <Image
                              src="/images/logo-example.jpg"
                              alt="Vista previa de la imagen"
                              width={100}
                              height={100}
                            />
                          </div>
                        )}
                        <div className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-secondary p-2">
                          <RxCamera size={20} />
                        </div>
                      </div>
                    </FormLabel>
                    <FormControl className="hidden">
                      <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        aria-placeholder="Cargar imagen"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button
                  type="button"
                  className="rounded-[0.875rem]"
                  variant={"outline"}
                  onClick={handleButtonClick}
                >
                  Subir logo
                </Button>
                <Button type="button" className="rounded-[0.875rem]" variant={"outline"}>
                  Eliminar
                </Button>
              </div>
            </div>
            {form.formState.errors.avatar && (
              <p className="mb-5 text-sm font-medium text-destructive">
                {form.formState.errors.avatar.message}
              </p>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input placeholder="Dirección" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="" type="submit">
              Guardar
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
};
