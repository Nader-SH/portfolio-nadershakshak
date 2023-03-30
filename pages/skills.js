import styles from "../styles/Nader.module.css";
import Head from "next/head";
import Link from "next/link";
import { FaGit, FaNode } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import {
  SiAntdesign,
  SiExpress,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
const List = () => {
  return (
    <>
      <Head>
        <title>Nader | Nader Skills</title>
      </Head>
      <div>
        <h1>Nader Skills </h1>
      </div>
      <div>
        <div className={styles.single}>
          <h3>Nodejs</h3>
          <Link
            href="https://nodejs.org/en"
            target="_blank"
            className={styles.iconCss}
          >
            <FaNode
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Reactjs</h3>
          <Link
            href="https://react.dev/"
            target="_blank"
            className={styles.iconCss}
          >
            <DiReact
              style={{
                fontSize: "45px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Expressjs</h3>
          <Link
            href="https://expressjs.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiExpress
              style={{
                fontSize: "35px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Nextjs</h3>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiNextdotjs
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>

        <div className={styles.single}>
          <h3>TypeScript</h3>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiTypescript
              style={{
                fontSize: "35px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Postgresql</h3>
          <Link
            href="https://www.postgresql.org/download/windows/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiPostgresql
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Git</h3>
          <Link
            href="https://git-scm.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <FaGit
              style={{
                fontSize: "35px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Github</h3>
          <Link
            href="https://github.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <AiFillGithub
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Sequelize</h3>
          <Link
            href="https://sequelize.org/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiSequelize
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>MySQL</h3>
          <Link
            href="https://www.mysql.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiMysql
              style={{
                fontSize: "45px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Ant Design</h3>
          <Link
            href="https://ant.design/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiAntdesign
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Material UI</h3>
          <Link
            href="https://mui.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiMui
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className={styles.single}>
          <h3>Postman</h3>
          <Link
            href="https://www.postman.com/"
            target="_blank"
            className={styles.iconCss}
          >
            <SiPostman
              style={{
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default List;
