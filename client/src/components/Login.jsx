import React from 'react'
import { Link,Router } from 'react-router-dom'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { updateError, updateStart, updateSuccess } from '../redux/userSlice'
import { Navigate } from 'react-router'
import Loader from "react-loader-spinner";




const Login = () => {
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [error,setError] = React.useState('');
    const [success, setsuccess] = React.useState('');
    const dispatch = useDispatch();

    const user = {
        email,password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked')
        dispatch(updateStart())
        await axios({
            method:'post',
            url:'/api/v1/login',
            data:user,
            headers:{"Content-Type":"application/json"},
        }).then((response) => {
            localStorage.setItem('token',response.data.token)
            const updatedUser = response.data.user
            delete updatedUser["password"]
            localStorage.setItem('user',JSON.stringify(updatedUser))
            dispatch(updateSuccess(updatedUser))
            setsuccess('Logged in successfully')
        }).catch((err) => {
            setError(err.response.data.error)
            dispatch(updateError())
        });
      }

      const token = localStorage.getItem('token')
      const isLoggedIn = useSelector(state => state.user.isLoggedIn)
      const isLoading = useSelector(state => state.user.pending)


      if(isLoggedIn || token){
          return <Navigate to="/dashboard"/>
      }


    return (
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 bg-white shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-2xl md:text-3xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-coolGray-400">Sign in to access your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid" data-test="login-form">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            placeholder="leroy@jenkins.com" 
                            className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            data-test="email"
                            onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <label htmlFor="password" className="text-sm">Password</label>
                                    <Link to="/forgotpassword">
                                        <div className="text-xs hover:underline dark:text-coolGray-400 text-primary-hover">
                                            Forgot password?
                                        </div>
                                    </Link>
                            </div>
                            <input type="password" 
                            name="password" 
                            id="password" 
                            placeholder="*****" 
                            className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            data-test="password"
                            onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900 bg-primary text-white flex items-center justify-center" onClick={handleSubmit} data-test="submit-btn">
                            {isLoading ? 
                              <Loader
                              type="ThreeDots"
                              color="#ffff"
                              height={20}
                              width={20} //3 secs
                              /> : <span> Sign in </span>
                            }    
                            </button>
                        </div>
                        <div className='flex justify-center items-start'>
                            <p className="text-sm text-center dark:text-coolGray-400">Don't have an account yet? </p>
                                    <Link to="/register">
                                        <div className='hover:underline dark:text-violet-400 text-primary-hover text-sm'>Sign up</div>
                                    </Link>
                        </div>
                        <span className="text-sm text-red-500 flex justify-center">{error}</span>
                    </div>
                </form>
            </div>           
        </div>
    )
}

export default Login
