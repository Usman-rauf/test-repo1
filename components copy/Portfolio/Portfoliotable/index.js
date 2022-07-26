import React from "react";
import styles from "./PortfolioTable.module.scss";
import { useState } from "react";
import CommonTable from "../../__common/Table";
import TableData from "./PortfolioTableData";
import Button from "../../__common/Button";
import Image from "next/image";

const PortfolioTable = () => {
  const [activeTab, setActive] = useState(1);
  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.flexx}>
          <li className="mr-2">
            <a
              
              className={activeTab == 1 ? styles.active : styles.tab}
              onClick={() => setActive(1)}
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              className={activeTab == 2 ? styles.active : styles.tab}
              aria-current="page"
              onClick={() => setActive(2)}
            >
              Dashboard
            </a>
          </li>
        </ul>
        </div>
        <div className="overflow-x-auto pt-[30px] bg-[#EDEBEF] dark:bg-[#1C2024]">
        <table className={styles.tablee}>
                <thead className=" border-b dark:text-white  dark:bg-black dark:border-[#816868] bg-white text-black">
                  <tr className={styles.topText}>
                    <th scope="col" className="px-6 ">
                      COIN
                    </th>
                    <th scope="col" className="px-6 text-[13px] py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Balance
                    </th>
                    <th scope="col" className="px-6 py-3">
                      24h %
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Market Cap
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Circulating Supply
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last 7 Days
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Votes
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                  </tr>
                </thead>
                <tbody>
                  {TableData.map((currElem)=>{
                    console.log(currElem);
                    const {
                      id,
                      coin,
                      coinName,
                      miniName,
                      chain,
                      chainName,
                      price,
                      percentage,
                      marketCap,
                      holders,
                      graphImage,
                      btnText,
                      color,
                    } = currElem;
                    return (
                      <>
                        <tr className={styles.tablerow} key={id}>
                          <th scope="row" className={styles.tablehead}>
                            <Image
                              alt="img 1"
                              layout="fixed"
                              src={coin}
                              className="object-contain"
                            />
                            <p className="ml-1 text-[13px]">{coinName}</p>
                            <span className={styles.headText}>{miniName}</span>
                          </th>
                          <td className="px-4 py-4">
                            <div className="flex ml-3">
                              <Image
                                alt="img 1"
                                layout="fixed"
                                className="object-contian"
                                src={chain}
                              />
                              <p className="ml-1">{chainName}</p>
                            </div>
                          </td>
                          <td className={styles.tableData}>{price}</td>
                          <td className={styles.textDanger}>{percentage}</td>

                          <td className={styles.tableData}>{marketCap}</td>

                          <td className={styles.tableData}>
                            {holders}
                          </td>
                          <td className={styles.tableData}>
                            <Image alt="img 1" src={graphImage} />
                          </td>
                          <td className="">
                            <Button primary={true}> {btnText}</Button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>  
              </div>
                  </div>
    
  );
};

export default PortfolioTable;
