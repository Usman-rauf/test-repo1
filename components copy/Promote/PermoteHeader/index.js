import React from "react";
import Image from "next/image";
import Promote from '../../../public/Assests/promote.svg'
import styles from './PermoteHeader.module.scss'

const PromoteHeader = () => {
  return (
    <div>
      <div className={styles.containerr}>
        <p className={styles.permoteHead}>
          Promote Your Coin
        </p>
        <p className={styles.permoteText}>
          By promoting on coinofficial.io your coin will be visible on top of
          all other coins.
        </p>
        <p className={styles.secondText}>
          Promote your coin to 10k to 37k unique users daily!
        </p>
        <div className={styles.gridd}>
            <div className={styles.spann}>
        <div className={styles.divFlex}>
            <Image src={Promote} alt='promote'/>
            <p className={styles.bannerText}>Do never pay anyone for a promotion on our platform, unless you have received a confirmation email from promote@ coinofficial.io</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PromoteHeader;
