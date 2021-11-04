import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* Styles */
import styles from "./Rating.module.css";

/* Own Components */
import { ReactComponent as FilledStarIcon } from "../../../assets/product_filled_star.svg";
import { ReactComponent as StarIcon } from "../../../assets/product_star.svg";

const Rating = ({ rating, numOfRating }) => {
  return (
    <div className={styles.ratingContainer}>
      {Array.from({ length: 5 }, (_, idx) => (
        <Fragment key={idx}>
          {idx + 1 > rating ? <StarIcon /> : <FilledStarIcon />}
        </Fragment>
      ))}
      <span>({numOfRating})</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numOfRating: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  rating: 0,
  numOfRating: 0,
};

export default Rating;
