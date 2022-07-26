import React from "react";
import Image from "next/image";
import Logo from "../../../public/Assests/Group 2.png";
import Check from "../../../public/Assests/Border.svg";
import PromoteData from "../../Staking/Data/PromoteCardData";
import styles from './PermoteCard.module.scss'

const Card = () => {
  return (
    <div>
      <p className={styles.cardHeading}>
        Permote Package And Pricing
      </p>
      <div className={styles.uperGrid}>
        <div className={styles.uperSpan}>
          <div className={styles.inerGrid}>
            {PromoteData.map((data) => {
              return (
                <>
                  <div className={styles.inerSpan}>
                    <div className={styles.card}>
                      <div className={styles.logo}>
                        <Image src={Logo} alt="Coin Offical" />
                        <p className={styles.section}>{data.section}</p>
                      </div>
                      <div className={styles.flexx}>
                        <Image src={Check} alt="check sign"/>
                        <p className={styles.cardText}>
                          {data.oneDay}
                        </p>
                      </div>
                      <div className={styles.flexx}>
                        <Image src={Check} alt="check sign"/>
                        <p className={styles.cardText}>
                          {data.Three}
                        </p>
                      </div>
                      <div className={styles.flexx}>
                        <Image src={Check} alt="check sign"/>
                        <p className={styles.cardText}>
                          {data.Five}
                        </p>
                      </div>
                      <div className={styles.flexx}>
                        <Image src={Check} alt="check sign"/>
                        <p className={styles.cardText}>
                          {data.Week}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
