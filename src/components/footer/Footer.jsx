import React from "react";

/* Styles */
import styles from "./Footer.module.css";

/* Own Components */
import { ReactComponent as FacebookIcon } from "../../assets/footer/footer_fb.svg";
import { ReactComponent as InstagramIcon } from "../../assets/footer/footer_ig.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/footer/footer_yt.svg";
import { ReactComponent as MessengerIcon } from "../../assets/footer/footer_msg.svg";
import { ReactComponent as TwitterIcon } from "../../assets/footer/footer_tw.svg";
import Switcher from "../ui/switcher/Switcher";
import Dropdown from "../ui/dropdown/Dropdown";

/* Data */
import GlsLogo from "../../assets/footer/gls.png";
import DpdLogo from "../../assets/footer/dpd.png";
import PaypalLogo from "../../assets/footer/paypal.png";
import MastercardLogo from "../../assets/footer/mastercard.png";
import MaestroLogo from "../../assets/footer/maestro.png";
import ShoprenterLogo from "../../assets/footer/shoprenter.png";
import ArukeresoLogo from "../../assets/footer/arukereso.png";

const Footer = () => {
  const footerMenuItems = [
    { name: "Kapcsolat", link: "/" },
    { name: "Akciós termékek", link: "/" },
    { name: "Adatvédelmi nyilatkozat", link: "/" },
    { name: "Vásárlási feltételek", link: "/" },
    { name: "Fizetés, szállítás", link: "/" },
    { name: "Adatvédelem", link: "/" },
    { name: "Segítség", link: "/" },
    { name: "Rólunk", link: "/" },
  ];
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerMenu}>
          {footerMenuItems.map(({ name, link }, index) => (
            <a href={link} className={styles.footerMenuItem} key={index}>
              {name}
            </a>
          ))}
        </div>
        <div className={styles.footerContactItems}>
          <span className={styles.footerContactItem}>
            4028 Debrecen, Kassai út 129
          </span>
          <a
            className={styles.footerContactItem}
            href="mailto:info@shoprenter.hu"
          >
            info@shoprenter.hu
          </a>
          <span className={styles.footerContactItem}>+36-1/234-5012</span>
          <span className={styles.footerContactItem}>
            Nyitvatartás: h-p 9-17
          </span>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon className={styles.socialIcon} />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <YoutubeIcon className={styles.socialIcon} />
          </a>

          <a href="https://messenger.com" target="_blank" rel="noreferrer">
            <MessengerIcon className={styles.socialIcon} />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon className={styles.socialIcon} />
          </a>
        </div>
        <p className={styles.copyrightLine}>© 2021 Teszts téma</p>
        <div className={styles.footerSelectors}>
          <Switcher options={["Hu", "En"]} />
          <Dropdown options={["Huf", "Euro"]} />
        </div>
        <p className={styles.footerText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </footer>
      <div className={styles.partnerLogos}>
        <img src={GlsLogo} alt="GLS" />
        <img src={DpdLogo} alt="DPD" />
        <img src={PaypalLogo} alt="Paypal" />
        <img src={MastercardLogo} alt="Mastercard" />
        <img src={MaestroLogo} alt="Maestro" />
        <img src={ShoprenterLogo} alt="Shoprenter" />
        <img src={ArukeresoLogo} alt="Árukereső" />
      </div>
    </div>
  );
};

export default Footer;
