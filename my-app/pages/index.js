import Head from "next/head";
import Link from "next/link";
import styles from "../styles/styles.module.css";

function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1>Your event oasis for every occasion!</h1>
      </div>
    </>
  );
}

export default Home;
