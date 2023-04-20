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
          Welcome to my website, where you can get to know me, Nader Shakshak,
          and explore important topics that I am passionate about. Here, I aim
          to provide you with valuable insights and perspectives on a wide range
          of subjects, including business, technology, personal growth, and
          more. Through my blog posts, articles, and videos, I hope to inspire
          and empower you to become the best version of yourself, both
          professionally and personally.
        </p>
        <Link href="/about" className={styles.btn}>
          About Nader
        </Link>
      </div>
    </>
  );
}
