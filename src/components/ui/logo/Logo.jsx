import React from "react";
import PropTypes from "prop-types";

/* Styles */
import styles from "./Logo.module.css";

const Logo = ({ link, simple, highlighted }) => {
  return (
    <a href={link} className={styles.logoText}>
      <span>{simple}</span>
      {highlighted}
    </a>
  );
};

Logo.propTypes = {
  link: PropTypes.string.isRequired,
  simple: PropTypes.string.isRequired,
  highlighted: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  link: "",
  simple: "",
  highlighted: "",
};

export default Logo;
