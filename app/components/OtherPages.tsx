import Link from "next/link";


export default function OtherPages() {
  return (
    <ul>
        <li className="w-full flex justify-between p-3  items-center">
            <p className="text-sm">eCommerce</p>           
        </li>
        <li className="w-full flex justify-between p-3  items-center">
            <p className="text-sm">Analytic</p>           
        </li>
        <li className="w-full flex justify-between p-3  items-center">
            <p className="text-sm">Marketing</p>           
        </li>
        <li className="w-full flex justify-between p-3  items-center">
            <p className="text-sm">CRM</p>           
        </li>
        <li className="w-full flex justify-between p-3  items-center">
            <p className="text-sm">Stock</p>           
        </li>
    </ul>
  )
}
