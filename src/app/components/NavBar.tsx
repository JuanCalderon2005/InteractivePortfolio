'use client'
import React, { useState } from 'react'
import { itemsNavbar } from '../../../data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MotionTransition } from './transition-component'
import { HiMenu, HiX } from 'react-icons/hi'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <MotionTransition position='right' className="fixed z-40 flex flex-col md:flex-row items-center justify-center h-auto md:h-full w-full md:w-auto md:ml-4 top-0 md:top-2 p-2 md:p-0 bg-transparent">
            <button
                onClick={toggleMenu}
                className="md:hidden absolute top-7 right-4 z-50 text-indigo-500"
            >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            <nav className={`flex flex-row md:flex-col items-center justify-evenly w-full md:w-auto bg-white/30 md:bg-transparent backdrop-blur-sm md:shadow-none rounded-full md:rounded-none shadow-lg p-2 md:p-0 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
                {itemsNavbar.map((item) => (
                    <div
                        key={item.id}
                        className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition duration-150 rounded-full cursor-pointer ${pathname === item.link ? 'bg-indigo-500' : 'hover:bg-indigo-300'}`}
                    >
                        <Link href={item.link} className="flex items-center justify-center h-full w-full">
                            {item.icon}
                        </Link>
                    </div>
                ))}
            </nav>
        </MotionTransition>
    )
}

export default NavBar
