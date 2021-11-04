import React from "react";

/* Styles */
import styles from "./Banner.module.css";

/* Own Components */
import { ReactComponent as DetailsArrow } from "../../assets/details_arrow.svg";

/* Data */
import BannerImg from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <img className={styles.bannerImg} src={BannerImg} alt="Banner" />
        <div className={styles.bannerContent}>
          <p className={styles.contentTitle}>a természetes szépségért</p>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <a href="/" className={styles.contentButton}>
            megnézem
            <DetailsArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
