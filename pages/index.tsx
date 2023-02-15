import Head from "next/head";
import { NextPage } from "next";
import { Banner } from "@/components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix</h1>

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      {/* <Navbar />
      <Card /> */}
    </div>
  );
};

export default Home;
