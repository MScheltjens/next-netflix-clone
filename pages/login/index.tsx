import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "./login.module.css";
import { EventHandler, MouseEvent, MouseEventHandler } from "react";

interface LoginProps {}

const Login: NextPage<LoginProps> = () => {
  const handleLoginEmail = (e: MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header>
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
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
            />
            <p className={styles.userMsg}></p>
            <button
              onClick={handleLoginEmail}
              className={styles.loginButton}
              style={{ color: "white" }}
            >
              Sign In
            </button>
          </div>
        </main>
      </header>
    </>
  );
};

export default Login;
