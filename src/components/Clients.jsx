import React from 'react'

import { airbnb, binance, coinbase, dropbox } from '../assets'

const Clients = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center sm:h-[60px] h-[250px] px-[100px] mt-10'>
      <img src={airbnb} alt="airbnb" className='w-[192px] h-[50px] object-contain'/>
      <img src={binance} alt="binance" className='w-[192px] h-[38px] object-contain translate-y-1'/>
      <img src={coinbase} alt="coinbase" className='w-[189px] h-[42px] object-contain scale-90'/>
      <img src={dropbox} alt="dropbox" className='w-[192px] h-[38px] object-contain'/>
    </div>
  )
}

export default Clients