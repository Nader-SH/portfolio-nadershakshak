import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <div className="content" style={{ flex: 1 }}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
