import React, { useEffect } from 'react';
import imagesData from '../data/imgImports';

function Navbar(){
    //native
    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-btn');
        const navbarLinks = document.querySelector('.menu');
    
        const handleToggle = () => {
          navbarLinks.classList.toggle('block');
          navbarLinks.classList.toggle('hidden');
        };
    
        toggleButton.addEventListener('click', handleToggle);
    
        // Cleanup listener saat komponen di-unmount
        return () => {
          toggleButton.removeEventListener('click', handleToggle);
        };
    }, []);

    //tampilan
    return (
        <nav className="bg-white border-gray-200 fixed w-full z-50">
            <div className="w-navfot flex flex-wrap items-center justify-between mx-auto p-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={imagesData.LOGO_UKM_HITAM} className="md:h-10 h-8" alt="Logo UKM" />
                    <span className="self-center md:text-xl text-lg font-semibold whitespace-nowrap">Computer Club</span>
                </div>
                <button type="button" className="toggle-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="menu hidden w-full md:block md:w-auto" id="menu">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li className='m-1 p-1'>
                            <a href="/#beranda" className="NavbarLink" aria-current="page">Beranda</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#tentang" className="NavbarLink">Tentang Kami</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#divisi" className="NavbarLink">Divisi</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#proker" className="NavbarLink">Program Kerja</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#fungsio" className="NavbarLink">Fungsionaris</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar