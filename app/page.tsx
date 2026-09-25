import { FaChevronDown, FaChevronRight  } from "react-icons/fa"
import Chart from "./components/Chart";
import PieChart from "./components/PieChart";




function ProgressCircle({ progress }: { progress: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-24 h-24">
      <circle
        className="text-gray-200"
        stroke="currentColor"
        strokeWidth="8"
        fill="transparent"
        r={radius}
        cx="48"
        cy="48"
      />
      <circle
        className="text-blue-500"
        stroke="currentColor"
        strokeWidth="8"
        fill="transparent"
        r={radius}
        cx="48"
        cy="48"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}


export default function DashBoard() {
  interface DashboardItem {
      title: string;
      value: number;
      change: string; // e.g. "+4.25%" or "-1.56%"
      changeType: "increase" | "decrease";
      timeframe: string;
      progress: number;
    }


  const dashboardData: DashboardItem[]  = [
    {
      title: "Clients Added",
      value: 197,
      change: "+4.25%",
      changeType: "increase",
      timeframe: "Since last week",
      progress: 75 // percentage for the circle
    },
    {
      title: "Contracts Signed",
      value: 745,
      change: "-1.56%",
      changeType: "decrease",
      timeframe: "Since last week",
      progress: 20
    },
    {
      title: "Invoices Sent",
      value: 512,
      change: "+0.83%",
      changeType: "increase",
      timeframe: "Since last week",
      progress: 90
    }
  ];

  function changeColor(change : string) : string {
    const numericValue = parseFloat(change.replace("%", ""))
    if (numericValue > 0) return "bg-green-500"
    if (numericValue < 0) return "bg-red-500"
    return "gray-300"
  }
  





  return (
    <main className="w-full min-h-screen bg-gray-200 dark:bg-gray-800 flex flex-col space-y-6 p-6">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl font-bold">
          This week's Overview
        </h1>

        <div className="flex items-center space-x-2">
          <p className="text-[900] ">SHORT BY:</p>
          <p className="text-sm">Current Week </p>
          <FaChevronDown size={10}/>
        </div>
      </header>

      <div className="w-full flex justify-between space-x-4">
        {
          dashboardData.map((item, index) => (
            <div key={index} className=" flex-1 p-3 pb-5 rounded-2xl flex  justify-between bg-white dark:bg-mauve-900">
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">
                  {item.value}
                </h2>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>
                <div className="flex space-x-2 items-center">
                  <span className={`${changeColor(item.change)} px-2 py-1 rounded-xl text-sm`}>
                    {item.change}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-300"> 
                    {item.timeframe}
                  </p>
                </div>
              </div>
              <ProgressCircle progress={item.progress} />
            </div>
          ))
        }
      </div>

      <div className="flex justify-between space-x-6 w-full">
        <div className="flex-2 flex flex-col space-y-6 bg-white rounded-xl p-6">
          <div className="flex justify-between w-full">
            <h2 className="font-bold">
              Payment Overview
            </h2>
            <div className="flex items-center space-x-2">
              <p className="font-bold text-base ">SHORT BY:</p>
              <p className="text-sm">Current Week </p>
              <FaChevronDown size={10}/>
            </div>
          </div>
          <Chart/>
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
        <div className="flex-1 flex flex-col items-center justify-center  bg-white rounded-xl p-6">
          <PieChart/>
        </div>
      </div>
    </main>
  )
}
