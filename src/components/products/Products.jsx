import React from "react";

/* Styles */
import styles from "./Products.module.css";

/* Data */
import Prod1 from "../../assets/products/prod1.png";
import Prod2 from "../../assets/products/prod2.png";
import Prod3 from "../../assets/products/prod3.png";
import Prod4 from "../../assets/products/prod4.png";
import ProductCard from "../ui/productCard/ProductCard";
import { ReactComponent as DetailsArrow } from "../../assets/products/products_details_arrow.svg";

const Products = () => {
  const productsData = [
    {
      img: Prod1,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. ",
      rating: 4,
      numOfRating: 12,
      normalPrice: 12300,
      salePrice: 10900,
      link: "/",
    },
    {
      img: Prod2,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. ",
      rating: 4,
      numOfRating: 12,
      normalPrice: 12300,
      salePrice: 10900,
      link: "/",
    },
    {
      img: Prod3,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. ",
      rating: 4,
      numOfRating: 12,
      normalPrice: 12300,
      salePrice: 10900,
      link: "/",
    },
    {
      img: Prod4,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. ",
      rating: 4,
      numOfRating: 12,
      normalPrice: 12300,
      salePrice: 10900,
      link: "/",
    },
  ];

  return (
    <div className={styles.productsWrapper}>
      <p className={styles.productsTitle}>Akciós Termékek</p>
      <div className={styles.productsContainer}>
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            name={product.name}
            description={product.description}
            rating={product.rating}
            numOfRating={product.numOfRating}
            normalPrice={product.normalPrice}
            salePrice={product.salePrice}
            link={product.link}
          />
        ))}
      </div>
      <a href="/" className={styles.productsDetailsButton}>
        Összes akciós termék
        <DetailsArrow />
      </a>
    </div>
  );
};

export default Products;
