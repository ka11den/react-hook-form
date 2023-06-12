import { SignupForm } from "@/features/auth/signup/index";

import cn from "classname";
import styles from "./index.module.scss";

import img from "@/assets/img.png";

export function SignupPage () {
  return (
    <div className={styles.container}>
      <h1>Welcome to react-hook-form</h1>
      <div className={cn(styles.signin__container, styles.grid)}>      
        <SignupForm />
        <img className={styles.signin__img} src={img} />
      </div>
    </div>
  )
}
