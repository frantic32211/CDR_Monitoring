import React from 'react'
import telgoo5Logo from "../assets/telgoo5_logo.png"
import userLogo from "../assets/user_logo.png"

const Navbar = () => {
    return (
        <div className='h-20 w-full bg-[#43519F] absolute flex justify-between items-center'>

            <img src={telgoo5Logo} className='h-12 w-auto ml-6' alt="Telgoo5 logo"/>

            <img src={userLogo} className='h-10 w-auto mr-6 bg-white rounded-full' alt="User logo"/>

        </div>
    )
}

export default Navbar