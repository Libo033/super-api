"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
//import JsonFormatter from "react-json-formatter";
import JSONFormatter from "json-formatter-js";

interface IPeticionBody {
  api_body: object | Array<object> | false;
}

const PeticionBody: React.FC<IPeticionBody> = ({ api_body }) => {
  useEffect(() => {
    if (window && api_body) {
      let jsondiv = document.getElementById(
        "jsonFormatterParsed"
      ) as HTMLDivElement;
      const formatter = new JSONFormatter(api_body, 3);
      jsondiv.innerHTML = "";
      jsondiv.appendChild(formatter.render());
    }
  }, [api_body]);

  return (
    <div className={styles.PeticionBody}>
      <div id="jsonFormatterParsed" className={styles.PeticionBody_json}>
        {!api_body && (
          <p className={styles.PeticionBody_New}>
            Hace una nueva peticion para que el contenido aparezca aqui.
          </p>
        )}
      </div>
    </div>
  );
};

export default PeticionBody;
