import Inicio from "@/componentes/inicio/Inicio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Proba nuestra API</h1>
      <Inicio />
    </main>
  );
}
