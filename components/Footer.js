import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Contact Me</h1>
      </div>
      <div className="socialMedia">
        <Link href="mailto:nadershak149@gmail.com" target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaEnvelope />
          Email
        </Link>
        <Link href="tel:+972593235128" target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaPhone />
          Phone
        </Link>
        <Link href="https://wa.me/972567441842" target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaWhatsapp />
          WhatsApp
        </Link>
        <Link
          href="https://www.linkedin.com/in/nader-shakshak"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <FaLinkedin />
          LinkedIn
        </Link>
        <Link href="https://github.com/Nader-SH" target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaGithub />
          GitHub
        </Link>
        <Link
          href="https://docs.google.com/document/d/1P0ceN-tLlyJr0x6_y2l9VabEGYhMUQH7/edit?usp=sharing&ouid=101299738558864106025&rtpof=true&sd=true"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <FaFilePdf />
          CV
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
