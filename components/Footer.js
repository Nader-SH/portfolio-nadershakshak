import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1> Contacts : </h1>
      </div>
      <div className="socialMedia">
        <Link href="https://github.com/Nader-SH" target="_blank">
          Github
        </Link>
        <Link
          href="https://docs.google.com/document/d/1V-EbXS1UsDPjYS4ck2xD12gmj3htyevSKfFu1CNEZWk/edit?usp=sharing"
          target="_blank"
        >
          CV
        </Link>
        <Link
          href="https://www.linkedin.com/in/nader-shakshak-4b9965247/"
          target="_blank"
        >
          My LinkedIn
        </Link>
        <Link href="mailto:nadershak149@gmail.com" target="_blank">
          Send Email
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
