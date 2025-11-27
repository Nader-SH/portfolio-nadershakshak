import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import homeData from "../data/home.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nader | Homepage</title>
      </Head>
      <div>
        <div className={styles.card}>
          <h1 className={styles.title}>{homeData.title}</h1>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              {homeData.description}
            </p>
          </div>
        </div>
          <Link href={homeData.buttonLink} className={styles.btn}>
            {homeData.buttonText}
          </Link>
      </div>
    </>
  );
}
