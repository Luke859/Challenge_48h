import { IoReorderThree } from 'react-icons/io5'
import { IoBasketOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import React from "react";
import '../../css/Header.css';
import { Link, useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

    const handleSubmit = () => {
        try{
            localStorage.clear()
            navigate('/Login')
            alert("Logout sucessfull !!")
        }catch(e){
            alert("Logout error" + e.message)
        }
    }

    return (
        <div className='Header'>
            <div className='left'>
                <Link to={'/categories'}><IoReorderThree size = {42}/></Link> 
            </div>
            <div className='right'>     
                <IoBasketOutline size = {42}/>
                <FaUserCircle size = {42}/>
            </div>
            <button onClick={handleSubmit}>Logout</button>
            
        </div>
    )
}

export default Header;