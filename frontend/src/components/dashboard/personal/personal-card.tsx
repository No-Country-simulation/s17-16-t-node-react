import type { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { PersonalButton } from "./personal-button";
import type { IPersonal } from "./personal.types";

interface Props {
  personal: IPersonal;
  setIsFormOpen: (open: boolean) => void;
  setFormContent: Dispatch<SetStateAction<IPersonal | null>>;
}

export const PersonalCard = ({ personal, setIsFormOpen, setFormContent }: Props) => {
  return (
    <article className="rounded-2xl p-4 shadow-card-shadow">
      <header className="mb-3 flex items-center justify-between">
        <h4 className="text-lg">
          {personal.name} {personal.lastName}
        </h4>
        <PersonalButton
          setIsFormOpen={setIsFormOpen}
          personal={personal}
          setFormContent={setFormContent}
        />
      </header>
      <div className="mb-3 overflow-hidden rounded-[0.75rem]">
        <Image src={personal.avatar} width={228} height={176} alt={`${personal.name} photo`} />
      </div>
      <Badge className="mb-3 rounded-full px-3 py-1">{personal.role}</Badge>
      <footer className="text-sm">
        <p className="mb-2">
          Correo: <span className="ml-1 text-muted-foreground">{personal.email}</span>
        </p>
        <p className="mb-2">
          Teléfono: <span className="ml-1 text-muted-foreground">{personal.phone}</span>
        </p>
        <p className="mb-2">
          Trabaja en: <span className="ml-1 font-semibold">{personal.restaurant}</span>
        </p>
      </footer>
    </article>
  );
};
