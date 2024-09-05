import styles from "../../styles/Nader.module.css";
import Head from "next/head";
import Link from "next/link";
import { GrRedo } from "react-icons/gr";
import stylesHome from "../../styles/Home.module.css";
import { CiLock } from "react-icons/ci";


const List = () => {
  return (
    <>
      <Head>
        <title>Nader | Nader List</title>
      </Head>
      <div>
        <h1>Nader List Repositories </h1>
      </div>
      <div>
        {repos.map((ele) => (
          <div key={ele.id} className={styles.single}>
            <Link
              href={`/projects/${ele.id}`}
              target="_self"
              className={styles.iconCss}
            >
              <h3>{ele.title}</h3>
            </Link>
            {!ele.link ? (
              <div className={styles.iconCss}>
                <CiLock
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
            ) :
              <Link href={ele.link} target="_blank" className={styles.iconCss}>
                <GrRedo
                  style={{
                    fontSize: "30px",
                  }}
                />
              </Link>
            }
          </div>
        ))}
        <Link href="/docscode" className={stylesHome.btn}>
          Nader Docs
        </Link>
      </div>
    </>
  );
};

export default List;

const repos = [
  {
    id: 8,
    title: "RTM_Dashboard",
    disc: "",
    link: "",
  },
  {
    id: 7,
    title: "Scout_Management",
    disc: "",
    link: "",
  },
  {
    id: 6,
    title: "Eqra",
    disc: "Freelance Project ",
    link: "",
  },
  {
    id: 1,
    title: "Vivo",
    disc: "Developed a social media website, where users can connect, shop and communicate seamlessly on a single platform.",
    link: "https://github.com/Nader-SH/Vivo",
  },
  {
    id: 2,
    title: "PMS",
    disc: "The creation of a full pharmacy management system in the Gaza Strip will be a part of the digital transition with what is happening around us, as we are aware of and watch the world becoming entirely digital.",
    link: "https://github.com/Nader-SH/PMS",
  },
  {
    id: 3,
    title: "Shop_t7",
    disc: "A simple eCommerce app using ReactJs.",
    link: "https://github.com/Nader-SH/Shop_t7",
  },
  {
    id: 4,
    title: "Portfolio",
    disc: "my website",
    link: "https://github.com/Nader-SH/portfolio-nadershakshak",
  },
  {
    id: 5,
    title: "Team3-bookStore",
    disc: "Website to buy and borrow books",
    link: "https://github.com/Nader-SH/Team3-bookStore",
  },

];
