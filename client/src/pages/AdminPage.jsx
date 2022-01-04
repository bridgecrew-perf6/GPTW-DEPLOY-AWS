import React,{useState} from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AdminPage = () => {
    const [burgerStatus, setburgerStatus] = React.useState(true)
    return (
        <>
        <div className="flex bg-background dark:bg-primaryDark flex-col dark:text-white" style={{display:'flex',flex:4}}>
            <Sidebar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
            <Navbar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
            <Main/>
        </div>
        <Footer/>
        </>
        
    )
}

export default AdminPage
