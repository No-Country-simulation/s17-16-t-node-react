import Image from "next/image";
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="py-20 text-center">
      <div className="mb-20 flex flex-col items-center gap-8">
        <Image src="/logo.png" alt="logo" width={122} height={30} />
        <div className="flex gap-6">
          <RiYoutubeFill size={24} />
          <RiFacebookCircleFill size={24} />
          <RiInstagramFill size={24} />
          <RxLinkedinLogo size={24} />
        </div>
      </div>
      <p className="text-muted-foreground">© restify. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
