import ProfileDropdown from "./ProfileDropdown";
import ProfileIcon from "../../../assets/user-profile.png";
import Styles from "./ProfileStyles.module.css";
import useOutsideClick from "../../functions/useOutsideClick";
import useScreenWidth from "../../functions/ScreenWidth";

const Profile = () => {
  const { isVisible, handleClick, ref } = useOutsideClick(true);
  const isMobile = useScreenWidth() > 700;

  return (
    <div className={Styles.profileContainer} ref={ref}>
      <button
        onClick={handleClick}
        className={`${Styles.profileButton} ${!isVisible ? Styles.active : ""}`}
      >
        <img src={ProfileIcon} alt="Profile_icon" />
      </button>
      <div className={`${isVisible ? Styles.hidden : Styles.visible}`}>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Profile;
