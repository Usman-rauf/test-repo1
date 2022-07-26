import styles from "./navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Assest1 from "../../../public/Assests/Asset 2.png";
import Assest2 from "../../../public/Assests/Asset 1.png";

const Navigation = ({ isActive }) => {
  const [popupvisible, setpopupvisible] = useState(false);
  const router = useRouter();
  const togglepopup = (e, num) => {
    setpopupvisible((preview) => !preview);
  };

  // const [connectModalOpen, setConnectModalOpen] = useState(false);
  // const handleConnectModal = () => {
  //   setConnectModalOpen(!connectModalOpen);
  // };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={styles.containerr}>
      <Modal visible={popupvisible} btn onClose={() => setpopupvisible(false)}>
        ksahdjkshjkdhsakdhsahdjkash
      </Modal>
      <nav className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            {isActive ? (
              <Image src={Assest2} width={170} height={45} alt="Zah Logo" />
            ) : (
              <Image src={Assest1} width={170} height={45} alt="Zah Logo" />
            )}
          </Link>
        </div>
        {!isMobileMenuOpen && (
          <FiMenu onClick={mobileMenuHandler} className={styles.menuIcon} />
        )}
        <div className={styles.linkWrapper}>
          <div className={styles.links}>
            <Link
              href="/listCoins"
              className={router.pathname == "/listCoins" ? "activeLink" : ""}
            >
              <div className={styles.link}>
                <div className={styles.text}>List of coins</div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/staking"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.iconText}>
                  <div className={styles.icon}>
                    {/*<img src={cartActive} alt="icon" />*/}
                  </div>
                  <div className={styles.text}>Staking</div>
                </div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/addCoins"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>Add Coins</div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/promote"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>Promote</div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/portfolio"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>Portfolio</div>
                <div className={styles.activeBar} />
              </div>
            </Link>
          </div>
          <div>
            <button
              className={styles.buttonn}
              type="button"
              onClick={() => togglepopup()}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && <MobileMenu mobileMenuHandler={mobileMenuHandler} />}
    </div>
  );
};

export default Navigation;
