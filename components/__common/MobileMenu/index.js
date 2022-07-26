import React from "react";
import styles from "./MobileMenu.module.scss";
import { motion } from "framer-motion";
import animations from "./MobileMenu.animate";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ mobileMenuHandler }) => {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const handleConnectModal = () => {
    setConnectModalOpen(!connectModalOpen);
  };
  return (
    <>
      <motion.div
        className={styles.wrapper}
        variants={animations.container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.closeRow} onClick={mobileMenuHandler}>
          <CgClose className={styles.closeIcon} />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href="listCoins"
            >
              List of coins
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href="/staking"
            >
              Staking
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href="/addCoins"
            >
              Add Coins
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href="/promote"
            >
              Promote
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href="/portfolio"
            >
              Portfolio
            </Link>
            <button className={styles.button} onClick={handleConnectModal}>
              {/*  <img src={wallet} alt="wallet" />*/}
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
