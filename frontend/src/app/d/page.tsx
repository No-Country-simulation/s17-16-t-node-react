"use client";

import { useEffect } from "react";
import { useGlobalStore } from "@/store/globalStore";

import { RestaurantPage } from "@/components/dashboard/restaurant/restaurant-page";

export default function Dashboard() {
  const { getMenu } = useGlobalStore((state) => ({
    getMenu: state.getMenu,
  }));

  useEffect(() => {
    const getData = async () => {
      await getMenu();
    };

    void getData();
  }, [getMenu]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <RestaurantPage />
    </main>
  );
}
