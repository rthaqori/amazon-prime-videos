import React from "react";
import Styles from "./MediumCardStyles.module.css";
import Buttons from "../../Buttons";

const MediumSectionCard = (props) => {
  return (
    <div className={Styles.small_section_card}>
      <div className={Styles.imageDiv}>
        <img src={props.image} alt="small-section-card-image" />
      </div>
      <div className={Styles.contentDiv}>
        <h3 className={Styles.title}>{props.title}</h3>
        <Buttons />
      </div>
    </div>
  );
};

export default MediumSectionCard;
