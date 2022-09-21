import MenuStyles from "./menu.module.scss";

const Menu = ({menuOpen}) => {
  return (
    <div className={`${MenuStyles.container} ${menuOpen ? MenuStyles.active : ''}`}>
      <div className={MenuStyles.menu}>
        <nav>
          <ul>
            <li><a href="">Le groupe</a></li>
            <li><a href="">Nos engagements</a></li>
            <li><a href="">Carrières</a></li>
            <li><a href="">Actualités</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Nous contacter</a></li>
          </ul>
          <div className={MenuStyles.btnContainer}>
            <button>FR</button>
            <span>-</span>
            <button>EN</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
