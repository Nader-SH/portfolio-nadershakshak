import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    if (pathname === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(pathname);
  };

  return (
    <div>
      <nav className="headerNav">
        <div className="logo">
          <Image src="/nadershakshak.jpg" alt="nader shakshak" height={115} width={115} />
        </div>
        <div className="tabsList">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About Me
          </Link>
          <Link href="/skills" className={isActive("/skills") ? "active" : ""}>
            My Skills
          </Link>
          <Link href="/projects" className={isActive("/projects") ? "active" : ""}>
            Projects
          </Link>
          <Link href="/docscode" className={isActive("/docscode") ? "active" : ""}>
            Best of Docs
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
