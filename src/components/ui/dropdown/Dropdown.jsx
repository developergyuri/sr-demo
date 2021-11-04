import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

/* Styles */
import styles from "./Dropdown.module.css";

/* Own Component */
import { ReactComponent as ArrowDownIcon } from "../../../assets/arrow_down.svg";
import classNames from "classnames";

const Dropdown = ({ options }) => {
  const [state, setState] = useState("Huf");
  const [status, setStatus] = useState(false);
  const didMount = useRef(false);

  const dropdownShowHandler = () => {
    setStatus(!status);
  };

  const dropdownOptionsClasses = classNames(styles.dropdownOptions, {
    [`${styles.isOpened}`]: status,
  });

  const selectHandler = (value) => {
    setState(value);
  };

  useEffect(() => {
    if (didMount.current) console.log(`Selected currency: ${state}`);
    else didMount.current = true;
  }, [state]);

  return (
    <div className={styles.dropdown} onClick={dropdownShowHandler}>
      <span className={styles.dropdownOption}>{state}</span>
      <ArrowDownIcon className={styles.dropdownArrow} />
      <div className={dropdownOptionsClasses}>
        {options.map((option, index) => (
          <span
            className={styles.dropdownOption}
            key={index}
            onClick={() => selectHandler(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dropdown.defaultProps = {
  options: [],
};

export default Dropdown;
