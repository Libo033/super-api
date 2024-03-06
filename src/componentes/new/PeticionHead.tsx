"use client";
import React, { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";

const PeticionHead = () => {
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async (Event: FormEvent) => {
    try {
      Event.preventDefault();

      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      console.log(data);
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
    <>
      <form
        className={styles.PeticionHead}
        onSubmit={(Event: FormEvent) => handleSubmit(Event)}
      >
        <TextField
          variant="outlined"
          label="URL"
          placeholder="https://pokeapi.co/api/v2/pokemon"
          sx={{ width: "79%" }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: "56px", width: "21%" }}
        >
          nueva peticion
        </Button>
      </form>
      {error && (
        <div className={styles.PeticionHead_Alert}>
          <Alert variant="filled" severity="error">
            <AlertTitle>
              <b>Error</b>
            </AlertTitle>
            No se pudo hacer la peticion a la API ingresada.
          </Alert>
        </div>
      )}
    </>
  );
};

export default PeticionHead;
