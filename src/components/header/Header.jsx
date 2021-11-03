import React, { useState } from "react";
import classNames from "classnames";

/* Styles */
import styles from "./Header.module.css";

/* Own Components */
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow_down.svg";
import { ReactComponent as ProfileIcon } from "../../assets/header_profile.svg";
import { ReactComponent as HeartIcon } from "../../assets/header_heart.svg";
import { ReactComponent as BagIcon } from "../../assets/header_bag.svg";
import { ReactComponent as VialIcon } from "../../assets/subheader_vial.svg";
import Navigation from "../ui/navigation/Navigation";
import Searchbar from "../ui/searchbar/Searchbar";
import Logo from "../ui/logo/Logo";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const iconClickHandler = (value) => {
    alert(`Clicked: ${value}`);
  };

  const drawerHandler = () => {
    setDrawer(!drawer);
  };

  const drawerIconClasses = classNames(styles.drawerIcon, {
    [`${styles.isClicked}`]: drawer,
  });

  const menuClasses = classNames(styles.menu, {
    [`${styles.isOpened}`]: drawer,
  });

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.infos}>
          <span className={styles.infoTel}>09 87 654 3210</span>
          <div className={styles.infoLinks}>
            <a className={styles.link} href="/">
              Kapcsolat
            </a>
            <a className={styles.link} href="/">
              Rólunk
            </a>
            <a className={styles.link} href="/">
              Fizetés, szállítás
              <ArrowDownIcon className={styles.linkIcon} />
            </a>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo link="/" simple="Teszt" highlighted="téma" />
        </div>
        <div className={styles.actions}>
          <Searchbar />
          <div className={styles.actionIcons}>
            <ProfileIcon
              className={styles.actionIcon}
              onClick={() => iconClickHandler("Profile")}
            />
            <HeartIcon
              className={styles.actionIcon}
              onClick={() => iconClickHandler("Heart")}
            />
            <BagIcon
              className={styles.actionIcon}
              onClick={() => iconClickHandler("Bag")}
            />
          </div>
        </div>
        <div className={drawerIconClasses} onClick={drawerHandler} />
        <nav className={menuClasses}>
          <Navigation />
        </nav>
      </header>
      <div className={styles.subHeader}>
        <VialIcon />
        <span>kizárólag növényi eredetű alkotó elemek</span>
      </div>
      {drawer && (
        <div className={styles.drawerOverlay} onClick={drawerHandler} />
      )}
    </div>
  );
};

export default Header;
