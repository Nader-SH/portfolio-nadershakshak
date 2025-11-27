import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [showPreview, setShowPreview] = useState(false);

  const isActive = (pathname) => {
    if (pathname === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(pathname);
  };

  return (
    <div>
      <nav className="headerNav">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div 
            style={{ position: "relative" }}
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            <Image 
              src="/nadershakshak.jpg" 
              alt="nader shakshak" 
              height={115} 
              width={115}
              style={{ cursor: "pointer" }}
            />
            {showPreview && (
              <div style={{
                position: "absolute",
                top: "120px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                background: "#fff",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                border: "2px solid #4979ff",
                animation: "fadeIn 0.3s ease"
              }}>
                <Image 
                  src="/nadershakshak.jpg" 
                  alt="nader shakshak preview" 
                  height={300} 
                  width={300}
                  style={{ borderRadius: "4px", display: "block" }}
                />
              </div>
            )}
          </div>
          <div>
            <h2 style={{ margin: 0, color: "#333", fontSize: "24px", fontWeight: 700 }}>
              Nader Shakshak
            </h2>
            <p style={{ margin: "5px 0 0 0", color: "#777", fontSize: "14px" }}>
              Full Stack Developer
            </p>
          </div>
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
