import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Nader | Homepage</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to my personal website!</h1>
        <p className={styles.text}>
          My name is Nader Shakshak and I`m thrilled to have you here. This
          website is a space for me to share my thoughts, experiences, and ideas
          with the world.
        </p>
        <Link href="/nader" className={styles.btn}>
          See Nader List
        </Link>
      </div>
    </>
  );
}
