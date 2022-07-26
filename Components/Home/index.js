import React from 'react'
import Slider from '../__common/Slider';
import Filter from '../__common/Filter';
import CommonTable from "../__common/Table/index"
import CryptoPrices from './CryptoPrices/cryptoPrices';
import Partners from '../__common/Partners';



const HomePage = () => {
  return (
    <>
      <Slider />
      <CryptoPrices />
      <Filter />
      <CommonTable />
      <Partners/>
    </>
  );
}

export default HomePage;