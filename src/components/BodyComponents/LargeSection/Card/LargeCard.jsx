import React from "react";
import Styles from "./LargeCardStyles.module.css";
import Buttons from "../../Buttons";

const LargeSectionCard = (props) => {
  return (
    <div id={props.id} className={`${Styles.large_section_card} ${props.class}`}>
      <div className={Styles.imageDiv}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={Styles.contentDiv}>
        <h1>{props.title}</h1>
        <Buttons />
      </div>
    </div>
  );
};

export default LargeSectionCard;
