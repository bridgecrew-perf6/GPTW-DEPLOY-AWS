import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'


const ResetTokenPage = () => {
    const [failed, setfailed] = useState('')
    const [redirect, setredirect] = useState(false)
    const [password, setpassword] = useState('')
    const [success, setsucess] = useState('')
    const [confirmedPassword, setconfirmedPassword] = useState('')
    let {token} = useParams()

    const updatedPassword = {
        password,
        confirmedPassword
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method:'put',
            url:`/api/v1/password/reset/${token}`,
            data:updatedPassword,
            headers:{"Content-Type":"application/json"},
        }).then((response) => {
            setredirect(true)
            setsucess(response.data.message)
            console.log(response)
        }).catch((err) => {
            console.log(err)
            setfailed(err.response.data.error)
        })
    }

    if(redirect){
        return <Navigate to="/login"/>
    }

    return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 bg-white shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Reset Password</h1>
                    <p className="text-sm dark:text-coolGray-400">Enter your updated password</p>
                </div>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="password" className="block mb-2 text-sm">Password</label>
                            <input type="password" 
                            name="password" 
                            id="password" 
                            placeholder="*******" 
                            className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label for="confirmedPassword" className="block mb-2 text-sm">Confirm Password</label>
                            <input type="confirmedPassword" 
                            name="confirmedPassword" 
                            id="confirmedPassword" 
                            placeholder="*******" 
                            className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                            onChange={(e) => setconfirmedPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900 bg-primary text-white" onClick={handleSubmit}>Change Password</button>
                    </div>
                    {failed ? <span className='text-red-500 flex items-center justify-center'>{failed}</span>
                    : <span className='text-green-500 flex items-center justify-center'>{success}</span>
                    }
                    </div>
                </form>
            </div>           
        </div>
    </div>
    )
}

export default ResetTokenPage
