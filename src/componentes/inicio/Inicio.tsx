"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const InicioInputs: React.FC<{
  value: number;
  deleteThis: (v: number) => void;
}> = ({ value, deleteThis }) => {
  return (
    <div className={styles.Inicio_Container}>
      <TextField fullWidth variant="outlined" label="KEY" />
      <TextField fullWidth variant="outlined" label="VALUE" />
      <Button
        variant="outlined"
        color="error"
        onClick={() => deleteThis(value)}
      >
        <Delete />
      </Button>
    </div>
  );
};

const InicioMethod: React.FC<{
  handleChange: (event: SelectChangeEvent) => void;
  metodo: "POST" | "PUT" | "DELETE";
}> = ({ handleChange, metodo }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Metodo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Metodo"
        value={metodo}
        onChange={handleChange}
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"PUT"}>PUT</MenuItem>
        <MenuItem value={"DELETE"}>DELETE</MenuItem>
      </Select>
    </FormControl>
  );
};

const Inicio = () => {
  const [pares, setPares] = useState<number[]>([1]);
  const [metodo, setMetodo] = useState<"POST" | "PUT" | "DELETE">("POST");

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setMetodo(e.target.value as "POST" | "PUT" | "DELETE");
  };

  const handleAddPar = () => {
    setPares([...pares, pares[pares.length - 1] + 1]);
  };

  const handleDelete = (v: number) => {
    setPares(pares.filter((a) => a !== v));
  };

  return (
    <div className={styles.Inicio}>
      <InicioMethod handleChange={handleChangeSelect} metodo={metodo} />
      {pares.map((p) => (
        <InicioInputs key={p} value={p} deleteThis={handleDelete} />
      ))}
      <Button fullWidth variant="contained" onClick={handleAddPar}>
        <Add />
      </Button>
    </div>
  );
};

export default Inicio;
