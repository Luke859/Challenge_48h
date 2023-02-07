import { IoReorderThree } from 'react-icons/io5'
import { IoBasketOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import '../../css/Header.css'
import { Link } from 'react-router-dom'

function header(){
    return (
        <div className='Header'>
            <div className='left'>
                <IoReorderThree size = {42}/>
            </div>
            <Link to={'/'}><h1>Atomics Alpaga Market</h1></Link>
            <div className='right'>
                <div className='btn'>
                    <Link to={'/basket'}><IoBasketOutline size = {42}/></Link>
                </div>
                <div className='btn'>
                    <Link to={'/login'}><FaUserCircle /></Link>
                </div> 
            </div>
            
        </div>
    )
}

export default header;