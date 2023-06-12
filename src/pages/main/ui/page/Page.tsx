import { Link } from "react-router-dom";

import home__img from "@/assets/home.png"
import styles from "./index.module.scss";
import cn from "classname";

export function MainPage () {
  return (
    <div className={cn(styles.container, styles.home__container)}>
      <div className={styles.home__data}>
        <h1 className={styles.home__title}>
          Welcome to my repository
        </h1>
        <p className={styles.home__desc}>
          I created it for clarity, examples of how the react-hook-form library works <br/>
          as well as with the FSD methodology. Fast navigation )
        </p>
        <div className={styles.home__btns}>
          <Link to="/signin" className={styles.home__btn}>Sign in</Link>
          <Link to="/signup" className={styles.home__btn}>Sign up</Link>
        </div>
      </div>

      <img src={home__img} />
    </div>
  )
}
