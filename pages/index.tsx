import Head from "next/head";
import { NextPage } from "next";
import { Banner, NavBar, SectionCards } from "@/components";
import { getVideos } from "@/lib/videos";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const disneyVideos = getVideos();

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
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="lg" />
        <SectionCards title="Productivity" videos={disneyVideos} />
      </div>
    </div>
  );
};

export default Home;
