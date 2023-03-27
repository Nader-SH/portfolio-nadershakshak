import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1> Contacts : </h1>
      </div>
      <div className="socialMedia">
        <Link href="#">Instgram</Link>
        <Link href="#">Email</Link>
        <Link href="#">Linkedin</Link>
      </div>
    </footer>
  );
};

export default Footer;
