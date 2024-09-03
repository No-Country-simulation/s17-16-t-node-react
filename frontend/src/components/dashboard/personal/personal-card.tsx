import Image from "next/image";

import { PersonalButton } from "./personal-button";

interface Props {
  personal: {
    id: number;
    name: string;
    email: string;
    rol: string;
    photo: string;
    phone: string;
    restaurant: string;
  };
}

export const PersonalCard = ({ personal }: Props) => {
  return (
    <article className="rounded-2xl p-4 shadow-card-shadow">
      <header className="mb-3 flex items-center justify-between">
        <h4 className="text-xl">{personal.name}</h4>
        <PersonalButton />
      </header>
      <div className="mb-3 overflow-hidden rounded-[0.75rem]">
        <Image src={personal.photo} width={228} height={176} alt={`${personal.name} photo`} />
      </div>
      <div className="mb-3">
        <span className="rounded-full bg-primary px-3 py-1 text-white">{personal.rol}</span>
      </div>
      <footer>
        <p>
          Correo: <span className="text-muted-foreground">{personal.email}</span>
        </p>

        <p>
          Teléfono: <span className="text-muted-foreground">{personal.phone}</span>
        </p>

        <p>
          Trabaja en: <span className="font-semibold">{personal.restaurant}</span>
        </p>
      </footer>
    </article>
  );
};
