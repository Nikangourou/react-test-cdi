import HeaderStyles from "./header.module.scss";
import Menu from "../Menu/Menu";
import logo from "../../Assets/Images/Header/logoblanc.png";

import logo2 from "/images/logo.png"

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <div className={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.nav}>
          <img src={logo}></img>
          <img src={logo2}></img>
          <Menu />
        </div>
        <div className={HeaderStyles.containerCircle}>
          <div className={HeaderStyles.circle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
