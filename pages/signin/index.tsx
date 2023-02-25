import { NextPage } from "next";

import styles from "./signin.module.css";

const SignIn: NextPage = () => {
  return (
    <section className={styles.signInWrapper}>
      <form className={styles.signInForm}>
        <input type="email" placeholder="test@test.be" />
        <input type="password" placeholder="**********" />
        <button type="submit">Login</button>
        <button type="submit">Sign In with Google!</button>
        <button type="submit">Sign In with Github</button>
      </form>
    </section>
  );
};

export default SignIn;
