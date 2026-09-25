"use client"

// import { useTheme } from 'next-themes';

import { useTheme } from "@wrksz/themes/client"

import { FiSun, FiMoon } from 'react-icons/fi';


export default function ThemeToggle() {

  const {theme, setTheme} = useTheme()


  return (
    <div className='max-w-20 p-1 w-full flex space-x-1 items-center  bg-gray-200 rounded-2xl ' >

      <input type="radio" id="theme-light" name="theme" value="light"  className="peer/light sr-only"
      onChange={() => setTheme("light")}/>
      <label htmlFor="theme-light" className='p-1 rounded-full hover:bg-amber-50 active:bg-amber-50  peer-checked:bg-gray-400 dark:bg-gray-400 dark:hover:bg-gray-300'>
        <FiSun size={25}/>
      </label>

      <input type="radio" name="theme" id="theme-dark" value="dark" className="peer/dark sr-only" 
      onChange={() => setTheme("dark")}/>
      <label htmlFor="theme-dark" className='p-1 rounded-full  hover:bg-amber-50 dark:bg-gray-400 dark:hover:bg-gray-300'>
            <FiMoon size={25}/>
        </label>
    </div>
  )
}
