import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./navbar.module.css";

interface NavBarProps {
  userName: string;
}

const NavBar: FC<NavBarProps> = ({ userName }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>Netflix</div>
        </Link>

        <ul className={styles.navItems}>
          <li
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router.push("/browse/my-list");
            }}
          >
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{userName}</p>
            </button>
            <div className={styles.navDropdown}>
              <Link href="/login" className={styles.linkName}>
                Sign out
              </Link>
              <div className={styles.lineWrapper}></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { NavBar };
