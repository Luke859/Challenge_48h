import { IoReorderThree } from 'react-icons/io5'
import { IoBasketOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import '../../css/Header.css'
import { Link } from 'react-router-dom'

function header(){
    return (
        <div className='Header'>
            <div className='left'>
                <Link to={'/categories'}><IoReorderThree size = {42}/></Link> 
            </div>
            <div className='right'>    
                <IoBasketOutline size = {42}/>
                <FaUserCircle size = {42}/>
            </div>
            
        </div>
    )
}

export default header;