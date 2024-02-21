'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
      
const Navbar = () => {

const [menuOpen, setMenuOpen] = useState (false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
         
    } 

    return (
      
<nav id='NAVBAR' className='w-screen shadow-xl'> 


<div className='flex justify-between items-center p-4'>

<div className='flex items-center'>
  <a className='' href='/'>
    <p className="text-3xl text-white">pido<span className='text-blue-500'>soporte</span></p>
  </a>
</div>

<ul className='hidden md:flex flex-row items-center gap-10'>
  <li className='p-2'><a href="#containerservicios" className="text-gray-100 text-l font-bold uppercase">Servicios</a></li>
  <li className='p-2'><a href="#nosotros" className="text-gray-100 text-l font-bold uppercase">Nosotros</a></li>
  <li className='p-2'><a href="#partners" className="text-gray-100 text-l font-bold uppercase">Partners</a></li>
</ul>

<div id="NAVMD" className="hidden md:flex items-center justify-end gap-5 mr-5">
  <p className='p-2'><a href="https://stci.freshdesk.com/support/login" target='_blank' className="text-gray-100 text-l font-bold">Genere su ticket</a></p>

  <div className="">
    <p className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
      <a href='https://wa.me/+5491130265216' target='_blank'>
        <span className="flex w-full bg-blue-950 text-white rounded-3xl p-2 md:text-l justify-end">
          Contáctenos
        </span>
      </a>
    </p>
  </div>
</div>

</div>
 
<div onClick={handleNav} id="BOTONMENU" className="absolute top-8 right-4 cursor-pointer hover:opacity-30 hover:-skew-y-12 md:hidden">
<menu/>

<div className="bar w-7 h-0.5 mb-1 bg-blue-500  "></div>
<div className="bar w-7 h-0.5 mb-1 bg-blue-500 "></div>
<div className="bar w-5 ml-2 h-0.5 bg-blue-500 "></div>
   
</div>
      
<div className={
    menuOpen
    ? 'absolute left-0 top-0 w-screen h-screen sm:hidden bg-gradient-to-tr from-black to-[#102955] p-10 ease-in duration-500 z-[100]'
    : 'absolute top-[-100%] top-0 left-0 w-screen h-s   creen p-10 ease-in duration-500 '

}>
<div className='block'>
    <div onClick={handleNav} className='cursor-pointer flex justify-end'>
        <h1 className='uppercase text-4xl text-white'>X</h1>
    </div>

<div id='MENUCELU' className='mt-10 flex justify-center'>

<ul className="flex grid grid-cols-1 list-none text-center space-y-4">

        
          <li className='w-full  p-2'><a href="#containerservicios" className="text-gray-100 p-2 text-2xl">Servicios</a></li>
          <li className='w-full  p-2'><a href="#nosotros" className="text-gray-100 p-2 text-2xl">Nosotros</a></li>
          <li className='w-full  p-2'><a href="partners" target='_blank' className="text-gray-100 p-2 text-2xl">Partners </a></li>
          <li className='w-full  p-2'><a href='https://wa.me/+5491130265216' target='_blank' className="text-gray-100 p-2 text-2xl">Contáctenos </a></li>
          <li className='w-full  p-2'><a href="https://stci.freshdesk.com/support/login" target='_blank' className="text-gray-100 p-2 text-2xl bg-gradient-to-br from-emerald-600 to-blue-700 rounded-full">Genere su ticket</a></li>
         
      </ul>
</div>

</div>
</div>



 


</nav>

);
}


export default Navbar;         