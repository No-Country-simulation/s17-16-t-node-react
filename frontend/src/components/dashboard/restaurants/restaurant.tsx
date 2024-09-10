import Image from "next/image";
import Link from "next/link";
import { LuMapPin, LuMoreHorizontal } from "react-icons/lu";

import { Button } from "@/components/ui/button";

import { RestaurantButton } from "./restaurant-button";

interface Props {
  restaurant: {
    id: number;
    name: string;
    address: string;
    category: string;
    logo: string;
  };
}

const Restaurant = ({ restaurant }: Props) => {
  return (
    <article className="rounded-2xl p-4 shadow-card-shadow">
      <header className="mb-3 flex items-center justify-between">
        <h4 className="text-xl">{restaurant.name}</h4>
        {/* <Button variant={"ghost"} className="rounded-full p-2">
          <LuMoreHorizontal size={16} />
        </Button> */}
        <RestaurantButton />
      </header>
      <div className="mb-3 overflow-hidden rounded-[0.75rem]">
        <Image src={restaurant.logo} width={228} height={176} alt="restaurant logo" />
      </div>
      <div className="mb-3">
        <span className="rounded-full bg-primary px-3 py-1 text-white">{restaurant.category}</span>
      </div>
      <footer>
        <p className="flex items-center gap-2 text-muted-foreground">
          <LuMapPin />
          {restaurant.address}
        </p>
      </footer>
    </article>
  );
};

export default Restaurant;
