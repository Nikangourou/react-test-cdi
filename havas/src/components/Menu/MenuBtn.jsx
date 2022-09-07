import MenuStyles from "./menu.module.scss";

const MenuBtn = ({menuOpen, setMenuOpen}) => {

  return (
      <div className={MenuStyles.menuContainer}>
        <div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${MenuStyles.menuToggle} ${
              menuOpen && MenuStyles.active
            }`}
          >
            Menu
          </button>
        </div>
      </div>
  );
};

export default MenuBtn;
