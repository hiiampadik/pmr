import styles from "../styles/TopMenu.module.scss";
import React, { useState } from "react";
import logo from '../public/logo.svg'
import Figure from "../components/Figure";

export default function TopMenu(props) {

  return (
    <nav className={styles.nav}>
      <Figure
          image={logo}
          alt={"Logo"}
          width={"300"}
          height={""}
          className={styles.navLogo}
      />
        <div className={styles.navBg}></div>
    </nav>
  );
}
