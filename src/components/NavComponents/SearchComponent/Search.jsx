import Styles from "./SearchStyles.module.css";
import Close from "../../../assets/close.png";
import Open from "../../../assets/search.png";
import useOutsideClick from "../../functions/useOutsideClick";

const Search = () => {
  const { isVisible, handleClick, ref } = useOutsideClick(true);
  const searchImg = isVisible ? Open : Close;

  return (
    <div
      className={`searchContainerDiv ${Styles.searchContainerDiv}`}
      ref={ref}
    >
      <button
        onClick={handleClick}
        className={`${Styles.openSearchButton} ${
          !isVisible ? Styles.active : ""
        }`}
      >
        <img src={searchImg} alt="Search_icon" />
      </button>
      <div className={`${isVisible ? Styles.hidden : Styles.visible}`}>
        <div className={Styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={Styles.searchInput}
          />
          <button
            className={Styles.searchButton}
            onClick={() => {
              console.log("search");
            }}
          >
            <img src={Open} alt="search_icon" />
          </button>
          <button className={Styles.clearButton}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
