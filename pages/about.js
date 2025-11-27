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
        <h1 className={styles.title}>About Nader Emad Shakshak</h1>
        <div style={{ 
          maxWidth: "900px", 
          margin: "0 auto",
          textAlign: "left",
          padding: "0 20px"
        }}>
          <div className={styles.text} style={{ textAlign: "left" }}>
            <h2 style={{ color: "#333", marginTop: "30px", marginBottom: "15px", textAlign: "left" }}>Summary</h2>
            <p style={{ textAlign: "left", marginBottom: "20px", lineHeight: "1.8" }}>
              Full Stack Developer with solid experience across modern front-end frameworks (React, Next.js, Vue.js, Nuxt.js) and 
              backend technologies (Node.js, Express, NestJS, FastAPI). Skilled in building scalable, high-performance web applications 
              with clean architectures, intuitive user interfaces, and efficient API integrations. Focused on problem-solving, performance 
              optimization, and delivering user-centered solutions through collaborative teamwork.
            </p>

            <h2 style={{ color: "#333", marginTop: "30px", marginBottom: "15px", textAlign: "left" }}>Experience</h2>
            
            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Software Engineer | Mid-Level Front End Developer → Full Stack Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Thresholdsa, Saudi Arabia</strong> (May 2025 - December 2025)</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Developed and maintained ERP System full-stack web applications using Next.js and NestJS to build high-performance, scalable, and user-friendly solutions.</li>
              <li>Engineered a custom BMI (Body Mass Index) calculation algorithm for athletes, factoring in age, height, and weight to provide tailored health metrics and data-driven insights.</li>
              <li>Built and maintained robust backend services, developing scalable RESTful APIs with NestJS to handle server-side logic, database operations, and serve the calculation engine.</li>
              <li>Integrated frontend interfaces (React.js) with backend APIs to ensure a seamless data flow and dynamic user experience.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Software Engineer | Mid-Level Front End Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>ThresholdsSa, Saudi Arabia</strong> (December 2024 - May 2025)</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Developed and maintained web applications using advanced technologies, including React.js, to build high-performance, scalable, and user-friendly solutions.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Software Engineer | Front End Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>We Solve It ApS, Denmark</strong> (August 2023 - January 2024)</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Led multiple projects utilizing cutting-edge frameworks such as Vue.js and Nuxt.js to develop robust and dynamic web applications.</li>
              <li>Demonstrated expertise in leveraging Vue.js and Nuxt.js to create intuitive user interfaces and improve overall user experience.</li>
              <li>Successfully collaborated with cross-functional teams to deliver high-quality software solutions within specified deadlines.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Software Engineer | Front End Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Freelancer, Saudi Arabia</strong> (March 2023 - April 2023)</p>
            <p style={{ marginBottom: "10px", textAlign: "left", lineHeight: "1.8" }}><strong>Eqra:</strong> A user-friendly platform for a school&apos;s library system and reader competitions, providing easy-to-use interfaces for children. The platform facilitated efficient library management and promoted a love for reading through engaging competitions.</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Created dashboards for school administrators that display competition and student statistics, which greatly simplifies the administration process for teachers and supervisors.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Personal Project | Full Stack Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Gaza Sky Geeks, Gaza</strong> (January 2023 - March 2023)</p>
            <p style={{ marginBottom: "10px", textAlign: "left", lineHeight: "1.8" }}><strong>Vivo (Github):</strong> Developed a social media website, where users can connect, shop and communicate seamlessly on a single platform.</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Utilized a wide range of technologies including Node.js, Express.js, React, PostgreSQL, and Socket.IO to build a robust and scalable Vivo.</li>
              <li>Developed a chat system utilizing Socket.IO for real-time communication.</li>
              <li>Developed an easy-to-use buying and selling system in my social media website to elevate the overall user experience and increase sales for business owners.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Code Academy Final Project | Full Stack Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Gaza Sky Geeks, Gaza</strong> (November 2022 - December 2022)</p>
            <p style={{ marginBottom: "10px", textAlign: "left", lineHeight: "1.8" }}><strong>PMS (Github):</strong> A complete system platform for managing pharmacies in the Gaza Strip, controlling resources, and identifying shortages and needs in the local market.</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Utilized a wide range of technologies including Node.js, Express.js, React, PostgreSQL, and unit testing to build a robust and scalable PMS.</li>
              <li>Conducted thorough unit testing and implemented robust error handling mechanisms, guaranteeing the reliability and stability of the PMS.</li>
            </ul>

            <h2 style={{ color: "#333", marginTop: "30px", marginBottom: "15px", textAlign: "left" }}>Education</h2>
            
            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Code Academy Bootcamp: Full Stack Web Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Code Academy Bootcamp | Gaza Sky Geeks, Gaza, Palestine</strong> (August 2022 - January 2023)</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Selected among over 1000 applicants, alongside 36 individuals, for an intensive 16-week course, demonstrating exceptional skills and potential in a competitive selection process.</li>
              <li>Acquired comprehensive knowledge and practical experience in various technologies, such as Node.js, Express.js, React, PostgreSQL, and Sequelize.</li>
              <li>Completed multiple projects throughout the bootcamp, applying newly acquired skills in real-world scenarios.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Code Academy foundation course: Frontend Web Developer</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Gaza Sky Geeks, Gaza, Palestine</strong> (January 2022 - April 2022)</p>
            <ul style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Selected among over 500 applicants, alongside 40 individuals, for an intensive 12-week course, demonstrating exceptional skills and potential in a competitive selection process.</li>
              <li>Acquired comprehensive knowledge and practical experience in various technologies, such as HTML5, CSS3, JS, DOM and BOM.</li>
            </ul>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Bachelor&apos;s</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Information Technology | University of Palestine, Gaza, Palestine</strong> (November 2021 - July 2025)</p>

            <h3 style={{ color: "#555", marginTop: "20px", marginBottom: "10px", textAlign: "left" }}>Diploma</h3>
            <p style={{ marginBottom: "10px", textAlign: "left" }}><strong>Multimedia | University of Palestine, Gaza, Palestine</strong> (February 2019 - October 2021)</p>
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
