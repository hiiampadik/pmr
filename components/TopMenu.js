import styles from "../styles/TopMenu.module.scss";
import React from "react";
import logo from '../public/logo.svg'
import Figure from "../components/Figure";

export default function TopMenu(props) {

  return (
    <nav className={styles.nav}>
        <div onClick={() => props.handleClick()}>
              <Figure
                  image={logo}
                  alt={"Logo"}
                  height={"200"}
                  className={styles.navLogo}
              />
        </div>

        <div className={styles.navBg}></div>
    </nav>
  );
}
