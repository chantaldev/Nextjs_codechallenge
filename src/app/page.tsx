import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link"; 


export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the main page of my application.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Hello! This is the code challenge</h1>
      <Link href="form/step-1" passHref>
          <button>Comecemos</button>
        </Link>
      </main>
    </div>
  );
}
