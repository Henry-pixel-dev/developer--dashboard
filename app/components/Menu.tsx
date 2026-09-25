"use client"


import Link from "next/link";
import { FaHouse, FaCalendarDays, FaUser, FaListCheck , FaTable, FaFile } from 'react-icons/fa6';
import { FaChevronDown, FaChevronRight  } from "react-icons/fa"
import OtherPages from "./OtherPages";
import {  useState } from "react"





export default function Menu() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav aria-label="Sidebar navigation" className="w-full">
        <ul className="w-full flex flex-col ">
            <h1 className="text-sm text-gray-400">Main menu</h1>
            <li className="w-full flex flex-col space-y-3">
                <div className="w-full flex justify-between p-3  items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <FaHouse/>
                        <p className="text-sm">DashBoard</p>
                    </Link>
                    <button className="cursor-pointer"
                    onClick={() => setIsOpen(isOpen === false ? true : false)}
                    >
                        {isOpen === false ? 
                        <FaChevronDown />
                        :<FaChevronRight />}
                    </button>
                </div>
                <div className="relative">
                    {isOpen === true && (
                        <OtherPages/>
                    )}
                </div>
            </li>
            <li className="w-full flex justify-between p-3  items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <FaCalendarDays/>
                    <p className="text-sm">Calender</p>
                </Link>       
            </li>
            <li className="w-full flex justify-between p-3  items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <FaUser/>
                    <p className="text-sm">Profile</p>
                </Link>       
            </li>
            <li className="w-full flex flex-col space-y-3">
                <div className="w-full flex justify-between p-3  items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <FaListCheck />
                        <p className="text-sm">Task</p>
                    </Link>
                    <FaChevronDown />
                </div>
                <div className="relative"></div>
            </li>


            
        </ul>
  </nav>
  )
}
