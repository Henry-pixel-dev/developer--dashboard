

import {  FaSearch } from 'react-icons/fa' 

export default function SearchBar() {
  return (
    <label className="flex items-center space-x-2 pl-2 rounded-2xl  bg-gray-200">
        <FaSearch  color='gray' size={20}/>
        <input type="text" placeholder='Search' className='py-2  w-full h-full rounded-2xl text-sm text-gray' />
    </label>
  )
}
