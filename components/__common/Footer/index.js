import React from "react";
import Image from "next/image";
import facebook from "../../../public/Assests/Facebook.png";
import linkedin from "../../../public/Assests/linkedin.png";
import git from "../../../public/Assests/git.png";
import Twitter from "../../../public/Assests/Twitter.png";
import insta from "../../../public/Assests/Instagram.png";
import Nav from "../../../public/Assests/nav.png";
import Logo from "../../../public/Assests/Group 2.png";
import { useState } from "react";
import Styles from "./Footer.module.scss";

const Footer = () => {
  const [isHovering, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="dark:bg-[#252424] bg-white">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-12 ">
          <div className={Styles.first}>
            <li href="/" className="flex">
              <Image src={Logo} alt="logo" className="object-contain" />
              <p className={Styles.logoText}>Coin Official</p>
            </li>
            <p className={Styles.firsttext}>
              Depending on the Company User Experience designer may need a jack
              of all trades
            </p>
            <div className="flex mt-20 mb-">
              <p className="dark:text-white text-[13px]">Support</p>
              <p className="dark:text-white text-[13px] ml-4">
                Terms & Services
              </p>
              <p className="dark:text-white text-[13px] ml-4">
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className={Styles.second}>
            <p className="dark:text-white text-[13px]">First Link</p>
            <p className="dark:text-white text-[13px] mt-3">Second Link</p>
            <p className="dark:text-white text-[13px] mt-3">Third Link</p>
            <p className="dark:text-white text-[13px] mt-3">Fourth Link</p>
            <div className="flex mt-16 justify-evenly">
              <Image alt="footer img" src={facebook} className="mr-3" />
              <Image alt="footer img" src={linkedin} className="ml-3" />
              <Image alt="footer img" src={git} className="ml-3" />
              <Image alt="footer img" src={Twitter} className="ml-3" />
              <Image alt="footer img" src={insta} className="ml-3" />
            </div>
          </div>
          <div className={Styles.third}>
            <p className={Styles.newsLetter}>Newslwtter</p>
            <div className="flex justify-between">
              <p className="text-md font-medium dark:text-white">
                Suscribe Coin Official
              </p>
              <p className="dark:text-white text-[13px] mt-1">
                For Our Future Updates
              </p>
            </div>
            <div className="mt-3">
              <div className="relative">
                <div
                  className={Styles.newsLetterImg}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {isHovering ? (
                    <Image
                      alt="footer img"
                      height={35}
                      width={40}
                      className="h-3 text-gray-500 cursor-pointer dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      src={Nav}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className={Styles.footerInput}
                  placeholder="your email"
                />
              </div>
            </div>
            <p className="dark:text-white text-[13px] mt-20">
              2022 CoinOfficial all rights reservd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
