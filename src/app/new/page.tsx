"use client";
import React, { FormEvent, useState } from "react";
import styles from "./page.module.css";
import PeticionHead from "@/componentes/new/PeticionHead";
import PeticionBody from "@/componentes/new/PeticionBody";

const NuevaPeticion = () => {
  const [error, setError] = useState<boolean>(false);
  const [apiBody, setApiBody] = useState<false | object[] | object>(false);

  const handleSubmit = async (Event: FormEvent, url: string) => {
    try {
      Event.preventDefault();

      if (!apiBody) {
        const res = await fetch(url, { method: "GET" });
        const data: object | object[] | false = await res.json();

        setApiBody(data);
      } else {
        setApiBody(false);
        (
          document.getElementById("jsonFormatterParsed") as HTMLDivElement
        ).innerHTML = "";
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };

  return (
    <main>
      <PeticionHead
        handleSubmit={handleSubmit}
        error={error}
        apiBody={apiBody}
      />
      <PeticionBody api_body={apiBody} />
    </main>
  );
};

export default NuevaPeticion;
