import React from "react";
// import styles from "./Partners.module.scss";
import Fila from "../../../public/Assests/fila.png";
import Nike from "../../../public/Assests/nike.png";
import Adidas from "../../../public/Assests/adidas.png";
import sports from "../../../public/Assests/sports.png";
import Puma from "../../../public/Assests/Logo.png";
import Image from "next/image";
import styles from './Partners.module.scss'

const Partners = () => {
  return (
    <>
      <div className={styles.gridd}>
        <div className={styles.firstSpan}>
          <div className={styles.firstBg}>
            <p className={styles.firstHeading}>Partners</p>
            <div className={styles.flexx}>
              <Image
                alt="img 1"
                src={Fila}
                className="invert dark:invert-0 object-contain"
              />
              <Image
                alt="img 1"
                src={sports}
                className="invert dark:invert-0 object-contain"
              />
              <Image
                alt="img 1"
                src={Puma}
                className="invert dark:invert-0 object-contain"
              />
            </div>
          </div>
        </div>
        <div className={styles.firstSpan}>
          <div className={styles.firstBg}>
            <p className={styles.firstHeading}>Sponsonrs</p>
            <div className={styles.flexx}>
              <Image
                alt="img 1"
                src={Nike}
                className="invert dark:invert-0 object-contain"
              />
              <Image
                alt="img 1"
                src={sports}
                className="invert dark:invert-0 object-contain"
              />
              <Image
                alt="img 1"
                src={Adidas}
                className="invert dark:invert-0 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
