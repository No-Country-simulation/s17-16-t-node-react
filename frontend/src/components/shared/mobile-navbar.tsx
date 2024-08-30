import { LuMenu } from "react-icons/lu";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Navbar } from "./navbar";

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <LuMenu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Navbar />
      </SheetContent>
    </Sheet>
  );
}
