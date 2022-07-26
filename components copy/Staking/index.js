import React from "react";
import Head from "../../public/Assests/xyz.svg";
import Image from "next/image";
import styles from "./Staking.module.scss";
import StakingData from "./Data/StakingData";
const index = () => {
  return (
    <div className={styles.containerr}>
      <div className={styles.uperGrid}>
        <div className={styles.uperSpan}>
          <div className={styles.inerGrid}>
            {StakingData.map((data) => {
              return (
                <>
                  <div className={styles.inerSpan} key={data.id}>
                    <div className={styles.divIndex}>
                      <div className="w-full">
                      <Image
                      alt="staking"
                        src={Head}
                        width={350}
                        height={70}
                        layout="responsive"
                        className={styles.imgIndex}
                      />
                      </div>
                      <p className="text-center mb-4">{data.Staking}</p>

                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>
                          Stake Amount
                        </p>
                        <p className={styles.text}>{data.stakeAmount}</p>
                      </div>
                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>Reward</p>
                        <p className={styles.text}>{data.Reward}</p>
                      </div>
                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>Period</p>
                        <p className={styles.text}>{data.Period}</p>
                      </div>
                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>
                          Total Staked Tokens
                        </p>
                        <p className={styles.text}>{data.TotalTokens}</p>
                      </div>
                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>Your Stake</p>
                        <p className={styles.text}>{data.YourStake}</p>
                      </div>
                      <div className={styles.divFlex}>
                        <p className={styles.cardText}>you Reward</p>
                        <p className={styles.text}>{data.YourReward}</p>
                      </div>

                      <div className={styles.buttonMargin}>
                        <button className={styles.button}>Approve</button>
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

export default index;
