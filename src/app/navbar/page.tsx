import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      {true ? ( // loginAccepted
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link href="/firstComponent">
                <img
                  className={styles.navImg}
                  src="../../assets/misc/home_tab.png"
                  alt="Tab for home page"
                />
                Link to First Component
              </Link>
            </li>
            <li>
              <Link href="/seasons">
                <img
                  className={styles.navImg}
                  src="../../assets/misc/seasons_tab.png"
                  alt="Tab for seasons page"
                />
              </Link>
            </li>
            <div className={styles.logo}>
              <img
                className={styles.navLogo}
                src="../../assets/logos/Jojos_logo_japanese.jpg"
                alt="Jojo's logo"
              />
              <div className={styles.wavyText}>
                <div className={styles.logoText}>
                  <div className={styles.logoLetter}>J</div>
                  <div className={styles.logoLetter}>o</div>
                  <div className={styles.logoLetter}>j</div>
                  <div className={styles.logoLetter}>o</div>
                  <div className={styles.logoLetter}>'</div>
                  <div className={styles.logoLetter}>s</div>
                  <div className={styles.logoLetter}>&nbsp;</div>
                  <div className={styles.logoLetter}>B</div>
                  <div className={styles.logoLetter}>i</div>
                  <div className={styles.logoLetter}>z</div>
                  <div className={styles.logoLetter}>a</div>
                  <div className={styles.logoLetter}>r</div>
                  <div className={styles.logoLetter}>r</div>
                  <div className={styles.logoLetter}>e</div>
                  <div className={styles.logoLetter}>&nbsp;</div>
                  <div className={styles.logoLetter}>A</div>
                  <div className={styles.logoLetter}>d</div>
                  <div className={styles.logoLetter}>v</div>
                  <div className={styles.logoLetter}>e</div>
                  <div className={styles.logoLetter}>n</div>
                  <div className={styles.logoLetter}>t</div>
                  <div className={styles.logoLetter}>u</div>
                  <div className={styles.logoLetter}>r</div>
                  <div className={styles.logoLetter}>e</div>
                </div>
                <div className={styles.logoText}>
                  <div className={styles.logoLetter}>&nbsp;</div>
                  <div className={styles.logoLetter}>U</div>
                  <div className={styles.logoLetter}>b</div>
                  <div className={styles.logoLetter}>e</div>
                  <div className={styles.logoLetter}>r</div>
                  <div className={styles.logoLetter}>f</div>
                  <div className={styles.logoLetter}>a</div>
                  <div className={styles.logoLetter}>n</div>
                  <div className={styles.logoLetter}>&nbsp;</div>
                  <div className={styles.logoLetter}>P</div>
                  <div className={styles.logoLetter}>a</div>
                  <div className={styles.logoLetter}>g</div>
                  <div className={styles.logoLetter}>e</div>
                  <div className={styles.logoLetter}>!</div>
                </div>
              </div>
            </div>
            <li>
              <Link href="/scenes">
                <img
                  className={styles.navImg}
                  src="../../assets/misc/scenes_tab.png"
                  alt="Tab for scenes page"
                />
              </Link>
            </li>
            <br />
            <li>
              <Link href="/characters">
                <img
                  className={styles.navImg}
                  src="../../assets/misc/characters_tab_2.png"
                  alt="Tab for characters page"
                />
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
