import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const MenuData = [
  { "title":"home", "url":"/" },
  { "title":"news", "url":"/news" },
  { "title":"gallery", "url":"/gallery" },
  { "title":"videos", "url":"/videos" },
  { "title":"contact", "url":"/contact" },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-indigo-600 sticky top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </a>
        </Link>
        <ul className="md:flex hidden space-x-3 items-center text-base justify-center text-white uppercase">
          { MenuData.map((data, key) =>( <li className={ router.pathname == data.url ? "font-bold" : " font-semibold text-white/75" } key={key}>
              <Link href={data.url}><a className="py-6 px-3">{data.title}</a></Link>
            </li> ))}
          
        </ul>
        <button className="inline-flex items-center bg-indigo-400 border-0 p-2 focus:outline-none hover:bg-indigo-800 text-white rounded-full text-base ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Header