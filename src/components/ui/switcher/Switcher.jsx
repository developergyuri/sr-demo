import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/* Style */
import styles from "./Switcher.module.css";
import classNames from "classnames";

const Switcher = ({ options }) => {
  const [state, setState] = useState("Hu");
  const didMount = useRef(false);
  
  const selectHandler = (value) => {
    setState(value);
  };

  useEffect(() => {
    if (didMount.current) alert(`Selected lang: ${state}`);
    else didMount.current = true;
  }, [state]);
  return (
    <div className={styles.switcher}>
      {options.map((option, index) => (
        <span
          key={index}
          className={classNames(styles.switchItem, {
            [`${styles.isSelected}`]: state === option,
          })}
          onClick={() => selectHandler(option)}
        >
          {option}
        </span>
      ))}
    </div>
  );
};

Switcher.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Switcher;
