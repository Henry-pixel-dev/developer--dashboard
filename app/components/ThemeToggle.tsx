"use client"

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';


export default function ThemeToggle() {

  const {theme, setTheme} = useTheme()


  return (
    <button className='max-w-20 p-1 w-full flex space-x-1 items-center  bg-gray-200 rounded-2xl ' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <span className='p-1 rounded-full hover:bg-amber-50 active:bg-amber-50'>
            <FiSun size={25}/>
        </span>
        <span className='p-1 rounded-full  hover:bg-amber-50'>
            <FiMoon size={25}/>
        </span>
    </button>
  )
}
