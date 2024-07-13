import React, { useState } from 'react'
import { Search,User, Dropdown } from '../assets/icons';

const ProfileHeader = () => {
    const [, setSearchInput] = useState<string>('');
  
 
  return (
    <div className='bg-white rounded-lg h-[70px] w-full flex  items-center justify-between px-4'>
      <div className='flex items-center  ml-2 p-2 rounded-md w-2/6 gap-2'>
        <img src={Search} alt='search' />
        <input
          type='text'
          className='outline-none text-gray w-2/6  placeholder:font-normal '
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className='flex gap-2 items-center cursor-pointer'>
           <p className='text-base text-ash font-medium leading-[21px]'>Sarah Shaibu</p>
         <img src={User} alt='user' className='rounded-[50%]' />
          <img src={Dropdown} alt='dropdown' className=' self-center' />
        </div>
    </div>
  )
}

export default ProfileHeader
