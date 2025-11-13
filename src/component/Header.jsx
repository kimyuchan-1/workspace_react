import { Link } from 'react-router-dom'
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className='sticky top-0 left-0 w-full bg-zinc-500 border-b border-zinc-400 text-gray-100 shadow py-1 px-1 z-30'>
                <nav className='container mx-auto flex items-center justify-between h-16'>
                    <div className='font-bold text-2xl mx-1 flex flex-row items-center justify-center select-none'>
                        <FaReact />&nbsp;KGT React
                    </div>
                    <div className='flex items-center'>
                        <button onClick={toggleMenu} className='text-3xl'>
                            <FaBars />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-gray-200 bg-opacity-30 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-zinc-800 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className='flex justify-end items-center p-5'>
                    <button onClick={toggleMenu} className='text-4xl text-gray-100'>
                        <FaTimes />
                    </button>
                </div>
                <ul className='flex flex-col items-center w-full text-gray-100'>
                    <Link to='/' onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Home</Link>
                    <Link to="/lotto" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Lotto</Link>
                    <Link to="/box" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Boxoffice</Link>
                    <Link to="/traffic" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Traffic</Link>
                    <Link to="/gallery" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Gallery</Link>
                    <Link to="/festival" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Festival</Link>
                    <Link to="/charger" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Charge</Link>
                    <Link to="/todolist" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>TodoList</Link>
                    <Link to="/subway" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Subway</Link>
                </ul>
            </div>
        </>
    )
}
