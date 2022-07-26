import React, { useState } from "react";
import Horn from "../../../public/Assests/card horn.png";
import Image from "next/image";
import Equi from "../../../public/Assests/equi.png";
import Safe from "../../../public/Assests/safe.png";
import Meta from "../../../public/Assests/meta.png";
import Trend from "../../../public/Assests/trend.png";
import styles from './CryptoPrices.module.scss';
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";

const CryptoPrices = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="mt-20  flex justify-between">
        <div>
          <p className={styles.priceHeading}>
            Todays Cryptocyrency Prices by Coin Official
          </p>
          <p className="text-sm dark:text-white">
            The global crypto market cap is $901.79B,{" "}
            <span className="text-[#E86062]">-0.93%</span> decrease over the
            last day.
          </p>
        </div>
        <div className="flex">
          <p className={styles.toggleText}>Higlights</p>
          <DragSwitch checked={checked} onChange={(e) => setChecked(e)} />
        </div>
      </div>

      <div className="grid gap-x-2 grid-cols-12 ">
        <div className={styles.firstSpan}>
          <div className={styles.cardBg}>
            <div className="flex px-7">
              <Image alt="horn" src={Horn} className={styles.image} />
              <p className={styles.heading}>Permoted</p>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">1</p>
                <Image alt="equi" src={Equi} className={styles.image} />
                <p className="ml-2">Equilibrium</p>
                <p className={styles.text}>EQUM</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">2</p>
                <Image alt="safe" src={Safe} className={styles.image} />
                <p className="ml-2">SafePuloto</p>
                <p className={styles.text}>SPI</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+1.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">3</p>
                <Image alt="meta" src={Meta} className={styles.image} />
                <p className="ml-2">Meta</p>
                <p className={styles.text}>META</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.firstSpan}>
          <div className={styles.cardBg}>
            <div className="flex px-7">
              <Image alt="horn" src={Horn} className={styles.image} />
              <p className={styles.heading}>Largest increase 24h</p>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">1</p>
                <Image alt="equi" src={Equi} className={styles.image} />
                <p className="ml-2">Equilibrium</p>
                <p className={styles.text}>EQUM</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">2</p>
                <Image alt="safe" src={Safe} className={styles.image} />
                <p className="ml-2">SafePuloto</p>
                <p className={styles.text}>SPI</p>
              </div>
              <div>
                <p className={styles.success}>+1.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">3</p>
                <Image alt="meta" src={Meta} className={styles.image} />
                <p className="ml-2">Meta</p>
                <p className={styles.text}>META</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.firstSpan}>
          <div className={styles.cardBg}>
            <div className="flex px-7">
              <Image alt="trend" src={Trend} className={styles.image} />
              <p className={styles.heading}>Trending</p>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">1</p>
                <Image alt="equi" src={Equi} className={styles.image} />
                <p className="ml-2">Equilibrium</p>
                <p className={styles.text}>EQUM</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">2</p>
                <Image alt="safe" src={Safe} className={styles.image} />
                <p className="ml-2">SafePuloto</p>
                <p className={styles.text}>SPI</p>
              </div>
              <div>
                <p className={styles.success}>+1.78%</p>
              </div>
            </div>
            <div className={styles.flexx}>
              <div className="flex">
                <p className="mr-4">3</p>
                <Image alt="meta" src={Meta} className={styles.image} />
                <p className="ml-2">Meta</p>
                <p className={styles.text}>META</p>
              </div>
              <div>
                <p className={styles.success}>+2.78%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoPrices;
