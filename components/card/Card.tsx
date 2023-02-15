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
          onError={() =>
            setImgSrc(
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            )
          }
        />
      </div>
    </div>
  );
};

export { Card };
