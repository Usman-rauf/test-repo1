import Image from "next/image";
import Nav from "../../../public/Assests/3408.svg";
import Nav2 from "../../../public/Assests/sun.svg";
import dark from "../../../public/Assests/moon.svg";
const PreNav = ({ isActive, handleClick }) => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="grid-cols-12 flex overflow-x-auto ">
          <div className="col-span-8">
            <ul className="flex gap-x-4 mt-3">
              <li>
                <a
                  href="#"
                  className=" text-[14px]   whitespace-nowrap text-[#A968E9] rounded   flex items-center flex-nowrap"
                  aria-current="page"
                >
                  Coin Official{" "}
                  <span className="text-black dark:text-white ml-2 text-[14px]">
                    $0.79
                  </span>
                  <span className="text-[#3FB791] text-[8px]"> +0.79% </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-[14px]   text-[#F7931A]  rounded  flex items-center "
                  aria-current="page"
                >
                  BTC{" "}
                  <span className="text-[black] dark:text-[white] ml-1 text-[14px]">
                    $21,368.79
                  </span>
                  <span className="text-[#E86062] ml-1 text-[10px] ">
                    {" "}
                    -3.98%{" "}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-[14px]  text-[#68B4EB] rounded flex items-center"
                  aria-current="page"
                >
                  ETH{" "}
                  <span className="text-[black] dark:text-white ml-1 text-[14px]">
                    $1368.79
                  </span>
                  <span className="text-[#E86062] ml-1 text-[10px] ">
                    {" "}
                    -9.96%{" "}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-[14px]  text-[#26A17B]  rounded  flex items-center"
                  aria-current="page"
                >
                  USDT{" "}
                  <span className="text-[black] dark:text-white ml-1 text-[14px]">
                    $0.079
                  </span>
                  <span className="text-[#E86062] text-[10px] ml-1">
                    {" "}
                    -0.98%{" "}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-nowrap text-[14px] text-[#F7931A]  rounded "
                  aria-current="page"
                >
                  BTC{" "}
                  <span className="text-[black] dark:text-white ml-1 text-[14px]">
                    $21368.79
                  </span>
                  <span className="text-[#E86062] ml-1 text-[10px] ">
                    {" "}
                    -3.98%{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 ml-auto">
            <div className="flex justify-end">
              <Image
                src={Nav}
                alt="Picture of the author"
                className="object-contain "
                width={15}
                height={15}
              />
              <p className="text-black dark:text-white text-[14px] ml-2 mt-3 font-medium mr-4">
                USD{" "}
              </p>
              <div className="mt-2 rounded-full ">
                {isActive ? (
                  <Image
                    src={dark}
                    width={30}
                    height={30}
                    layout="fixed"
                    alt="Picture of the author"
                    className="object-contain ml-8 hover:cursor-pointer "
                    onClick={handleClick}
                  />
                ) : (
                  <Image
                    src={Nav2}
                    width={30}
                    layout="fixed"

                    height={30}
                    alt="Picture of the author"
                    className="object-cover w-full ml-8 hover:cursor-pointer "
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreNav;
