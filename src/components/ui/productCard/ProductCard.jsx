import React from "react";
import PropTypes from "prop-types";

/* Styles */
import styles from "./ProductCard.module.css";

/* Own Components */
import { ReactComponent as FavProductIcon } from "../../../assets/products/product_heart.svg";
import Rating from "../rating/Rating";

const ProductCard = (props) => {
  const addToFavHandler = () => {
    alert(`Added to fav: ${props.name}`);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productHeader}>
        <img src={props.img} alt={props.name} className={styles.headerImg} />
        <span className={styles.headerIcon} onClick={addToFavHandler}>
          <FavProductIcon />
        </span>
      </div>
      <div className={styles.productContent}>
        <p className={styles.contentTitle}>{props.name}</p>
        <p className={styles.contentDescription}>{props.description}</p>
        <Rating rating={props.rating} numOfRating={props.numOfRating} />
        <div className={styles.contentPrices}>
          {!!props.salePrice ? (
            <>
              <p className={styles.normalPrice}>{`${props.normalPrice} Ft`}</p>
              <p className={styles.salePrice}>{`${props.salePrice} Ft`}</p>
            </>
          ) : (
            <p className={styles.normalPrice}>{`${props.normalPrice} Ft`}</p>
          )}
        </div>
        <a className={styles.contentButton} href={props.link}>
          Kosárba
        </a>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  numOfRating: PropTypes.number.isRequired,
  normalPrice: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
  link: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  img: "",
  name: "",
  description: "",
  rating: 0,
  numOfRating: 0,
  normalPrice: 0,
  link: "",
};

export default ProductCard;
