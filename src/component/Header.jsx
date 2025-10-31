import React from 'react'

export default function Header() {
  return (

    <header className='bg-zinc-500 border-b border-zinc-400 text-gray-100 w-full top-0 left-0 shadow py-1 text-center px-1'>
        <nav className='container mx-auto flex items-center justify-between h-16'>
            <div className='font-bold text-2xl mx-1'>KGT React</div>
            <ul className='flex space-x-4'>
                <li className='hover:underline select-none cursor-pointer'>Home</li>
                <li className='hover:underline mx-1 select-none cursor-pointer'>Lotto</li>
            </ul>
        </nav>
    </header>

  )
}
