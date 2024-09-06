import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={`side-padding ${styles.navbar}`}>
      <div className={styles.logo}>
        <img src="/images/OGFX.png" className={styles.logo_image} />
      </div>
      <div className={styles.links}>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
