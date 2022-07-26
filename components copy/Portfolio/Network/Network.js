import React from "react";
import styles from "./Network.module.scss";
import BarChart from "../BarChart/BarChart";
import { useState } from "react";

const Network = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={styles.network}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <span>Portfolio Progress</span>
          </div>
          <div className={styles.graphsection}>
            <div className={styles.graphbody}>
              <div className={styles.graghrole}>
                {/* <div className={styles.leftheading}>
                  <span>$28,905.93</span>
                  <p>ACX Price</p>
                </div> */}
                <div className={styles.rightheading}>
                  <ul>
                    <li>
                      <button
                        className={active == 1 ? styles.activebtn : ''}
                        onClick={() => setActive(1)}
                      >
                        1 Week
                      </button>
                    </li>
                    <li>
                      <button 
                     className={active == 2 ? styles.activebtn : ''}

                      onClick={() => setActive(2)}>1 Month</button>
                    </li>
                    <li>
                      <button 
                       className={active == 3 ? styles.activebtn : ''}

                      onClick={() => setActive(3)}>3 Month</button>
                    </li>
                    <li>
                      <button
                      className={active == 4 ? styles.activebtn : ''}

                      onClick={() => setActive(4)}>1 year</button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.graph}>
                {active === 1 ? (
                  <BarChart defaultColor={true} />
                ) : (
                  <p className="w-full text-center dark:text-white mt-5">Comming Soon...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
