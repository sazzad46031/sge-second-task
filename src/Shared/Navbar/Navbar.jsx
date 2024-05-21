import { FaArrowRight, FaTimes } from 'react-icons/fa';
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
const Navbar = () => {
    const [click, setclick] = useState(false)
    const handleclick = () => setclick(!click)
    const content = <>
        <div className="lg:hidden z-50 block absolute top-20 w-full left-0 right-0 bg-slate-300 backdrop-blur-lg bg-opacity-30">
            <ul className='text-center text-xl p-8'>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Study Destination</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Services</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Test Prep</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">About Us</li>
                </Link>

            </ul>
        </div>
    </>
    return (
        <div className='max-w-[1155px] mx-auto my-[6px]'>
            <nav className='z-50'>
                <div className='h-10vh flex justify-between items-center lg:py-0 lg:px-0 px-5 py-2'>
                    <div>
                        <img src="./assets/logo1.png" alt="logo" />
                    </div>
                    <div className='lg:flex hidden'>
                        <ul className='flex items-center gap-[22px]'>
                            <li className='group'>
                                <div className='flex items-center gap-[10px]'>
                                    <span className='inter-semibold py-7 text-[15px] text-[#041527]'>Study Destination</span>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[650px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='inter-semibold py-7 text-[15px] text-[#041527]'>Services</p>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[750px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='inter-semibold py-7 text-[15px] text-[#041527]'>Test Prep</p>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[850px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='inter-semibold py-7 text-[15px] text-[#041527]'>About us</p>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[950px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <button className="text-white px-[25px] py-[10px] bg-[#93C5FD] hover:bg-[#004ACB] rounded-lg">Login<FaArrowRight className="hidden hover:inline-flex"></FaArrowRight></button>
                        </ul>

                    </div>
                    <div className='sm:hidden'>
                        {click && content}
                    </div>
                    <button className="block sm:hidden transition-none" onClick={handleclick}>
                        {click ? <FaTimes className='text-black'></FaTimes> : <CiMenuFries className='text-black'></CiMenuFries>}
                    </button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;