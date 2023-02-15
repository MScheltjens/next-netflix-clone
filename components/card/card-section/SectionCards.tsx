import { TApiVideo } from "@/types/types";
import { FC } from "react";
import { Card } from "../Card";

import styles from "./sectionCard.module.css";

interface SectionCardProps {
  title: string;
  videos: TApiVideo[];
  size?: "lg" | "sm";
}

const SectionCards: FC<SectionCardProps> = ({ title, videos, size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, i) => (
          <Card id={i} key={i} imgUrl={video.imgUrl} size={size} />
        ))}
      </div>
    </section>
  );
};

export { SectionCards };
