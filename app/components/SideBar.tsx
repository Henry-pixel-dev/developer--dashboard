import Image from "next/image";
import Dojo from "./dojo-logo.png"
import Menu from "./Menu";


export default function SideBar() {
  return (
    <aside aria-label="Profile and navigation sidebar"  className="flex flex-col space-y-6  p-6">
      <header className="flex space-x-2 items-center">
        <Image
        src={Dojo}
        alt="Logo"
        quality={75}
        width={50}
        height={50}
        placeholder="blur"
        />
        <h1 className="text-xl font-bold  dark:text-white text-black">
          NextDev
        </h1>
      </header>
      <Menu/>
    </aside>
  )
}
