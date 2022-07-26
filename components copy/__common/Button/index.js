import React from "react";
import styles from "./Button.module.scss";
import btnImage from "../../../public/Assests/Path 1546.png";
import Image from "next/image";

function Button({ primary, children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={primary ? styles.primary : styles.secondary}
      >
        <Image
          alt="img 1"
          src={btnImage}
          className="m-2"
          height="12px"
          width="12px"
        />
        {children}
      </button>
    </>
  );
}

export default Button;
