import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Link href="/">
            <p>UNITICKET</p>
          </Link>
        </div>
        <div className={styles.right}>
          <ul className={styles.list}>
            <li>
              <Link href="/events/explore">
                <p>Explore Events</p>
              </Link>
            </li>
            <li>
              <Link href="/user/login">
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link href="/user/register">
                <p>Create an Account</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
