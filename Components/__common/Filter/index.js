import React from 'react'
import Image from "next/image";
import New from "../../../public/Assests/new.png";
import Button1 from "../../../public/Assests/star.png";
import Best from "../../../public/Assests/best.png";
import Sale from "../../../public/Assests/sale.png";
import Audit from "../../../public/Assests/Audit.png";
import Search from "../../../public/Assests/search.3.png";
import Filterr from "../../../public/Assests/filter.png";
import Hot from "../../../public/Assests/hott.png";
import styles from './Filter.module.scss'
 const Filter = () => {
  return (
    <div>
         <div className="mt-12">
            <div className="grid  justify-between grid-cols-12">
          <div className="lg:col-span-6 mt-20  col-span-12">
            <button className={styles.button1}>
              <Image alt='img 1'
                src={Button1}
                className="invert"
                height="12px"
                width="12px"
              />{" "}
              Watchlist
            </button>
            <select
              name="cars"
              className={styles.filterSelect}
              id="cars"
            >
              <option value="volvo">select chain</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button className={styles.filterButton}>
              <Image alt='img 1' src={Filterr} height="12px" width="12px" /> Filters
            </button>
            <br />
            <button className={styles.filterButton}>
              <Image alt='img 1' src={Hot} height="12px" width="12px" /> Todats Hot
            </button>
            <button className={styles.filterButton}>
              <Image alt='img 1' src={New} height="12px" width="12px" /> New
            </button>
            <button className={styles.filterButton}>
              <Image alt='img 1' src={Best} height="12px" width="12px" /> Alltime Best
            </button>
            <button className={styles.filterButton}>
              <Image alt='img 1' src={Sale} height="12px" width="12px" /> Presale
            </button>

            <button className={styles.filterButton}>
              <Image alt='img 1' src={Audit} height="12px" width="12px" /> Audited
            </button>
          </div>
          <div className={styles.secondSpan}>
            <div className="flex flex-wrap justify-center">
              <p className="text-[12px] mt-3 dark:text-white">Show Results</p>
              <input
                type="text"
                className={styles.filterInput}
                id="fname"
                name="fname"
              />
              <div className="relative ml-1 mt-2">
                <div className={styles.imgPossition}>
                  <Image alt='img 1'
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    src={Search}
                  />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className={styles.filterInput1}
                  placeholder="e.g Coin, name"
                />
              </div>
            </div>
          </div>
        </div>
          
       </div>
    </div>
  )
}

export default Filter;