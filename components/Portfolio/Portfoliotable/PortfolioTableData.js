import Btc from "../../../public/Assests/Group 194.png";
import Chain from "../../../public/Assests/bsc.png";
import Eth from "../../../public/Assests/Group 9155.png";
import Tether from "../../../public/Assests/b.png";
import USDC from "../../../public/Assests/nav1.png";
import GreenGraph from "../../../public/Assests/greenGraph.svg";
import BlueGraph from "../../../public/Assests/blueGraph.svg";
import OrangeGraph from "../../../public/Assests/orangeGraph.svg";
import YellowGraph from "../../../public/Assests/yellowGraph.svg";
import GrayGraph from "../../../public/Assests/grayGraph.svg";

const TableData = [
  {
    id: 1,
    coin: Btc,
    coinName: "Bitcoin",
    miniName: "BTC",
    chain: Chain,
    chainName: "Bsc",
    price: "$20,929.25",
    percentage: "-1.38%",
    color: "red",
    marketCap: "$325,555,7544",
    holders: "30859",
    graphImage: OrangeGraph,
    btnText: "32654",
  },
  {
    id: 2,
    coin: Eth,
    coinName: "Etitirium",
    miniName: "ETH",
    chain: Chain,
    chainName: "Bsc",
    price: "$1092.88",
    percentage: "-1.63%",
    color: "red",
    marketCap: "$325,555,7544",
    holders: "30859",
    graphImage: GrayGraph,
    btnText: "32654",
  },
  {
    id: 3,
    coin: Tether,
    coinName: "Tether",
    miniName: "USDT",
    chain: Chain,
    chainName: "Bsc",
    price: "$0.9989",
    percentage: "-0.00%",
    color: "green",
    marketCap: "$325,555,7544",
    holders: "30859",
    graphImage: GreenGraph,
    btnText: "32654",
  },

];

export default TableData;