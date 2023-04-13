import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}

const Details = ({ id }) => {
  const [theData, setTheData] = useState([]);
  console.log(theData);
  useEffect(() => {
    detailsDataId.filter((ele) => {
      if (ele.id === Number(id)) {
        console.log(ele);
        setTheData(ele);
      }
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Naderss | {theData.title}</title>
      </Head>
      <div>
        <h1 className={styles.title}>{theData.title}</h1>
        <p className={styles.text}>{theData.disc}</p>
      </div>
    </div>
  );
};

export default Details;

const detailsDataId = [
  {
    id: 1,
    title: "Developer Roadmaps",
    disc: "roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide the developers in picking up the path and guide their learnings.",
  },
  {
    id: 2,
    title: "ReactJS",
    disc: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
  },
  {
    id: 3,
    title: "FreeCodeCamp",
    disc: "freeCodeCamp is a non-profit organization that offers free online coding courses to help people learn web development and related skills. The organization was founded in 2014 and has since grown into a community of millions of learners from around the world.The freeCodeCamp curriculum is structured around several different certifications, each of which consists of a series of coding challenges and projects.",
  },
  {
    id: 4,
    title: "ExpressJS",
    disc: "Express.js is a popular open-source web application framework for Node.js. It provides a robust set of features for building web and mobile applications.",
  },
];
