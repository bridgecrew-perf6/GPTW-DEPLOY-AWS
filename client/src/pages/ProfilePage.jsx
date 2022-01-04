import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const ProfilePage = () => {
    const [burgerStatus, setburgerStatus] = useState(true)
    return (
        <>
            <div className="flex bg-background flex-col dark:bg-primaryDark" style={{display:'flex',flex:4}}>
                <Sidebar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
                <Navbar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
            </div>
            <div className='w-full h-screen '>
               <Profile/>
            </div>
            <Footer />
                
        </>
    )
}

export default ProfilePage
