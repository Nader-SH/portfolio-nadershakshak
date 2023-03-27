import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Protfolio Nader Shakshak</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/nader">Nader List</Link>
      </nav>
    </div>
  );
};

export default Navbar;
