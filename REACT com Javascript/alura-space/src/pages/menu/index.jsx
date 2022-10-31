import React from "react";
import styles from "./Menu.module.scss";
import icones from './icones.json';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
      {icones.map(icone => (
        <li className={styles.menu__item}>
          <img key={icone.id} src={icone.path} alt={icone.alt}  />
          <a href="/">{icone.link}</a>
        </li>
      ))}
      </ul>
    </nav>
  );
}
