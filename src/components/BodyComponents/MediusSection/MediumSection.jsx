import Styles from "./MediumSectionStyles.module.css";
import MediumCard from "./Card/MediumCard";
import MoviesData from "../Movies.json";
import shuffleArray from "../../functions/suffle";
import { useState, useEffect } from "react";

const MediumSection = () => {
  const [shuffledMovies, setShuffledMovies] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(MoviesData);
    setShuffledMovies(shuffled);
  }, []);

  const movieLists = shuffledMovies.map((list, index) => {
    return <MediumCard key={index} title={list.name} image={list.image[1]} />;
  });
  return (
    <section
      className={Styles.MediumSectionContainer}
      id="MediumSectionContainer"
    >
      <div className={Styles.sectionHeading}>
        <h2>Movies</h2>
      </div>

      <div className={Styles.sectionContent}>{movieLists}</div>
    </section>
  );
};

export default MediumSection;
