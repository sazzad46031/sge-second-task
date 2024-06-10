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
        <div className='max-w-[1155px] mx-auto my-[6px] bg-[#F0F8FF]'>
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
                            <div className="group relative"><button className="bg-[#BFDBFE] hover:bg-[#004AC8] px-4 hover:pr-4 hover:px-0 transform duration-300 py-2 rounded-2xl text-base inter-bold text-[15px] text-black hover:text-white relative z-10 w-24">Login<span className="absolute right-9 top-0 bottom-0 flex items-center justify-center w-8 transition-all duration-300 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full"><svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></span></button></div>
                            
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