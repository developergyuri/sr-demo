import React from "react";

/* Styles */
import styles from "./Mosaic.module.css";

/* Data */
import MozaicImg1 from "../../assets/mosaic/mosaic1.png";
import MozaicImg2 from "../../assets/mosaic/mosaic2.png";
import MozaicImg3 from "../../assets/mosaic/mosaic3.png";
import MozaicImg4 from "../../assets/mosaic/mosaic4.png";
import MozaicImg5 from "../../assets/mosaic/mosaic5.png";
import MozaicImg6 from "../../assets/mosaic/mosaic6.png";

const Mosaic = () => {
  const mosaicData = [
    { img: MozaicImg1, title: "Heading" },
    { img: MozaicImg2, title: "Heading" },
    { img: MozaicImg3, title: "Heading" },
    { img: MozaicImg4, title: "Heading" },
    { img: MozaicImg5, title: "Heading" },
    { img: MozaicImg6, title: "Heading" },
  ];
  return (
    <div className={styles.mosaicContainer}>
      {mosaicData.map((mosaic, index) => (
        <div className={styles.mosaicElement} key={index}>
          <img
            src={mosaic.img}
            alt={mosaic.title}
            className={styles.elementImg}
          />
          <span className={styles.elementTitle}>{mosaic.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Mosaic;
