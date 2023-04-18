import Head from "next/head";
import Link from "next/link";
import { GrRedo } from "react-icons/gr";
import styles from "../../styles/Nader.module.css";
import stylesHome from "../../styles/Home.module.css";
const dataDocsCode = [
  {
    id: 1,
    title: "Road Map",
    link: "https://roadmap.sh/",
  },
  {
    id:5,
    title:"43 Interview Questions for Developers",
    link:"https://www.indeed.com/career-advice/interviewing/interview-questions-for-developers"
  },
  {
    id: 2,
    title: "ReactJS",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    id: 3,
    title: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/",
  },
  {
    id: 4,
    title: "ExpressJS",
    link: "https://expressjs.com/en/starter/installing.html",
  },

];

const DocsCode = () => {
  return (
    <>
      <Head>
        <title>Nader | Software Documentation</title>
      </Head>
      <div>
        <h1 className={styles.title}>Software Documentation</h1>
        <div className={stylesHome.allDivs}>
          {dataDocsCode.map((ele) => (
            <>
              <div key={ele.id} className={styles.single}>
                <Link href={`/docscode/${ele.id}`} target="_self" className={stylesHome.aTag}>
                  <div className={stylesHome.titleDiv}>
                    <h3>{ele.title}</h3>
                  </div>
                </Link>
                <div className={styles.titleDiv}>
                  <Link
                    href={ele.link}
                    target="_blank"
                    className={styles.iconCss}
                  >
                    <GrRedo
                      style={{
                        fontSize: "30px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Link href="/" className={stylesHome.btn}>
        Home
      </Link>
    </>
  );
};

export default DocsCode;
