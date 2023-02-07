import { IoReorderThree } from 'react-icons/io5'
import { IoBasketOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import './css/Header.css'

function header(){
    return (
        <div className='Header'>
            <div className='left'>
                <IoReorderThree size = {42}/>
            </div>
            <div className='right'>    
                <IoBasketOutline size = {42}/>
                <FaUserCircle size = {42}/>
            </div>
            
        </div>
    )
}

export default header;