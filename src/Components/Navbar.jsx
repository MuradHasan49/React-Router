import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className=" shadow-sm bg-base-200 rounded-md">
                <div className="container mx-auto max-lg:collapse  lg:mb-8  w-full ">
                    <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                    <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                    <div className="collapse-title navbar">
                        <div className="navbar-start">
                            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <Link> <span className='text-2xl font-bold text-purple-500 '> {` <MHS/>`}</span> </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-10">
                                <NavLink to="/"> <li className='py-1.5 px-3'>Home</li></NavLink>
                                <NavLink to="/about"> <li className='py-1.5 px-3'>About</li></NavLink>
                                <NavLink to="/contect"> <li className='py-1.5 px-3'>Contect</li></NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <input type="text" placeholder="Search" className="input outline-none input-bordered border-gray-600 w-64 lg:w-auto" />
                        </div>
                    </div>
                    <div className="collapse-content lg:hidden z-1">
                        <ul className="menu space-x-10">
                            <NavLink to="/"> <li className='py-1.5 px-3'>Home</li></NavLink>
                            <NavLink to="/about"> <li className='py-1.5 px-3'>About</li></NavLink>
                            <NavLink to="/contect"> <li className='py-1.5 px-3'>Contect</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar