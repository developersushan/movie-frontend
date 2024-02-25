"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBarsStaggered,FaUser } from "react-icons/fa6";
import { FiX ,FiAlignJustify,FiBell,FiSearch} from "react-icons/fi";
const Header = () => {
    const [open,setOpen] = useState(false)
    const [navOpen,setNavOpen] = useState(false)
    const pathname = usePathname()

  return (
    <div  className='header mx-auto flex py-3 items-center justify-center  shadow-xl'>

        <nav className='md:w-8/12 w-full px-3 md:px-0 flex items-center relative justify-between'>
        <div className=''>
            <h3 className='text-3xl font-bold text-red-600 shadow-lg'><span className='italic'>MOVIE</span> HAAT ACTION</h3>
        </div>
        <div className=' hidden md:block'>
        <ul className={`flex gap-5 relative text-white`}>
          <li className='mr-5 py-2 text-red-500 hover:text-red-500 nav-border'>
            <Link href="/">Home</Link>
          </li>
          <li className='mr-5 py-2 hover:text-red-500 nav-border'>
          <Link href="/series">Series</Link>
          </li>
          <li className='mr-5 py-2 hover:text-red-500 nav-border'>
          <Link href="/movies">Movies</Link>
          </li>
          <li className='mr-5 py-2 hover:text-red-500 nav-border'>
          <Link href="/pages">Pages</Link>
          </li>
          <li className='mr-5 py-2 hover:text-red-500 nav-border'>
          <Link href="/pricing">pricing</Link>
          </li>
          <li className='mr-5 py-2 hover:text-red-500 nav-border' >
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        {/*nav ber*/}
        <div className=''>
        <ul className={` ${navOpen ? 'gap-5  bg-indigo-500  top-10 px-4 rounded right-0 w-60  md:flex absolute -translate-x-5 transition-all duration-300':'gap-5  top-8  px-4 rounded right-0 translate-x-0 opacity-0 md:hidden absolute  transition-all duration-300'}`}>
          <li className='mr-5 py-2 border-b-2'>
            <Link href="/">Home</Link>
          </li>
          <li className='mr-5 py-2 border-b-2 md:border-none'>
          <Link href="/series">Series</Link>
          </li>
          <li className='mr-5 py-2 border-b-2 md:border-none'>
          <Link href="/movies">Movies</Link>
          </li>
          <li className='mr-5 py-2 border-b-2 md:border-none'>
          <Link href="/pages">Pages</Link>
          </li>
          <li className='mr-5 py-2 border-b-2 md:border-none'>
          <Link href="/pricing">pricing</Link>
          </li>
          <li className='mr-5 py-2' >
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        <div onClick={()=>setOpen((prev)=>!prev)} className='relative block md:hidden'>
            <button onClick={()=>setNavOpen(true)} className={` ${open ? 'hidden ':'text-2xl '}`} ><FiAlignJustify /></button>
            <button onClick={()=>setNavOpen(false)} className={` ${open? ' text-2xl':'hidden'}`}><FiX /></button>
        </div>

      </nav>
      <div className=' hidden md:block'>
        <ul className='flex justify-end gap-4 items-center text-white'>
            <li  className="text-xl hover:text-pink-500">
                <a href=""><span><FiSearch/> </span> </a>
            </li>
            <li className="text-xl hover:text-pink-500"><a href=""><span><FiBell/> </span> </a></li>
            <li className="text-xl hover:text-pink-500"><a href=""><FaUser/> </a></li>
            <li className='ms-8  hover:text-red-500 bg-red-600 px-3 py-2 font-semibold rounded hover:bg-white'><a href="">Subscribe Now</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header
