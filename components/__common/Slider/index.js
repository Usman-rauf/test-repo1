import React from "react";
import Image from "next/image";
import styles from "./Slider.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Assets01 from "../../../public/Assests/Asset 1.png";

const Slider = () => {


  const responsive = {
  
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-16 mx-auto">
      <Carousel responsive={responsive}
      margin={100}>
        <div className={styles.cardpossition}>
          <div className={styles.heropatren}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              Onboard Your Project to the Self-Reporting Dashboard (SRD)
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.herpatren2}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              The Early Bird Catches The Worm-Richest Individual Bitcoin
              Investors
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.heropatren}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              The Early Bird Catches The Worm-Richest Individual Bitcoin
              Investors
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.herpatren3}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              Onboard Your Project to the Self-Reporting Dashboard (SRD)
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.heropatren}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              The Early Bird Catches The Worm-Richest Individual Bitcoin
              Investors
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.heropatren}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              Onboard Your Project to the Self-Reporting Dashboard (SRD)
            </p>
          </div>
        </div>
        <div className={styles.cardpossition}>
          <div className={styles.heropatren}></div>

          <div className="absolute  top-1 left-2">
            <Image
              alt="img2"
              src={Assets01}
              width={150}
              className={styles.img}
            />
          </div>
          <div className={styles.textpossition}>
            <p className={styles.slidertext}>
              The Early Bird Catches The Worm-Richest Individual Bitcoin
              Investors
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
