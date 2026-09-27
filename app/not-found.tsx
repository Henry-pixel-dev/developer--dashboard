import Link from 'next/link';


export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col text-center'>
        <h2 className="text-3xl">There was a problem</h2>
        <p>we could not find the page you are looking for.</p>
        <p>Go back to the <Link href="/" className="underline text-blue-500 hover:text-blue-200 ">Dashboard</Link></p>
    </main>
  )
}