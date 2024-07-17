import React from "react";
import Menu from "./MenuComponent/Menu";
import Profile from "./ProfileComponents/Profile";
import Search from "./SearchComponent/Search";
import Styles from "./NavBarStyles.module.css";
import NavLists from "./MenuComponent/NavLists";
import useScreenWidth from "../functions/ScreenWidth";

const NavBar = () => {
  const isMobile = useScreenWidth();
  return (
    <header className={Styles.header}>
      <nav className={`nav ${Styles.nav}`}>
        {isMobile < 720 && <Menu />}
        <span className={Styles.logo}>prime video</span>
        {isMobile >= 720 && <NavLists />}
        <div className={`float ${Styles.float}`}>
          <Search />
          <Profile />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
