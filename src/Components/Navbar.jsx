import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

import Login from './Login';

export default function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/moviedata/:id">bookings</Link>
                <Link to = "/login">Login</Link>



            </div>




        </div>
    )
}
