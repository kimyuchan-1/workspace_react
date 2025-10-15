import React from 'react'

export default function Header() {
  return (

    <header className='bg-blue-300 text-white shadow-md'>
        <nav className='container mx-auto flex items-center justify-between h-16'>
            <div className='font-bold text-2xl'>KGT React</div>
            <ul className='flex space-x-4'>
                <li className='hover:font-bold'>Home</li>
                <li className='hover:font-bold'>Lotto</li>
            </ul>
        </nav>
    </header>

  )
}
