import styles from "../../styles/Nader.module.css";
import Head from "next/head";

const List = () => {
  return (
    <>
      <Head>
        <title>Nader | Nader List</title>
      </Head>
      <div>
        <h1>Nader List</h1>
      </div>
      <div>
        <a className={styles.single}>
          <h3> Nader shakshak 1</h3>
        </a>
        <a className={styles.single}>
          <h3> Nader shakshak 2</h3>
        </a>
        <a className={styles.single}>
          <h3> Nader shakshak 3</h3>
        </a>
        <a className={styles.single}>
          <h3> Nader shakshak 4</h3>
        </a>
        <a className={styles.single}>
          <h3> Nader shakshak 5</h3>
        </a>
        <a className={styles.single}>
          <h3> Nader shakshak 6</h3>
        </a>

      </div>
    </>
  );
};

export default List;
