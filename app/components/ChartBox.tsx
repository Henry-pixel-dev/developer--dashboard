"use client"

import { FaChevronDown, FaChevronRight  } from "react-icons/fa"
import Chart from "./Chart";
import {   useState } from 'react'


export default function ChartBox() {
    const [isOpen, setIsOpen] = useState(false)
    const [currDate, setCurrDate] = useState('months')

    


  return (
    <div className="flex-2 flex flex-col space-y-6 bg-white rounded-xl p-6 dark:bg-gray-900 text-black dark:text-white">
          <div className="flex justify-between w-full">
            <h2 className="font-bold">
              Payment Overview
            </h2>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-base ">SHORT BY:</p>
                  <p className="text-sm">
                    {currDate === 'months' ? 'Current Month' : 'Current Week' }  
                  </p>
                  <button className="cursor-pointer"
                  onClick={() => setIsOpen(isOpen === false ? true : false)}
                  >
                      {
                        isOpen ? <FaChevronDown size={10}/> : <FaChevronRight size={10}/>
                      }
                  </button>
                </div>
                {isOpen === true && (
                    <div className="flex flex-col items-center space-y-1 rounded-md  bg-emerald-100 dark:bg-emerald-900">
                        <label htmlFor="day" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-md w-full text-center border cursor-pointer">
                            <input type="radio" id="day" name="date" value="days" className="peer/light sr-only"
                            onChange={() => {
                                setCurrDate('days')
                                setIsOpen(false)
                            }}
                            />
                            <span>Week</span>
                        </label>

                        <label htmlFor="month" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-md w-full text-center border cursor-pointer">
                            <input type="radio" id="month" name="date" value="month" className="peer/light sr-only"
                            onChange={() => {
                                setCurrDate('months')
                                setIsOpen(false)
                            }}/>
                            <span>Month</span>
                        </label>
                    </div>
                )}
            </div>
          </div>
          <Chart currDate={currDate} />
          <div className="flex justify-around items-center ">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Recieved Amount
              </p>
              <p className="font-bold text-base text-center">
                $40,000
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Due Amount
              </p>
              <p className="font-bold text-base text-center">
                $38,000
              </p>
            </div>
          </div>

        </div>
  )
}
