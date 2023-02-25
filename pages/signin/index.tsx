import { NextPage } from "next";
import Link from "next/link";

import styles from "./signin.module.css";

const SignIn: NextPage = () => {
  return (
    <section className={styles.signInWrapper}>
      <form className={styles.signInForm}>
        <input type="email" placeholder="test@test.be" />
        <input type="password" placeholder="**********" />
        <button type="submit">Login</button>
        <button type="submit">Sign In with Google</button>
        <button type="submit">Sign In with Github</button>
        <p>Dont have an account yet?</p>

        <Link href="/register">Register</Link>
      </form>
    </section>
  );
};

export default SignIn;
