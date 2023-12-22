import styles from "../styles/TopMenu.module.scss";
import React from "react";
import logo from '../public/2.svg'
import Figure from "../components/Figure";

export default function TopMenu(props) {

  return (
    <nav className={styles.nav}>
          <Figure
              image={logo}
              alt={"Logo"}
              height={"100"}
              className={styles.navLogo}
              handleClick={() => props.handleClick()}
          />

        <div className={styles.navBg}></div>
    </nav>
  );
}
