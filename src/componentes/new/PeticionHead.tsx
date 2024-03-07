"use client";
import React, { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";

interface IPeticionHead {
  handleSubmit: (Event: FormEvent, url: string) => Promise<void>;
  error: boolean;
  apiBody: false | object[] | object;
}

const PeticionHead: React.FC<IPeticionHead> = ({ handleSubmit, error, apiBody }) => {
  const [url, setUrl] = useState<string>("");

  return (
    <>
      <form
        className={styles.PeticionHead}
        onSubmit={async (Event: FormEvent) => await handleSubmit(Event, url)}
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
          
          {!apiBody && "nueva peticion"}
          {apiBody && "borrar"}
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
