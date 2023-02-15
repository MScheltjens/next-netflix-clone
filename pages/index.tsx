import Head from "next/head";
import { NextPage } from "next";
import { Banner, Card, NavBar } from "@/components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar userName="userName" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <Card imgUrl="/static/clifford.webp" size="lg" />
      <Card imgUrl="/static/cliffffdsqd.webp" />
      <Card imgUrl="/static/clifford.webp" size="sm" />
    </div>
  );
};

export default Home;
