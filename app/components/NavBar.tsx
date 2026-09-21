import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";


export default function navBar() {
  return (
    <nav className="w-full h-full  py-3 px-6 flex justify-between items-center ">
        <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold text-black dark:text-white">
                DashBoard
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 ">
                Devs Dashboard 
            </p>
        </div>

        <div className="flex items-center space-x-3 justify-end">
            <SearchBar/>
            <ThemeToggle/>
        </div>
    </nav>
  )
}
