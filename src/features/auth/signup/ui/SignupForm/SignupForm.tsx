import { useForm } from 'react-hook-form'
import { SignupFormInput } from '@/features/auth/signup/model/signupFormSchema';
import styles from "./index.module.scss"
import cn from "classname"

export function SignupForm () {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<SignupFormInput>();

  const onSubmit = ({username, email, password}: SignupFormInput) => console.log({username, email, password}) // dispatch?;

  return (
    <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Signup</h1>
      <div className={styles.login__content}>
        <div className={styles.login__box}>
          {/* icon */}
          <div className={styles.login__box_input}>
            
            <input className={cn(errors.email ? styles.login__box_input_err : "")} placeholder="Email" type="email" {...register("email", {
              required: "You left an empty field",
              minLength: {
                value: 10,
                message: "minimum of 10 characters"
              }
            })} />
            <p className={styles.login__input_err}>{errors?.email?.message}</p>
          </div>
        </div>

        <div className={styles.login__box}>
          {/* icon */}
          <div className={styles.login__box_input}>
            
            <input className={cn(errors.email ? styles.login__box_input_err : "")} placeholder="Username" type="text" {...register("username", {
              required: "You left an empty field",
              minLength: {
                value: 4,
                message: "minimum of 4 characters"
              }
            })} />
            <p className={styles.login__input_err}>{errors?.username?.message}</p>
          </div>
        </div>

        <div className={styles.login__box}>
          {/* icon */}
          <div className={styles.login__box_input}>
            
            <input className={cn(errors.password ? styles.login__box_input_err : "")} placeholder="Password" type="password" {...register("password", {
              required: "You left an empty field",
              minLength: {
                value: 5,
                message: "minimum of 5 characters"
              }
            })} />
            <p className={styles.login__input_err}>{errors?.password?.message}</p>
          </div>
        </div>
        <button type="submit">Sign up</button>
      </div>      
    </form>
  )
}
