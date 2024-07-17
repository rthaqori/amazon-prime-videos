import DropdownArrow from "../../../assets/dropdown-arrow.png";
import Styles from "./NavListStyles.module.css";


const NavLists = () => {
  return (
    <>
      <ul className={Styles.nav_lists}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">TV shows</a>
        </li>
        <li>
          <a href="">
            Categories
            <img src={DropdownArrow} alt="dropdown arrow" />
          </a>
        </li>
        <li>
          <a href="">MyStuff</a>
        </li>
      </ul>
    </>
  );
};

export default NavLists;
