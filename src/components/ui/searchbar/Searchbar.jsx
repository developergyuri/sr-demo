import React, { useState } from "react";

/* Styles */
import styles from "./Searchbar.module.css";

/* OwnComponents */
import { ReactComponent as SearchIcon } from "../../../assets/header_search.svg";

const Searchbar = () => {
  const [state, setState] = useState("");

  const searchInputHandler = (value) => {
    setState(value);
  };

  const searchHandler = () => {
    alert(`Search: ${state}`);
  };
  return (
    <div className={styles.searchbar}>
      <input
        placeholder="keresés..."
        onChange={({ target: { value } }) => searchInputHandler(value)}
      />
      <SearchIcon onClick={searchHandler} />
    </div>
  );
};

export default Searchbar;
