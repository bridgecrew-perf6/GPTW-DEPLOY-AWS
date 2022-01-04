import React,{useState} from 'react'
import { Link,NavLink } from "react-router-dom"
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router'
import {createBrowserHistory} from 'history'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { logoutStart,logoutSuccess,logoutError } from '../redux/userSlice';

const Sidebar = ({burgerStatus,setburgerStatus}) => {
    const [isActive, setisActive] = useState(false)
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    const theme = localStorage.getItem('theme')
    const firstname = user.firstname
    const history = createBrowserHistory();

    const getColor = (curr) => {
        if(history.location.pathname === curr && theme === 'light'){
            return '#E5E7EB'
        } else if(history.location.pathname === curr && theme === 'dark'){
          return '#26264f'
        }
    }


    const logoutUser = async (e) => {
        dispatch(logoutStart())
        await axios({
            method:'get',
            url:'/api/v1/logout',
        }).then((response) => {
            dispatch(logoutSuccess());
            localStorage.clear();
            window.location.href = '/'
            console.log(response)
        }).catch((error) => {
            dispatch(logoutError());
            console.log(error);
        })
    }

    return (
        <>
            <div className="flex flex-col lg:w-64 h-screen px-4 bg-white border-r dark:bg-secondaryDark dark:border-darkSelect items-center justify-center fixed mt-14 lg:mt-16 transition-transform" style={{display:'flex',flex:1,zIndex:9999,transform: burgerStatus ? `translateX(-100%)` : `translateX(0)`}}>
            <div className="flex flex-col justify-between flex-1 mt-2 lg:mt-6">
        <nav>
        <a className="flex items-center text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400" href="#">
                <img alt="profile" src={`https://avatars.dicebear.com/api/initials/${firstname}.svg`} className="object-cover rounded-full h-10 w-10 "/>
                <div className="flex flex-col">
                    <span className="mx-2 lg:mx-4 text-xs">Welcome </span>
                    <span className="mx-2 lg:mx-4 font-bold text-xl">{user.firstname}</span>
                </div>
        </a>
        <hr className="my-6 dark:border-gray-600" />
            <Link to="/dashboard">
            <div className="flex items-center px-4 py-2 text-primary hover:bg-gray-200 rounded-md dark:text-gray-200 dark:hover:bg-darkSelect" style={{backgroundColor:getColor('/dashboard')}} href="#" data-test="navbar-dashboard">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeline="round" />
                </svg>
                <span className="mx-1 lg:mx-4 font-medium text-md">Dashboard</span>
            </div>
            </Link>
            <NavLink to="/profile">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/profile')}} href="#" data-test="navbar-profile">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeline="round" />
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeline="round" />
                </svg>

                <span className="mx-1 lg:mx-4 font-medium text-md">My Profile</span>
            </div>
            </NavLink>
            <NavLink to="/company">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/company')}} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeline="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            

                <span className="mx-1 lg:mx-4 font-medium text-md md:text-md lg:text-base">Company profile</span>
            </div>
            </NavLink>

            <NavLink to="/subscriptions">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/subscriptions')}} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeline="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>

                <span className="mx-1 lg:mx-4 font-medium text-md md:text-md lg:text-base">Subscriptions</span>
            </div>
            </NavLink>

            <hr className="my-4 lg:my-6 dark:border-gray-600" />

            <NavLink to="/explore">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/explore')}} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeline="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

                <span className="mx-1 lg:mx-4 font-medium text-md md:text-md lg:text-base">Explore</span>
            </div>
            </NavLink>

            <NavLink to="/users">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/users')}} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeline="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="mx-1 lg:mx-4 font-medium text-md mr-10 md:text-md lg:text-base">Users</span>
            <div className="cursor-pointer p-2 rounded-full flex items-center justify-center" onClick={(e) => setisActive(!isActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            </NavLink>
            {isActive && (
                <div className="ml-1" >
                    <ul className="flex flex-col align-middle text-left justify-center ml-5 text-primary dark:text-gray-400">
                        <li className="font-medium mt-2">
                            <a href="">Users List</a>
                        </li>
                        <li className="font-medium mt-2">
                            <a href="">
                                Invite Users
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            <NavLink to="/faq">
            <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" style={{backgroundColor:getColor('/faq')}} href="#" data-test="navbar-faq">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeline="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

                <span className="mx-1 lg:mx-4 font-medium text-md md:text-md lg:text-base">Help & FAQ's</span>
            </div>
            </NavLink>
                <button data-test="navbar-logout">
                <div className="flex items-center px-4 py-2 mt-3 lg:mt-5 text-primary transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkSelect dark:hover:text-gray-200 hover:text-gray-700" onClick={logoutUser}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                    <span className="mx-1 lg:mx-4 font-medium text-md md:text-md lg:text-base">Logout</span>
                </div>
                </button>
        </nav>
    </div>
</div>
        </>
    )
}

export default Sidebar
