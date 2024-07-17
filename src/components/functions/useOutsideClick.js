import { useState, useEffect, useRef } from "react";

const useOutsideClick = (initialVisibility = true) => {
  const [isVisible, setVisibility] = useState(initialVisibility);
  const ref = useRef(null);

  const handleClick = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisibility(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isVisible, setVisibility, handleClick, ref };
};

export default useOutsideClick;
