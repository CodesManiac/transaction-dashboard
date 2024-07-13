import React from 'react'
import Overview from '../components/Overview'
import TransactionTable from '../components/TransactionTable'
import TransactionFilter from '../components/TransactionFilter'

const Wallet = () => {
  return (
    <div className='py-6 w-full'>
    <div className='flex justify-between items-center'>
      <p className='text-gray text-2xl leading-[21px] font-bold'>WalletOverview</p>
      <div className='flex gap-2 items-center'>
      <p className='text-gray text-xs leading-[15px] font-semibold '>Duration</p>
      <select className='w-20 outline-none bg-white text-gray text-xs border border-[#e1e1e1] px-2 py-1 rounded-lg '>
          <option value={'today'}>Today</option>
          <option value={'yesterday'}>Yesterday</option>
          <option value={'this_week'}>This Week</option>
        </select>

      </div>
    </div>
    <hr className='text-[#e1e1e1] mt-4 mb-3' />
    <Overview/>
    <TransactionFilter/>
    <div className='overflow-x-auto'>
    <TransactionTable/>

    </div>
    </div>
  )
}

export default Wallet
