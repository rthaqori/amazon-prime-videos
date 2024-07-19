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
        id={index}
        class="large_card"
        key={index}
        title={list.name}
        image={list.image[0]}
      />
    );
  });

  const movieListIndex = shuffledMovies.map((list, index) => {
    return <a href={`#${index}`}></a>;
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
      <div className={Styles.movieListIndex}>{movieListIndex}</div>
    </section>
  );
};

export default LargeSection;
