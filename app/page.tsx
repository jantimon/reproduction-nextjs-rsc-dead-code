import { ClientComponent } from "./client";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.headline}>Hello world</div>
      <ClientComponent />
    </>
  );
}
