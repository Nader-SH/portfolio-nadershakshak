import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Nader | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About Nader Shakshak</h1>
        <p className={styles.text}>
          As a full stack developer with experience in building web applications
          using technologies such as Node.js, React, and Express, I am skilled
          in using npm packages and have expertise working with databases such
          as Postgres and MySQL. My proficiency in Sequelize and ability to
          write effective queries allows me to manage and manipulate data
          effectively. In addition, I am familiar with Java and have a strong
          aptitude for learning new technologies. My professional experience
          includes working as a Software Engineer and Development Team in Gaza
          Goes Global and Team Leader as a freelancer.
          <br/>
          <br/>
           In my role as a
          Development Team Leader, I led the front-end development team and
          oversaw the successful delivery of various projects. I also gained
          valuable experience as a trainee on the front-end team at Gaza Goes
          Global. I have completed an intensive learning program at
          GazaSkyGeeks, where I gained hands-on experience in programming
          technologies such as HTML, CSS, JS, Tailwind css, Node js, Express,
          React, Material UI, Ant Design, GitHub, Git, and Typescript.
          Additionally, I possess essential technical skills such as database
          design and implementation, data migration, and version control using
          Git.
          <br/>
          <br/>
          As a developer, I am skilled in testing and debugging, possess
          strong problem-solving skills, and have the ability to collaborate
          effectively in a team and communicate technical concepts to both
          technical and non-technical stakeholders. I also have excellent time
          management skills and the ability to prioritize tasks in a fast-paced
          development environment. Overall, I am a dedicated and skilled
          developer with a passion for learning and utilizing new technologies.
        </p>
      </div>
      <Link href="/skills" className={styles.btn}>
        Nader Skills
      </Link>
    </>
  );
};

export default About;
