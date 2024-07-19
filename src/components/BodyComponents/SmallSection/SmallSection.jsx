import { useState, useEffect } from 'react';
import Styles from "./SmallSectionStyles.module.css";
import SmallCard from "./Card/SmallCard";
import MoviesData from "../Movies.json";
import shuffleArray from '../../functions/suffle';

const SmallSection = () => {
  const [shuffledMovies, setShuffledMovies] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(MoviesData);
    setShuffledMovies(shuffled);
  }, []);

  const movieLists = shuffledMovies.map((list, index) => {
    return (
      <SmallCard
        key={index}
        title={list.name}
        image={list.image[0]}
        description={list.description}
      />
    );
  });

  return (
    <section
      className={Styles.smallSectionContainer}
      id="smallSectionContainer"
    >
      <div className={Styles.sectionHeading}>
        <h2>Movies</h2>
      </div>

      <div className={Styles.sectionContent}>{movieLists}</div>
    </section>
  );
};

export default SmallSection;
