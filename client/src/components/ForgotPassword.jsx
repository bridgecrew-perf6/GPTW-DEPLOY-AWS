import React,{useState} from 'react'
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setemail] = useState('')
    const [success, setsuccess] = useState('')
    const [failed, setfailed] = useState('')
    const updatedEmail = {
        email
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method:'post',
            url:'/api/v1/password/forgot',
            data:updatedEmail,
            headers:{"Content-Type":"application/json"},
        }).then((response) => {
            setsuccess(response.data.message)
        }).catch((err) => {
            setfailed(err.response.data.error)
        })
      }

      console.log(email)

    return (
        <div>
            <div>
                <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 bg-white shadow-lg">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Forgot Password</h1>
                        <p className="text-sm dark:text-coolGray-400">Enter your registered Email</p>
                    </div>
                    <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label for="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder="leroy@jenkins.com" 
                                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 bg-background focus:ring-primary" 
                                onChange={(e) => setemail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900 bg-primary text-white" onClick={handleSubmit}>Recover</button>
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

export default ForgotPassword
