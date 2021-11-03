import React from "react";

/* Styles */
import styles from "./Header.module.css";

/* Own Components */
import { ReactComponent as ArrowDownIcon } from "../../assets/header_arrow.svg";
import { ReactComponent as ProfileIcon } from "../../assets/header_profile.svg";
import { ReactComponent as HeartIcon } from "../../assets/header_heart.svg";
import { ReactComponent as BagIcon } from "../../assets/header_bag.svg";
import Navigation from "../ui/navigation/Navigation";
import Searchbar from "../ui/searchbar/Searchbar";
import Logo from "../ui/logo/Logo";

const Header = () => {
  const iconClickHandler = (value) => {
    alert(`Clicked: ${value}`);
  };

  return (
    <header className={styles.container}>
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
      <nav className={styles.menu}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
