import { FC, useState } from "react";
import Image from "next/image";

import styles from "./card.module.css";

interface CardProps {
  imgUrl: string;
  size?: "lg" | "sm";
}

const Card: FC<CardProps> = ({ imgUrl, size = "md" }) => {
  const [imgSrc, setImgSrc] = useState<string>(imgUrl);
  return (
    <div className={styles.container}>
      Card
      <div className={styles[size]}>
        <Image
          src={imgSrc}
          alt="image"
          fill
          className={styles.cardImg}
          onError={() => setImgSrc("/static/clifford.webp")}
        />
      </div>
    </div>
  );
};

export { Card };
