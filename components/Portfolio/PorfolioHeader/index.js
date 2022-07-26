import React from "react";
import styles from "./PortfolioHeader.module.scss";
import Network from "../Network/Network";

const PortfolioGraph = () => {
  return (
    <div>
      <div >
        <div className={styles.gridd}>
          <div className={styles.firstSpan}>
            <p className="dark:text-white">Overview</p>

            <div className={styles.cardBg}>
              <p className={styles.cardText}>Potfolio</p>
              <p className={styles.secondText}>Track your Asset value</p>
              <div className={styles.flexx}>
                <div>
                <p className={styles.cardText}>Portfolio</p>
                <p className={styles.successText}>$10365.76</p>
                </div>
                <div>
                <p className={styles.cardText}>Change 24H</p>
                <p className={styles.dangerText}>0.00%</p>
                </div>

              </div>
            </div>
            <div className={styles.cardBg}>
                <p className={styles.cardText}>CREATE TOKEN</p>
                <p className="text-[#636161] my-3 text-[14px]">Deploy and be the owner of a token</p>
                <p className={styles.cardText}>STANDARD TOKEN, LIQUIDITY, REWARDS AND MORE</p>
                <p className={styles.underLine}>Create your own token now!</p>


            </div>
          </div>
          <div className="col-span-12  lg:col-span-8">
            <Network />
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default PortfolioGraph;
