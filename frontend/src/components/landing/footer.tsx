import { LogoRestify } from "@/icons";
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl py-20 text-center">
      <div className="mb-10 flex flex-col items-center gap-8">
        <LogoRestify />
        <div className="flex gap-6">
          <RiYoutubeFill size={24} />
          <RiFacebookCircleFill size={24} />
          <RiInstagramFill size={24} />
          <RxLinkedinLogo size={24} />
        </div>
      </div>
      <Separator className="mb-10" />
      <p className="text-muted-foreground">© restify. Todos los derechos reservados.</p>
    </footer>
  );
};
