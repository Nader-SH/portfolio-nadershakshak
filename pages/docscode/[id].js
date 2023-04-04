import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const Details = () => {
  const [theData, setTheData] = useState([]);
  const router = useRouter();
  const { asPath } = router;
  const endpointId = router.asPath.split("/").pop();
  const filteredData = detailsDataId.filter(
    (item) => item.id === parseInt(endpointId)
  );

  useEffect(() => {
    setTheData(filteredData);
  }, []);
  return (
    <div>
      {theData.map((ele) => (
        <>
          <Head>
            <title>Nader | {ele.title}</title>
          </Head>
          <div>
            <h1 className={styles.title}>{ele.title}</h1>
            <p className={styles.text}>{ele.disc}</p>
          </div>
        </>
      ))}
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
    title: "NodeJS",
    disc: "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript on the server-side. It is built on the V8 JavaScript engine, which is the same engine that powers Google Chrome, and it is designed to be fast, scalable, and lightweight.",
  },
  {
    id: 5,
    title: "ExpressJS",
    disc: "Express.js is a popular open-source web application framework for Node.js. It provides a robust set of features for building web and mobile applications.",
  },
];
