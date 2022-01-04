import React from 'react'
import { Link } from 'react-router-dom'
import {useDarkMode} from '../utils/useDarkMode'

const Navbar = ({burgerStatus,setburgerStatus}) => {
    const [colorTheme,settheme] = useDarkMode();
    const user = JSON.parse(localStorage.getItem('user'))
    const firstname = user.firstname
    return (    
        <header className="bg-white dark:bg-secondaryDark items-center h-16 z-40 fixed w-full shadow-lg dark:text-white">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div className="container relative left-0 z-50 flex w-3/4">
                    <div className=" ml-2 mr-2 lg:ml-6 lg:mr-6 flex items-center justify-between relative">
                            <button className="flex items-center mr-6 absoluteright-0" data-test="navbar-btn">
                                {burgerStatus ?
                                <div onClick={() => setburgerStatus(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                                : 
                                <div onClick={() => setburgerStatus(true)}>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                } 
                            </button>
                    </div>
                    <Link to="/dashboard">
                    <img src="https://www.greatplacetowork.in/wp-content/uploads/2021/11/GPTW-Corporate-logo-1-2048x2048.png" alt="" srcSet="" className="hidden lg:w-10 lg:mr-6 lg:block"/>
                    </Link>
                        <div className="relative items-center w-full lg:w-64 h-full group hidden md:flex lg:flex">
                            <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </div>
                            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ring-opacity-90 bg-gray-100 dark:bg-primaryDark text-gray-400 aa-input" placeholder="Search"/>
                        </div>
                        </div>
                        <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto text-primary">
                            <a href="#" className="block relative ml-5">
                                <span className="text-black dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </span>
                            </a>
                            <a href="#" className="block relative ml-5" onClick={() => {settheme(colorTheme)}} data-test="dark-theme">
                                <span className="text-black dark:text-gray-400">
                                {colorTheme === 'light' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ):
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                                </span>
                            </a>
                            <a href="#" className="hidden lg:block relative ml-5">
                                <img alt="profil" src={`https://avatars.dicebear.com/api/initials/${firstname}.svg`} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            )
}

export default Navbar

