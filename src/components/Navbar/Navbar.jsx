import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about-us" },
        { id: 3, name: "Contact Us", path: "/contact-us" },
        { id: 4, name: "Products", path: "/product" },
        { id: 5, name: "Product Details", path: "/products/:id" }
      ]
      
    return (
        <div className='d-sm-flex gap-4'>
            {
                routes.map((route, idx) => <li key={idx} className='list-unstyled text-dark'><Link className='text-black' to={route.path}>{route.name}</Link></li>)
            }
        </div>
    );
};

export default Navbar;