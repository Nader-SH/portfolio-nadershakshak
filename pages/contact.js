import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "nadershak149@gmail.com",
      href: "mailto:nadershak149@gmail.com",
      color: "#4979ff"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+972 593235128",
      href: "tel:+972593235128",
      color: "#4979ff"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+972 567 441 842",
      href: "https://wa.me/972567441842",
      color: "#25D366"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/nader-shakshak",
      href: "https://www.linkedin.com/in/nader-shakshak",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/Nader-SH",
      href: "https://github.com/Nader-SH",
      color: "#333"
    },
    {
      icon: FaGlobe,
      title: "Portfolio",
      value: "portfolio-nadershakshak.vercel.app",
      href: "https://portfolio-nadershakshak.vercel.app",
      color: "#4979ff"
    }
  ];

  return (
    <>
      <Head>
        <title>Nader | Contact</title>
      </Head>
      <div>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.text}>
          Feel free to reach out to me through any of the following channels. I&apos;m always open to discussing new projects, opportunities, or just having a conversation!
        </p>
        
        <div style={{ 
          maxWidth: "1000px", 
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          padding: "0 20px"
        }}>
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "8px",
                  borderLeft: `8px solid ${item.color}`,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                }}
              >
                <Link 
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  style={{ 
                    textDecoration: "none",
                    color: "inherit",
                    display: "block"
                  }}
                >
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                  }}>
                    <IconComponent 
                      style={{ 
                        fontSize: "40px", 
                        color: item.color,
                        marginBottom: "15px"
                      }} 
                    />
                    <h3 style={{ 
                      margin: "0 0 10px 0", 
                      color: "#333", 
                      fontSize: "20px",
                      fontWeight: 600
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      margin: 0,
                      color: item.color, 
                      fontSize: "16px",
                      wordBreak: "break-word"
                    }}>
                      {item.value}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/about" className={styles.btn}>
        About Me
      </Link>
    </>
  );
};

export default Contact;
