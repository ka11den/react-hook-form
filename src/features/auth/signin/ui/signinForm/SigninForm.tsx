import { useForm } from 'react-hook-form'
import { SigninFormInput } from '@/features/auth/signin/model/signinFormSchema';
import styles from "./index.module.scss"
import cn from "classname"

export function SigninForm () {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<SigninFormInput>();

  const onSubmit = ({email, password}: SigninFormInput) => console.log({email, password});

  return (
    <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
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
        <button type="submit">Sign in</button>
      </div>      
    </form>
  )
}
