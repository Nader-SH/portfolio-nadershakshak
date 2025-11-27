import styles from "../styles/Nader.module.css";
import styleshome from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import skillsData from "../data/skills.json";
import { FaGit, FaNode, FaVuejs, FaPython, FaDatabase } from "react-icons/fa";
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
  SiNestjs,
  SiFastapi,
  SiTailwindcss,
  SiSwagger,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNuxtdotjs,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";

// Icon mapping
const iconMap = {
  FaGit,
  FaNode,
  FaVuejs,
  FaPython,
  FaDatabase,
  DiReact,
  SiAntdesign,
  SiExpress,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSequelize,
  SiTypescript,
  SiNestjs,
  SiFastapi,
  SiTailwindcss,
  SiSwagger,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNuxtdotjs,
  AiFillGithub,
  BiTestTube,
};

const SkillItem = ({ name, icon, href, iconSize = "40px" }) => {
  const IconComponent = iconMap[icon];
  
  const content = (
    <div className={styles.single}>
      <h3>{name}</h3>
      {IconComponent && (
        <IconComponent
          style={{
            fontSize: iconSize,
            margin: "inherit"
          }}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank">
        {content}
      </Link>
    );
  }
  return content;
};

const SkillSection = ({ title, skills }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ color: "#333", marginBottom: "20px", fontSize: "28px", textAlign: "center" }}>
      {title}
    </h2>
    <div>
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          name={skill.name}
          icon={skill.icon}
          href={skill.href}
          iconSize={skill.iconSize}
        />
      ))}
    </div>
  </div>
);

const List = () => {
  const sections = [
    { title: "Programming Languages", skills: skillsData.programmingLanguages },
    { title: "Frontend Frameworks & Libraries", skills: skillsData.frontendFrameworks },
    { title: "Frontend Styling", skills: skillsData.frontendStyling },
    { title: "Backend Frameworks", skills: skillsData.backendFrameworks },
    { title: "Database & ORM", skills: skillsData.database },
    { title: "Tools & Testing", skills: skillsData.tools },
  ];

  return (
    <>
      <Head>
        <title>Nader | My Skills</title>
      </Head>
      <div>
        <h1 className={styleshome.title}>My Skills</h1>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {sections.map((section, index) => (
          <SkillSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>

      <Link href="/projects" className={styleshome.btn}>
        My Projects
      </Link>
      <Link href="/contact" className={styleshome.btn}>
        Contact Me
      </Link>
    </>
  );
};

export default List;
