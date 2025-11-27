import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import aboutData from "../data/about.json";

const About = () => {
  return (
    <>
      <Head>
        <title>Nader | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About Nader Emad Shakshak</h1>
        <div style={{ 
          maxWidth: "900px", 
          margin: "0 auto",
          textAlign: "left",
          padding: "0 20px"
        }}>
          {/* Summary Section */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>{aboutData.summary.title}</h2>
            <p className={styles.sectionText}>
              {aboutData.summary.content}
            </p>
          </div>

          {/* Experience Section */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            {aboutData.experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: "30px" }}>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <p className={styles.jobInfo}>
                  <strong>{exp.company}</strong> ({exp.period})
                </p>
                {exp.project && (
                  <p className={styles.projectInfo}>
                    <strong>{exp.project.name}:</strong> {exp.project.description}
                  </p>
                )}
                <ul className={styles.responsibilitiesList}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {aboutData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: "25px" }}>
                <h3 className={styles.jobTitle}>{edu.title}</h3>
                <p className={styles.jobInfo}>
                  <strong>{edu.institution}</strong> ({edu.period})
                </p>
                {edu.achievements && (
                  <ul className={styles.responsibilitiesList}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href="/skills" className={styles.btn}>
        My Skills
      </Link>
      <Link href="/contact" className={styles.btn}>
        Contact Me
      </Link>
    </>
  );
};

export default About;
