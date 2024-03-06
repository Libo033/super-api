import React from "react";
import styles from "./page.module.css";
import PeticionHead from "@/componentes/new/PeticionHead";
import PeticionBody from "@/componentes/new/PeticionBody";

const NuevaPeticion = () => {
  return (
    <main>
      <PeticionHead />
      <PeticionBody api_body={false} />
    </main>
  );
};

export default NuevaPeticion;
