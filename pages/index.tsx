import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { Banner, NavBar, SectionCards } from "@/components";
import { getVideos } from "@/service/videos";
import { TApiVideo } from "@/types/types";
import { magic } from "../lib/magic-client";

import styles from "../styles/Home.module.css";

interface HomePageProps {
  disneyVideos: TApiVideo[];
  travelVideos: TApiVideo[];
  productivityVideos: TApiVideo[];
  popularVideos: TApiVideo[];
}

const Home: NextPage<HomePageProps> = ({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) => {
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
        <SectionCards title="Travel" videos={travelVideos} size="sm" />
        <SectionCards title="Productivity" videos={productivityVideos} />
        <SectionCards title="Popular" videos={popularVideos} size="sm" />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      disneyVideos: await getVideos("disney trailer"),
      travelVideos: await getVideos("travel"),
      productivityVideos: await getVideos("productivity"),
      popularVideos: await getVideos("disney trailer"),
    },
  };
};
