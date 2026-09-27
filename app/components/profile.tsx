import Image from 'next/image'
import man from './man.webp'
import { FaChevronDown  } from "react-icons/fa"


export default function profile() {
  return (
    <div className="flex space-x-2 items-center">
        <Image
          src={man}
          alt="profile icon"
          quality={70}
          placeholder="blur"
          className="h-10 w-10 rounded-full "
        />

        <div className="flex space-x-1 items-center">
          <h3 className="text-sm whitespace-nowrap text-black dark:text-white ">John Smith</h3>
          <FaChevronDown />
        </div>
    </div>
  )
}
