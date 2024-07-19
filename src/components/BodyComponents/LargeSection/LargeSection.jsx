import Styles from "./LargeSectionStyles.module.css";
import LargeCard from "./Card/LargeCard";
import MoviesData from "../Movies.json";
import shuffleArray from "../../functions/suffle";
import { useState, useEffect, useRef, useCallback } from "react";

const LargeSection = () => {
  const [shuffledMovies, setShuffledMovies] = useState([]);
  const containerRef = useRef(null);
  const navLinksRef = useRef([]);
  const scrollAmount = useRef(0);
  const currentIndex = useRef(0);
  const isUserScrolling = useRef(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(MoviesData);
    setShuffledMovies(shuffled);
  }, []);

  useEffect(() => {
    if (containerRef.current && shuffledMovies.length > 0) {
      const container = containerRef.current;
      scrollAmount.current = container.scrollWidth / shuffledMovies.length;

      slideInterval.current = setInterval(() => {
        if (!isUserScrolling.current) {
          currentIndex.current = (currentIndex.current + 1) % shuffledMovies.length;
          container.scrollTo({
            left: currentIndex.current * scrollAmount.current,
            behavior: 'smooth'
          });
          updateActiveNavLink();
        }
      }, 5000);

      return () => clearInterval(slideInterval.current);
    }
  }, [shuffledMovies]);

  const handleNavClick = useCallback((index) => {
    if (containerRef.current) {
      currentIndex.current = index;
      containerRef.current.scrollTo({
        left: currentIndex.current * scrollAmount.current,
        behavior: 'smooth'
      });
      isUserScrolling.current = true;
      updateActiveNavLink();
      resetSlideInterval();
    }
  }, [shuffledMovies]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      currentIndex.current = Math.round(scrollLeft / scrollAmount.current);
      updateActiveNavLink();
      resetSlideInterval();
    }
  }, [shuffledMovies]);

  const updateActiveNavLink = () => {
    navLinksRef.current.forEach((link, index) => {
      if (index === currentIndex.current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const resetSlideInterval = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      if (!isUserScrolling.current) {
        currentIndex.current = (currentIndex.current + 1) % shuffledMovies.length;
        containerRef.current.scrollTo({
          left: currentIndex.current * scrollAmount.current,
          behavior: 'smooth'
        });
        updateActiveNavLink();
      }
    }, 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.5
    });

    const images = containerRef.current.querySelectorAll('.large_card');
    images.forEach(image => observer.observe(image));

    return () => images.forEach(image => observer.unobserve(image));
  }, [shuffledMovies]);

  const movieLists = shuffledMovies.map((list, index) => (
    <LargeCard
      id={index}
      className="large_card"
      key={index}
      title={list.name}
      image={list.image[0]}
    />
  ));

  const movieListIndex = shuffledMovies.map((list, index) => (
    <a
      href={`#${index}`}
      key={index}
      ref={el => (navLinksRef.current[index] = el)}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(index);
      }}
    ></a>
  ));

  return (
    <section
      className={Styles.LargeSectionContainer}
      id="LargeSectionContainer"
    >
      <div className={Styles.sectionHeading}>
        <h2>Movies</h2>
      </div>

      <div
        className={Styles.sectionContent}
        ref={containerRef}
        style={{ overflowX: 'scroll', whiteSpace: 'nowrap', height: '500px' }}
        onScroll={handleScroll}
      >
        {movieLists}
      </div>
      <div className={Styles.movieListIndex}>{movieListIndex}</div>
    </section>
  );
};

export default LargeSection;
