import React from 'react'
import { allTransactions } from '../data'
import { Successful,Failed,Pending, Arrow } from '../assets/icons'

const TransactionTable = () => {
  return (
    <div className=''>
      <table className='table-auto w-max lg:w-full my-4'>
      <thead>
        <tr className='text-white text-xs font-semibold leading-[15px] bg-darkGray text-left !rounded-lg'>
          <th className=' rounded-tl-lg rounded-bl-lg'>S/N</th>
          <th><div className='flex gap-2 items-center'><img src={Arrow} alt='arrow' className='w-[6px]'/>Name</div></th>
          <th>Transaction Reference</th>
          <th>Type</th>
          <th >Amount</th>
          <th><div className='flex gap-2 items-center'><img src={Arrow} alt='arrow' className='w-[6px]'/>Date</div></th>
          <th className=' rounded-tr-lg rounded-br-lg'><div className='flex gap-2 items-center'><img src={Arrow} alt='arrow' className='w-[6px]'/>Status</div></th>
        </tr>
      </thead>
      <tbody>
      <tr className='h-3'></tr>
        {allTransactions.map((transaction,index) => (
          <>
       
              <tr key={transaction?.id} 
            className='bg-white shadow-sm rounded-lg mb-4 '
          >
            <td className=' rounded-tl-lg rounded-bl-lg'>
              
              {transaction?.transactionId}
            </td>
            <td>{transaction?.name}</td>
            <td>{transaction?.reference}</td>
            <td>{transaction?.type}</td>
            <td>{transaction?.amount}</td>
            <td>{transaction?.date}</td>
            <td className=' !rounded-tr-lg !rounded-br-lg'>
              <div className='flex justify-between gap-4 items-center'>
                <div
                  className={`flex gap-2 py-[6px] pr-2 pl-[6px] rounded-[10px] items-center text-[10px] text-white font-medium ${
                    transaction.status === 'Successful'
                      ? 'bg-green'
                      : transaction.status === 'Failed'
                      ? 'bg-red'
                      : 'bg-lightOrange'
                  }`}
                >
                  <img
                    src={
                      transaction.status === 'Successful'
                        ? Successful
                        : transaction.status === 'Pending'
                        ? Pending
                        : Failed
                    }
                    alt='a round icon'
                  />

                  {transaction.status}
                </div>
                <button className='bg-orange rounded-lg py-[10px] px-[14px] text-white text-xs font-bold leading-[21px]'>View</button>
              </div>
            </td>
         
          </tr>
          {index !== allTransactions.length - 1 && <tr key={`empty-${index}`} className='h-3'></tr>}
          </>
        
        
          
        ))}
      </tbody>
    </table>
    <div className='grid place-items-center mt-6'>
    <button className='bg-orange rounded-lg py-[10px] px-5 text-white text-xs font-bold leading-[21px]'>View All</button>

    </div>
    </div>
  )
}

export default TransactionTable
