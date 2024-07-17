import ProfileIcon from "../../../assets/user-profile.png";
import Styles from "./ProfileStyles.module.css";


const ProfileDropdown = () => {
  return (
    <>
      <div className={Styles.dropdown_profile}>
        <div className={Styles.account}>
          <h2>Your Account</h2>
          <ul>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Watch Anywhere</a>
            </li>
            <li>
              <a href="">Accounts & Settings</a>
            </li>
            <li>
              <a href="">Signout</a>
            </li>
          </ul>
        </div>
        <div className={Styles.profile}>
          <h2>Profiles</h2>
          <ul>
            <li>
              <a href="">
                <img src={ProfileIcon} alt="profile_icon" />
                <span>Profile 1</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={ProfileIcon} alt="profile_icon" />
                <span>Profile 2</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={ProfileIcon} alt="profile_icon" />
                <span>Profile 3</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={ProfileIcon} alt="profile_icon" />
                <span>Profile 4</span>
              </a>
            </li>
          </ul>
          <a href="">Manage Profiles</a>
          <a href="">Lern More</a>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
