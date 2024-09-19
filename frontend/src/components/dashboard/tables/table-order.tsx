"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/globalStore";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuTrash } from "react-icons/lu";
import { toast } from "sonner";

import type { IProduct } from "@/types/menu";
import type { Order, OrderProduct, OrderStatus } from "@/types/orders";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { MenuFilters } from "./menu-filters";

interface Props {
  tableNumber: string;
}

export const TableOrder = ({ tableNumber }: Props) => {
  const { menu, addOrder, orders, updateOrder } = useGlobalStore((state) => ({
    menu: state.menu,
    addOrder: state.addOrder,
    updateOrder: state.updateOrder,
    orders: state.orders,
  }));

  const tableOrder = orders.find((o) => o.tableNumber === tableNumber);

  const [order, setOrder] = useState<Order>(() =>
    tableOrder
      ? tableOrder
      : {
          id: "",
          description: "",
          tableNumber: tableNumber,
          products: [],
          total: 0,
          status: "Listo",
        },
  );

  const router = useRouter();

  const handleStatusChange = (newStatus: OrderStatus) => {
    setOrder((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const handleSubmitOrder = () => {
    const total = calculateTotal();
    const orderDetails = {
      id: Date.now().toString(),
      tableNumber: tableNumber,
      description: order.description,
      products: order.products,
      total: total,
      status: order.status,
    };
    // console.log(orderDetails);

    if (tableOrder) {
      updateOrder(order);
      toast.success(`Pedido actualizado`);
    } else {
      addOrder(orderDetails);
      toast.success(`Pedido añadido`);
    }

    setOrder({
      id: "",
      total: 0,
      description: "",
      tableNumber: tableNumber,
      products: [],
      status: "Esperando",
    });

    router.push("/d/dining-area");
  };

  const handleAddProduct = (product: IProduct) => {
    setOrder((prev) => {
      const existingProduct = prev.products.find((p) => p.id === product.id);

      if (existingProduct) {
        const newQuantity = existingProduct.quantity + 1;
        if (newQuantity <= product.stock) {
          return {
            ...prev,
            products: prev.products.map((p) =>
              p.id === product.id ? { ...p, quantity: newQuantity } : p,
            ),
          };
        } else {
          return prev;
        }
      } else {
        if (product.stock > 0) {
          return {
            ...prev,
            products: [...prev.products, { ...product, quantity: 1 }],
          };
        } else {
          return prev;
        }
      }
    });
  };

  const handleIncrement = (productId: string) => {
    setOrder((prev) => {
      const product = prev.products.find((p) => p.id === productId);

      if (product) {
        if (product.quantity < product.stock) {
          return {
            ...prev,
            products: prev.products.map((p) =>
              p.id === productId ? { ...p, quantity: p.quantity + 1 } : p,
            ),
          };
        }
      }

      return prev;
    });
  };
  const handleDecrement = (productId: string) => {
    setOrder((prev) => {
      const product = prev.products.find((p) => p.id === productId);

      if (product && product.quantity > 1) {
        return {
          ...prev,
          products: prev.products.map((p) =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p,
          ),
        };
      }

      return prev;
    });
  };

  const handleRemove = (productId: string) => {
    setOrder((prev) => {
      const productToRemove = prev.products.find((p) => p.id === productId);

      if (productToRemove) {
        const updatedProducts = prev.products.filter((p) => p.id !== productId);
        return {
          ...prev,
          products: updatedProducts,
        };
      }

      return prev;
    });
  };

  function formatPrice(price: number): string {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const calculateTotal = () => {
    return order.products.reduce((total, product) => {
      return total + parseFloat(product.price) * product.quantity;
    }, 0);
  };

  return (
    <>
      <div className="flex items-center justify-between pb-6">
        <div className="">
          <h3>Pedido - Mesa #{tableNumber} </h3>
          <div className="flex items-center">
            {tableOrder && (
              <div className="my-2 flex items-center gap-2 p-2">
                <span className="text-muted-foreground">Estado: </span>
                <Select value={order.status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {tableOrder.status === "Esperando" && (
                      <>
                        <SelectItem value="Esperando">Esperando</SelectItem>
                      </>
                    )}
                    {tableOrder.status === "Listo" && (
                      <>
                        <SelectItem value="Listo">Listo</SelectItem>
                        <SelectItem value="Entregado">Entregado</SelectItem>
                      </>
                    )}

                    {tableOrder.status === "Entregado" && (
                      <>
                        <SelectItem value="Entregado">Entregado</SelectItem>
                        <SelectItem value="Terminado">Terminado</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>

                {tableOrder.status !== "Esperando" && tableOrder.status !== "Preparando" && (
                  <div>
                    <Button
                      variant={"outline"}
                      onClick={() => {
                        handleSubmitOrder();
                        router.push("/d/dining-area");
                      }}
                      className=""
                    >
                      Actualizar Estado
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <Button className="rounded-full">
          <Link className="flex gap-4" href={"/d/dining-area"}>
            <FaArrowLeftLong size={18} />
            Volver
          </Link>
        </Button>
      </div>
      <Separator />
      <div className="flex max-h-[600px] min-h-[400px] justify-between gap-8">
        <section className="min-w-[400px] overflow-auto rounded-[1rem] p-4 shadow-card-shadow">
          <h4>Menú</h4>
          <MenuFilters />
          {menu.map((product) => (
            <div
              key={product.id}
              className="mb-2 flex items-center rounded-[0.875rem] p-2 shadow-card-shadow"
            >
              <div className="relative mr-2 h-16 w-16 overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="absolute object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 self-start text-sm">
                <span className="line-clamp-1 font-medium">{product.name}</span>
                <span className="line-clamp-1">
                  <span className="text-muted-foreground">Precio :</span>{" "}
                  {formatPrice(parseFloat(product.price))}
                </span>
                <span className="line-clamp-1">
                  <span className="text-muted-foreground">Stock:</span> {product.stock}
                </span>
              </div>
              <Button variant={"outline"} onClick={() => handleAddProduct(product)}>
                Añadir
              </Button>
            </div>
          ))}
        </section>
        <section className="w-full overflow-auto rounded-[1rem] p-4 shadow-card-shadow">
          <div>
            <h4 className="mb-6 text-center">Pedido</h4>
            {order.products.length > 0 ? (
              order.products.map((product) => (
                <div key={product.id} className="mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="absolute object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 self-center text-sm">
                      <span className="line-clamp-1">{product.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            handleDecrement(product.id);
                          }}
                        >
                          -
                        </Button>
                      </div>
                      <Input
                        className="inputArrows h-8 w-14 text-right text-xs"
                        type="number"
                        min="1"
                        value={product.quantity}
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          handleIncrement(product.id);
                        }}
                      >
                        +
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleRemove(product.id)}
                      >
                        <LuTrash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-8 text-center text-sm italic text-muted-foreground">
                No hay pedidos
              </p>
            )}
          </div>
          <section className={`${order.products.length < 1 ? "hidden" : ""} mt-4`}>
            <div className="">
              <p className="text-right">
                <span className="mr-4 text-muted-foreground">Total:</span>{" "}
                <span className="text-lg font-medium">{formatPrice(calculateTotal())}</span>
              </p>
            </div>
            <div>
              <label>
                <p className="mb-2">Descripción:</p>
                <textarea
                  value={order.description}
                  onChange={(e) => setOrder((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full resize-none rounded-[0.875rem] border border-muted-foreground p-2"
                  placeholder="Escribir nota..."
                ></textarea>
              </label>
            </div>
            <div className={`mt-8 text-center`}>
              <Button onClick={handleSubmitOrder} className="">
                {tableOrder ? "Guardar Cambios" : "Enviar Pedido"}
              </Button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
