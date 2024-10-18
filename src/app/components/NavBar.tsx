'use client'
import React, { useState, useEffect } from 'react';
import { itemsNavbar } from '../../../data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MotionTransition } from './transition-component';

interface NavbarItem {
    id: number;
    link: string;
    icon: React.ReactNode;
}

const NavBar: React.FC = () => {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowScrollY = window.scrollY;
            const threshold = 50; // Ajusta este valor según tu diseño
            setIsSticky(windowScrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col md:flex-row items-center justify-center h-auto md:h-full w-full md:w-auto top-0 md:top-2  md:p-0 transition-transform duration-300 ease-in-out">
            <nav
                className={`flex flex-row md:flex-col items-center justify-evenly w-full md:w-auto bg-white/30 md:bg-transparent backdrop-blur-sm md:shadow-none rounded-full md:rounded-none shadow-lg p-2 md:p-0 transition-transform duration-300 ease-in-out ${isSticky ? '-translate-y-full md:translate-y-0' : ''
                    }`}
            >
                {itemsNavbar.map((item: NavbarItem) => (
                    <div
                        key={item.id}
                        className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition duration-150 rounded-full cursor-pointer ${pathname === item.link ? 'bg-indigo-500' : 'hover:bg-indigo-300'
                            }`}
                    >
                        <Link href={item.link} className="flex items-center justify-center h-full w-full">
                            {item.icon}
                        </Link>
                    </div>
                ))}
            </nav>
        </MotionTransition>
    );
};

export default NavBar;