import react, { useState } from "react";
// import styles from "./Layout.module.scss";
import Navigation from "../Navigation";
import Footer from "../Footer";
import PreNav from "../PreNavBar";
const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className={isActive ? "dark" : ""}>
      <div className="bg-[url('/Assests/BG_Light.png')] dark:bg-[url('/Assests/BG.png')] bg-repeat">
        <PreNav handleClick={handleClick} isActive={isActive} />
        <Navigation isActive={isActive} />
        <div className="container px-4 mx-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
