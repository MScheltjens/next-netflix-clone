import { FC } from "react";
import { Card } from "../Card";

import styles from "./sectionCard.module.css";

interface SectionCardProps {
  title: string;
}

const SectionCards: FC<SectionCardProps> = ({ title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card id={0} imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
        <Card imgUrl="/static/clifford.webp" size="lg" />
      </div>
    </section>
  );
};

export { SectionCards };
