import Styles from "./ButtonsStyles.module.css";

const Buttons = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.verified}>
        <p>x</p>
        <span>Included with Prime</span>  
      </div>
      <div className={Styles.btnDiv}>
        <li>
          <a href="">
            <button className={Styles.playBtn}>play</button>
          </a>
        </li>
        <li>
          <span>Play</span>
        </li>
        <li>
          <a href="">
            <button className={Styles.addWatchListBtn}>Add</button>
          </a>
        </li>
        <li>
          <a href="">
            <button className={Styles.detailsBtn}>details</button>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Buttons;
