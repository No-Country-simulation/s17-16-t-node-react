import Image from "next/image";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="flex h-full items-center justify-between">
        <Image src="/logo.png" alt="logo" width={122} height={30} />
        <ul className="flex gap-4">
          <li>
            <Button variant="ghost" className="rounded-[12px]">
              Iniciar sesión
            </Button>
          </li>
          <li>
            <Button className="rounded-[12px]">Pruébalo gratis</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
