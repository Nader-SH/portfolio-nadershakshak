import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="headerNav">
        <div className="logo">
          <Image src="/nadershakshak.jpg" alt="nader shakshak" height={115} width={115} />
        </div>
        <div className="tabsList">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/skills">My Skills</Link>
        <Link href="/nader">Nader List Repositories</Link>
        <Link href="/docscode">Best of Docs</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
