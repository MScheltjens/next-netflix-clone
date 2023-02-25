import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./navbar.module.css";
import Image from "next/image";

interface NavBarProps {
  userName: string;
}

const NavBar: FC<NavBarProps> = ({ userName }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="netflix logo"
              width="128"
              height="34"
            />
          </div>
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
            <button
              className={styles.usernameBtn}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p className={styles.username}>{userName}</p>
              <Image
                src="static/expand_more_white.svg"
                alt="arrow down"
                width="24"
                height="24"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <Link href="signin" className={styles.linkName}>
                  Sign In
                </Link>
                <div className={styles.lineWrapper}></div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export { NavBar };
