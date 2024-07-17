import NavLists from "./NavLists";
import DropdownArrow from "../../../assets/dropdown-arrow.png";
import Styles from "./MenuStyles.module.css";
import useOutsideClick from "../../functions/useOutsideClick";

const Menu = () => {
  const { isVisible, handleClick, ref } = useOutsideClick(true);

  return (
    <div className={`menu ${Styles.menu}`} ref={ref}>
      <button
        onClick={handleClick}
        className={`${Styles.menuButton} ${!isVisible ? Styles.active : ""}`}
      >
        <span>Menu</span>
        <img
          className={Styles.nav_img}
          src={DropdownArrow}
          alt="dropdown_arrow"
        />
      </button>
      <div className={`${isVisible ? Styles.hidden : Styles.visible}`}>
        <NavLists />
      </div>
    </div>
  );
};

export default Menu;
