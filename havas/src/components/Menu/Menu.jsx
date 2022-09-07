import MenuStyles from "./menu.module.scss";

const Menu = ({menuOpen}) => {
  return (
    <div className={`${MenuStyles.container} ${menuOpen ? MenuStyles.active : ''}`}>
      <div className={MenuStyles.menu}>
        
      </div>
    </div>
  );
};

export default Menu;
