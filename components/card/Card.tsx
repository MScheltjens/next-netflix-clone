import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./card.module.css";
import cls from "classnames";

interface CardProps {
  id?: number;
  imgUrl: string;
  size?: "lg" | "sm";
}

const Card: FC<CardProps> = ({ imgUrl, size = "md", id }) => {
  const [imgSrc, setImgSrc] = useState<string>(imgUrl);

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, styles[size])}
        whileHover={{ ...scale }}
      >
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
      </motion.div>
    </div>
  );
};

export { Card };
