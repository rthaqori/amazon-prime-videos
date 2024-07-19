import React from "react";
import Styles from "./MediumCardStyles.module.css";
import Buttons from "../../Buttons";
import { useState } from "react";

const MediumSectionCard = (props) => {
  const [currentImage, setCurrentImage] = useState(props.image1);
  return (
    <div
      className={Styles.small_section_card}
      onMouseOver={() => setCurrentImage(props.image2)}
      onMouseOut={() => setCurrentImage(props.image1)}
    >
      <div className={Styles.imageDiv}>
        <img src={currentImage} alt={props.title} />
      </div>
      <div className={Styles.contentDiv}>
        <h3 className={Styles.title}>{props.title}</h3>
        <Buttons />
      </div>
    </div>
  );
};

export default MediumSectionCard;
