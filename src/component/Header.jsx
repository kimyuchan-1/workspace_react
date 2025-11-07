import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";

export default function Header() {
  return (

    <header className='bg-zinc-500 border-b border-zinc-400 text-gray-100 w-full top-0 left-0 shadow py-1 text-center px-1'>
        <nav className='container mx-auto flex items-center justify-between h-16'>
            <div className='font-bold text-2xl mx-1 flex flex-row items-center justify-center select-none'><FaReact />&nbsp;KGT React</div>
            <ul className='flex space-x-4'>
                <Link to='/'className='hover:underline select-none mx-1 cursor-pointer'>Home</Link>
                <Link to="/lotto" className='hover:underline mx-1 select-none cursor-pointer'>Lotto</Link>
                <Link to="/food" className='hover:underline mx-1 select-none cursor-pointer'>Food</Link>
                <Link to="/box" className='hover:underline mx-1 select-none cursor-pointer'>Boxoffice</Link>
                <Link to="/traffic" className='hover:underline mx-1 select-none cursor-pointer'>Traffic</Link>
                <Link to="/gallery" className='hover:underline mx-1 select-none cursor-pointer'>Gallery</Link>
                <Link to="/festival" className='hover:underline mx-1 select-none cursor-pointer'>Festival</Link>
                <Link to="/charger" className='hover:underline mx-1 select-none cursor-pointer'>Charge</Link>
                <Link to="/jotai" className='hover:underline mx-1 select-none cursor-pointer'>Jotai</Link>
                <Link to="/festivalwithjotai" className='hover:underline mx-1 select-none cursor-pointer'>FestivalwithJotai</Link>
            </ul>
        </nav>
    </header>

  )
}
