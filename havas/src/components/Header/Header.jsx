import HeaderStyles from "./header.module.scss";
import MenuBtn from "../Menu/MenuBtn";
import Menu from "../Menu/Menu";
import logo from "../../Assets/Images/Header/logoblanc.png";
import arrow from "../../Assets/Images/Header/fleche.png"
import {useState} from "react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <div className={HeaderStyles.header}>
      <Menu menuOpen={menuOpen}/>
      <MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.nav}>
          <img src={logo}></img>
        </div>
        <div className={HeaderStyles.containerCircle}>
          <div className={HeaderStyles.circle}>
            <div className={HeaderStyles.titleContent}>
              <h1>Connecter le continent africain au très haut débit.</h1>
              <a href="#news" className={HeaderStyles.containerScroll}>
                <p>SCROLL</p>
                <img src={arrow} alt="Scroll"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;