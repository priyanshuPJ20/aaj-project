import React from 'react'

export default function Navbar({children}) {
  return (<>
<nav className='p-6 bg-gray-800 text-white text-2xl flex flex-row justify-around '>
    <ul className='flex flex-row justify-center gap-5'>{children}</ul>
    <button className='cursor-pointer bg-white text-black rounded-2xl p-3 hover:bg-gray-600 hover:'>Button</button>
</nav>
  </>
    )
}
