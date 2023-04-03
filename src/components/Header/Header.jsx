import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
    const [menu, setMenu] = useState(false);
    const mobileMenu = () =>{
        setMenu(!menu);
    }
    return (
      <div>
        <div onClick={mobileMenu}>
            <span>{menu ? <XCircleIcon className="barsIcon d-md-none"></XCircleIcon> : <Bars3Icon className="barsIcon d-md-none"></Bars3Icon>
}</span>
        
        </div>
    <div className={ `${menu ? 'd-block': 'd-none'}  d-lg-block`}>
    <Navbar></Navbar>
    </div>
          </div>
    )
}

export default Header