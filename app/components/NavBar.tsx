import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import Notification from "./Notification"
import Profile from "./profile"

export default function navBar() {
  return (
    <nav className="w-full h-full  py-3 px-6 flex justify-between items-center ">
        <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold  dark:text-white text-black">
                DashBoard
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 ">
                Devs Dashboard 
            </p>
        </div>

        <div className="flex items-center space-x-3 justify-end">
            <SearchBar/>
            <ThemeToggle/>
            <Notification/>
            <Profile/>
        </div>
    </nav>
  )
}
