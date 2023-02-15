import Image from "next/image";
import { FC } from "react";
import styles from "./card.module.css";

interface CardProps {
  imgUrl: string;
  size: string;
}

const Card: FC<CardProps> = ({ imgUrl, size }) => {
  return (
    <div className={styles.container}>
      Card
      <div className={styles[size]}>
        <Image src={imgUrl} alt="image" fill className={styles.cardImg} />
      </div>
    </div>
  );
};

export { Card };
