import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-medium'><Link to='/'>To Do list</Link></li>
        <li className='font-medium'><Link to='/complete'>Complete</Link></li>
        <li className='font-semibold'><Link to='/calendar'>Calender</Link></li>
    </>
    return (
        <div class="navbar bg-violet-900 text-primary-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 class="btn btn-ghost normal-case text-lg">Task Management Tool</h1>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;