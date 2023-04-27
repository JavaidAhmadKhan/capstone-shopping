import { Link, Outlet } from "react-router-dom"

import Logo from '../../assets/crown.svg'
import './navigation.scss'


const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className='nav-link'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation
