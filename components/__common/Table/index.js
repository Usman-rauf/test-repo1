import React, { useState } from "react";
import styles from "./Table.module.scss";
import Image from "next/image";
import Button from "../Button";
import TableData from "./tableData";

const CommonTable = () => {
  const [data, setData] = useState(TableData);
  return (
    <div>
      <div className="">
        <div className={styles.tableGrid}>
          <div className="col-span-12">
            <div className={styles.tableShadow}>
              <table className={styles.tablee}>
                <thead className=" border-b text-gray-700   bg-[#F0F0F0] dark:border-[#816868] dark:bg-[#112533] dark:text-white">
                  <tr className={styles.topText}>
                    <th scope="col" className="px-6 font-normal">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 text-[13px] font-normal py-3"
                    >
                      Chain
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      24h %
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Market Cap
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Holders
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Last 7 Days
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Votes
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.map((currElem) => {
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
                      star,
                      vector,
                    } = currElem;
                    return (
                      <>
                        <tr className={styles.tablerow} key={id}>
                          <th scope="row" className={styles.tablehead}>
                            <p className=" mr-3">{id}</p>
                            <Image
                              alt="img 1"
                              layout="fixed"
                              src={coin}
                              className="object-contain my-auto"
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

                          <td className={styles.tableData}>{holders}</td>
                          <td className={styles.tableData}>
                            <Image alt="img 1" src={graphImage} />
                          </td>
                          <td className="flex justify-around">
                            <Button primary={true} className="mr-6">
                   
                              {btnText}
                            </Button>
                            <Image
                              alt="star"
                              className="content-center object-contain"
                              src={star}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTable;
