import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Content from "../components/Content";

import pdf from "../public/images/work/pdf.svg";
import styles from "../styles/modules/Content.module.css";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

export default function About({ canonical }) {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Content>
        <motion.header
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className={`${styles.Header} ${styles.NoMargin}`}
        >
          <h1 className={`${styles.Title}`}>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
          </h1>
        </motion.header>
        <div className="flex justify-center">
          <Link href="../static/Maximilian_Hagerf.pdf">
            <a className={styles.WorkCV} target="_blank">
              <Image src={pdf} alt="fds" loading="eager" />
            </a>
          </Link>
        </div>
      </Content>
    </>
  );
}