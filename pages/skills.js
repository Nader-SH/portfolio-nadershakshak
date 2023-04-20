import styles from "../styles/Nader.module.css";
import styleshome from "../styles/Home.module.css";
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
          <Link
            href="https://nodejs.org/en"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Nodejs</h3>
            <FaNode
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Reactjs</h3>
            <DiReact
              style={{
                fontSize: "45px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://expressjs.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Expressjs</h3>
            <SiExpress
              style={{
                fontSize: "35px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Nextjs</h3>
            <SiNextdotjs
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>TypeScript</h3>
            <SiTypescript
              style={{
                fontSize: "35px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://www.postgresql.org/download/windows/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Postgresql</h3>
            <SiPostgresql
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://git-scm.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Git</h3>
            <FaGit
              style={{
                fontSize: "35px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Github</h3>
            <AiFillGithub
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://sequelize.org/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Sequelize</h3>
            <SiSequelize
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://www.mysql.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>MySQL</h3>
            <SiMysql
              style={{
                fontSize: "45px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://ant.design/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Ant Design</h3>
            <SiAntdesign
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://mui.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Material UI</h3>
            <SiMui
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
          <Link
            href="https://www.postman.com/"
            target="_blank"
            // className={styles.iconCss}
          >
        <div className={styles.single}>
          <h3>Postman</h3>
            <SiPostman
              style={{
                fontSize: "40px",
                margin: "inherit"
              }}
            />
        </div>
          </Link>
      </div>
      <Link href="/nader" className={styleshome.btn}>
        Nader Projects
      </Link>
    </>
  );
};

export default List;
