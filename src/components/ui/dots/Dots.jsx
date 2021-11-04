import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/* Styles */
import styles from "./Dots.module.css";

const Dots = ({ numOfDots, numOfActive, callableFn, className }) => {
  const dotsContainerClasses = classNames(styles.dotsConteiner, {
    [`${className}`]: !!className,
  });

  return (
    <div className={dotsContainerClasses}>
      {Array.from({ length: numOfDots }, (_, idx) => (
        <span
          key={idx}
          className={classNames(styles.dot, {
            [`${styles.selected}`]: numOfActive === idx,
          })}
          onClick={() => callableFn(idx)}
        />
      ))}
    </div>
  );
};

Dots.propTypes = {
  numOfDots: PropTypes.number.isRequired,
  numOfActive: PropTypes.number.isRequired,
  className: PropTypes.string,
  callableFn: PropTypes.func.isRequired,
};

Dots.defaultProps = {
  numOfDots: 0,
  numOfActive: 0,
  callableFn: () => {},
};

export default Dots;
