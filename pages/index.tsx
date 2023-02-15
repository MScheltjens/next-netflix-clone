import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { Banner, NavBar, SectionCards } from "@/components";
import { getVideos } from "@/lib/videos";
import { TApiVideo } from "@/types/types";

import styles from "../styles/Home.module.css";

interface HomePageProps {
  videos: TApiVideo[];
}

const Home: NextPage<HomePageProps> = ({ videos }) => {
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
        <SectionCards title="Disney" videos={videos} size="lg" />
        <SectionCards title="Productivity" videos={videos} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { videos: getVideos() } };
};
