import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <button className="btn btn-ghost text-xl">MHS</button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-10">
                            <NavLink to="/"> <li>Home</li></NavLink>
                            <NavLink to="/about"> <li>About</li></NavLink>
                            <NavLink to="/footer"> <li>Contect</li></NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <input type="text" placeholder="Search" className="input input-bordered w-64 lg:w-auto" />
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu space-x-10">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contect</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar