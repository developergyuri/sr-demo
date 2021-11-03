import React from "react";

/* Styles */
import styles from "./Navigation.module.css";

const Navigation = () => {
  const menuItems = [
    "ARCÁPOLÁS",
    "TESTÁPOLÁs",
    "HAJÁPOLÁS",
    "SMINK",
    "BŐRTÍPUSOK",
    "ÚJDONSÁGOK",
    "FÉRFIAKNAK",
    "BABA-MAMA",
    "AJÁNDÉK ÖTLETEK",
    "MÁRKÁK",
    "AKCIÓ",
  ];

  return (
    <>
      {menuItems.map((item, index) => (
        <a className={styles.navItem} href="/" key={index}>
          {item}
        </a>
      ))}
    </>
  );
};

export default Navigation;
