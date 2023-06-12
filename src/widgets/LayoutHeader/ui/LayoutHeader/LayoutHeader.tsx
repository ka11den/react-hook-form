import { Link } from "react-router-dom";

import cn from "classname"
import styles from './index.module.scss'

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, styles.container)}>
        <a href="/" className={styles.nav__logo}>
          react-hook-form
        </a>

        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="/signin" className={cn(styles.nav__link, styles.active)}>Sign in</a>
            </li>
            <li className={styles.nav__item}>
              <a href="/signup" className={cn(styles.nav__link, styles.active)}>Sign up</a>
            </li>
          </ul>
        </div>

      </nav>
  </header>
  );
}