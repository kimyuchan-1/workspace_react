import React from 'react'

export default function Header() {
  return (

    <header className='bg-blue-300 text-white shadow-md'>
        <nav className='container mx-auto flex items-center justify-between h-16'>
            <div className='font-bold text-2xl m-2'>KGT React</div>
            <ul className='flex space-x-4'>
                <li className='hover:font-bold m-2'>Home</li>
                <li className='hover:font-bold m-2'>Lotto</li>
            </ul>
        </nav>
    </header>

  )
}
