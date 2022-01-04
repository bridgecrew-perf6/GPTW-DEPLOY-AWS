import React, { useState} from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { updateError, updateStart, updateSuccess } from '../redux/userSlice'
import { Navigate } from 'react-router'
import Loader from "react-loader-spinner";





const Register = () => {
    const optionsIndustry = [
        { value: 'Advertising & Marketing', label: 'Advertising & Marketing' },
        { value: 'Agriculture, forestry and fishing', label: 'Agriculture, forestry and fishing' },
        { value: 'Biotechnology & Pharmaceuticals', label: 'Biotechnology & Pharmaceuticals' },
        { value: 'Construction, Infrastructure & Real Estate', label: 'Construction, Infrastructure & Real Estate' },
        { value: 'Education & Training', label: 'Education & Training' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Financial Services & Insurance', label: 'Financial Services & Insurance' },
        { value: 'Health Care', label: 'Health Care' },
        { value: 'Industrial Services', label: 'Industrial Services' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Manufacturing & Production', label: 'Manufacturing & Production' },
        { value: 'Mining and Quarrying', label: 'Mining and Quarrying' },
        { value: 'Non-profit and Charity Organisations', label: 'Non-profit and Charity Organisations' },
        { value: 'Retail', label: 'Retail' },
        { value: 'Social Services and Government Agencies', label: 'Social Services and Government Agencies' },
        { value: 'Telecommunications', label: 'Telecommunications' },
        { value: 'Trading', label: 'Trading' },
        { value: 'Transportation', label: 'Transportation' },
      ]

      const optionsDepartment = [
        { value: 'Account', label: 'Account' },
        { value: 'Administration', label: 'Administration' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Dispatch', label: 'Dispatch' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Human Resource', label: 'Human Resource' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Inspection', label: 'Inspection' },
        { value: 'Maintenance', label: 'Maintenance' },
        { value: 'Marketing & Proposals', label: 'Marketing & Proposals' },
        { value: 'Packaging', label: 'Packaging' },
        { value: 'Procurement', label: 'Procurement' },
        { value: 'Production', label: 'Production' },
        { value: 'Project', label: 'Project' },
        { value: 'Research & Development', label: 'Research & Development' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Security', label: 'Security' },
        { value: 'Store', label: 'Store' },
        { value: 'Management', label: 'Management' },
        { value: 'Business Owner', label: 'Business Owner' },
        { value: 'Business Head', label: 'Business Head' },
      ]
      const [firstname, setfirstname] = React.useState('')
      const [lastname, setlastname] = React.useState('')
      const [email, setemail] = React.useState('')
      const [password, setpassword] = React.useState('')
      const [industry, setindustry] = React.useState('')
      const [department, setdepartment] = React.useState('')
      const [phone, setphone] = React.useState('')
      const [error, seterror] = React.useState([])
      const dispatch = useDispatch();

      const user = {
          firstname,lastname,email,password,phone,
          industry:industry.value,
          department:department.value
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateStart())
        await axios({
            method:'post',
            url:'/api/v1/register',
            data:user,
            headers:{"Content-Type":"application/json"},
        }).then((response) => {
            localStorage.setItem('token',response.data.token)
            const updatedUser = response.data.user
            delete updatedUser["password"]
            localStorage.setItem('user',JSON.stringify(updatedUser))
            dispatch(updateSuccess(updatedUser))
        }).catch((err) => {
            seterror(err.response.data.error)
            dispatch(updateError())
        })
      }

      const token = localStorage.getItem('token')
      const isLoggedIn = useSelector(state => state.user.isLoggedIn)
      const isLoading = useSelector(state => state.user.pending)

      if(isLoggedIn || token){
          return <Navigate to="/dashboard"/>
      }

    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full md:w-96 px-10 py-2 dark:bg-coolGray-900 dark:text-coolGray-100 bg-white shadow-lg rounded-lg h-full">
                <div className="mb-4 text-center">
                    <h1 className="my-3 text-2xl md:text-3xl font-bold text-primary">Register</h1>
                </div>
                <form noValidate="" action="" className="space-y-4 md:space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 md:space-y-4">
                        <div className="">
                            <div className="flex justify-between">
                            <label htmlFor="firstname" className="block mb-2 text-xs md:text-sm">Firstname</label>
                            </div>
                            <div className="flex justify-between flex-col">
                            <input type="firstname" 
                            name="firstname" 
                            id="firstname" 
                            placeholder="John" 
                            className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary mr-2"
                            onChange={(e) => setfirstname(e.target.value)}
                            data-test="firstname"
                            />
                            <label htmlFor="lastname" className="block text-xs md:text-sm mt-2">Lastname</label>
                            <input type="lastname" 
                            name="lastname" 
                            id="lastname" 
                            placeholder="Doe" 
                            className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            onChange={(e) => setlastname(e.target.value)}
                            data-test="lastname"
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs md:text-sm">Email address</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            placeholder="leroy@jenkins.com" 
                            className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary"
                            onChange={(e) => setemail(e.target.value)}
                            data-test="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-xs md:text-sm">Phone number</label>
                            <input type="phone" 
                            name="phone" 
                            id="phone" 
                            placeholder="9022288777" 
                            className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary"
                            onChange={(e) => setphone(e.target.value)}
                            data-test="phone"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-xs md:text-sm">Password</label>
                            </div>
                            <input type="password" 
                            name="password" 
                            id="password" 
                            placeholder="*****" 
                            className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            onChange={(e) => setpassword(e.target.value)}
                            data-test="password"
                            />
                        </div>
                        <div>
                        {/* REACT SELECT FOR INDUSTRY STARTS */}
                        <label htmlFor="password" className="text-xs md:text-sm mb-2 block">Industry</label>
                            <Select options={optionsIndustry} 
                                data-test="select-industry"
                                onChange={setindustry}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                      ...theme.colors,
                                      primary25: '#f4f5fc',
                                      primary75:'#f4f5fc',
                                      primary: '#1b174a',
                                    },
                                  })}
                            />
                        </div>

                        <div>
                        {/* REACT SELECT FOR DEPARTMENT STARTS */}
                        <label htmlFor="password" className="text-xs md:text-sm mb-2 block">Department</label>
                            <Select options={optionsDepartment} 
                                data-test="select-department"
                                onChange={setdepartment}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                      ...theme.colors,
                                      primary25: '#f4f5fc',
                                      primary75:'#f4f5fc',
                                      primary: '#1b174a',
                                    },
                                  })}
                            />
                        {/* REACT SELECT FOR DEPARTMENT*/}
                        </div>
                        <span className="text-red-500 text-center">{error}</span>
                        {/* REACT SELECT CODE STARTS HERE */}
                    </div>
                    <div className="">
                        <div>
                            <button type="button" className="w-full px-5 py-2 md:px-8 md:py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900 bg-primary text-white flex items-center justify-center" onClick={handleSubmit} data-test="register-btn">
                                {isLoading ? 
                                <Loader
                                type="ThreeDots"
                                color="#ffff"
                                height={20}
                                width={20} //3 secs
                                /> : <span> Sign up </span>
                                }  
                            </button>
                        </div>
                        <div className='flex justify-center items-center'>
                        <p className="text-xs md:text-sm text-center dark:text-coolGray-400">Already have an account?</p>
                        <Link to="/login">
                            <span className='text-sm'>Sign in</span>
                        </Link>
                        </div>
                    </div>
                </form>
            </div>           
        </div>
    )
}

// FIRSTNAME LASTNAME EMAIL PHONE NUMBER PASSWORD INDUSTRY DEPARTMENT

export default Register
