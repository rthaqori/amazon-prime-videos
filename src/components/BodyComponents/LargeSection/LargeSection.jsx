import Styles from "./LargeSectionStyles.module.css";
import LargeCard from "./Card/LargeCard";
import MoviesData from "../Movies.json";
import shuffleArray from "../../functions/suffle";
import { useState, useEffect } from "react";

const LargeSection = () => {
  const [shuffledMovies, setShuffledMovies] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(MoviesData);
    setShuffledMovies(shuffled);
  }, []);

  const movieLists = shuffledMovies.map((list, index) => {
    return (
      <LargeCard
        class="large_card"
        key={index}
        title={list.name}
        image={list.image[0]}
      />
    );
  });
  return (
    <section
      className={Styles.LargeSectionContainer}
      id="LargeSectionContainer"
    >
      <div className={Styles.sectionHeading}>
        <h2>Movies</h2>
      </div>

      <div className={Styles.sectionContent}>{movieLists}</div>
    </section>
  );
};

export default LargeSection;
