import React from "react";
import Styles from "./SmallCardStyles.module.css";
import Buttons from "../../Buttons";

const SmallSectionCard = (props) => {
  return (
    <div className={Styles.small_section_card}>
      <div className={Styles.imageDiv}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={Styles.contentDiv}>
        <Buttons />
        <h3 className={Styles.title}>{props.title}</h3>
        <p className={Styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default SmallSectionCard;
