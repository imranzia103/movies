import React, { useState } from 'react'
import {
    AiOutlineHome,
    AiOutlineLogin,
    AiOutlineUserAdd,
} from 'react-icons/ai'

import { MdOutlineLocalMovies } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from '../../redux/api/users'
import { logout } from '../../redux/features/auth/authSlice'









const Navigation = () => {

    const { userInfo } = useSelector((state) => state.auth)
    const [dropDownOpen, setDropdownOpen] = useState(false)


    const toggleDropdown = () => {
        setDropdownOpen(!dropDownOpen);
    };

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLoginMutation()

    

    return (
        <div className='fixed bottom-10 left-[30rem] transform translate-x-1/2 translate-y-1/2 z-50
        bg-[#0f0f] border w-[30%] px-[4rem] mb-[2rem] rounded'>
            <section className="flex justify-between items-center">
                <div className="flex justify-center items-center mb-[2rem]">
                    <Link to="/" className="flex items-center transition-transform hover:translate-x-2">
                        <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
                        <span className='hidden nav-item-name mt-[3rem]'>Home</span>
                    </Link>
                    <Link to ="/movies" className="flex items-center transition-transform hover:translate-x-2">
                        <MdOutlineLocalMovies className="mr-2 mt-[3rem]" size={26} />
                        <span className='hidden nav-item-name mt-[3rem]'>Movies</span>      
                    </Link>
                </div>
            </section>
        </div> 
    );
};

export default Navigation
