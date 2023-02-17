import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MouseEvent, useState } from "react";

import styles from "./login.module.css";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [userMsg, setUserMsg] = useState<string>("");
  const router = useRouter();

  const handleLoginEmail = (e: MouseEvent) => {
    e.preventDefault();
    if (email) {
      if (email === "test@gmail.com") {
        router.push("/");
      } else {
        setUserMsg("Email not found");
      }
    } else {
      setUserMsg("Please enter your email");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128"
                height="34"
              />
            </div>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={(e) => {
              setUserMsg("");
              setEmail(e.target.value);
            }}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
