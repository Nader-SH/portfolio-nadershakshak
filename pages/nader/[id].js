import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import stylesHome  from "../../styles/Home.module.css";
const DetailsRepo = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    repos.filter((ele) => {
      if (ele.id === Number(id)) {
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
    id: 8,
    title: "RTM_Dashboard",
    disc: "Spearheaded the develpment of a pivotal management appliction tailored for civil engineers and architects in Denmark . Designed and implemented an intuitive-interface empowering project officials , owners and associated companies to monitor and track project progress effectively . Streamlined communication and -collaboration among stakeholders, optimizing workflow managment and project supervision . ",
    link: "https://rtm-board.com",
  },
  {
    id: 7,
    title: "Scout_Management",
    disc: "Developed a comprehensive scouting project management platform facilitaing group registrations , formation of family teams, and nature trip plannig. Led the design and implementation of the main interface , ensuring seamless control and managment for project officials , leaders and participating families. Enhanced user experience for group officials ,enabling efficient oversight and coordination of project activities.",
    link: "#",
  },
  {
    id: 6,
    title: "Eqra",
    disc: "Collaborated with a team of developers to design and develop a user-friendly frontend for a school library management system. Developed the frontend using HTML, CSS, and JavaScript, ensuring that the design was responsive and optimized for all screen sizes.",
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
