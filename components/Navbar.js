import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/nadershakshak.jpg" alt="nader shakshak" height={115} width={115} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/nader">Nader List Repositories</Link>
      </nav>
    </div>
  );
};

export default Navbar;
