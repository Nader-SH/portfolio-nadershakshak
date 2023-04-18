import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import stylesHome  from "../../styles/Home.module.css";
const DetailsRepo = ({ id }) => {
  const [data, setData] = useState({});
console.log(data);
  useEffect(() => {
    repos.filter((ele) => {
      if (ele.id === Number(id)) {
        console.log(ele);
        setData(ele);
      }
    });
  }, [id]);

  return (
    <div>
          <Head>
            <title>Nader | {data.title}</title>
          </Head>
          <div>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.text}>{data.disc}</p>
          </div>
          <Link href="/nader" className={stylesHome.btn}>
          Nader Projects
        </Link>
    </div>
    
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}
export default DetailsRepo;

const repos = [
  {
    id: 1,
    title: "Vivo",
    disc: "A site that combines social networking sites, an online store, and a lot of things that I wanted to learn",
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
    disc: "This website",
    link: "https://github.com/Nader-SH/portfolio-nadershakshak",
  },
  {
    id: 5,
    title: "Team3-bookStore",
    disc: "Website to buy and borrow books",
    link: "https://github.com/Nader-SH/Team3-bookStore",
  },
];
