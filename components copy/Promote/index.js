import React from 'react';
import PromoteHeader from './PermoteHeader';
import Card from './PermoteCard/card';
import TelegramPro from './TelegramPromotion';
import Partners from '../__common/Partners';

const Promote = () => {
  return (
    <>
      <PromoteHeader />
      <Card />
      <TelegramPro />
      <Partners />
    </>
  );
}

export default Promote;