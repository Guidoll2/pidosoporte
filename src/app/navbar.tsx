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
      
    <nav className='flex grid grid-cols-1 w-screen bg-white md:bg-gradient-radial from-blue-950'> 



<div className=' items-center p-4'>
      <a className='' href='/'>
      <h1>pido<span className='text-blue-400'>soporte</span></h1></a></div>

      <button onClick={handleNav} id="BOTONMENU" className="absolute top-6 right-4 cursor-pointer hover:opacity-30 hover:animate-bounce md:hidden">
        
  <div className="bar w-7 h-0.5 mb-1 bg-blue-950"></div>
  <div className="bar w-7 h-0.5 mb-0.5 bg-blue-950"></div></button>


  <div className={
    menuOpen
    ? 'absolute left-0 top-0 w-1/2 h-screen sm:hidden bg-zinc-700 ease-in duration-700 z-[100]'
    : 'absolute left-[-100%] h-screen w-1/2 top-0 ease-in duration-700 '

}>
<div className='block'>

    <div onClick={handleNav} className='cursor-pointer flex justify-end'>
        <h1 className='uppercase text-2xl -translate-x-4 translate-y-4 text-white hover:animate-bounce'>X</h1>
    </div>


{/*ACA ESTA EL MENU DESPLEGABLE PARA PANTALLAS DE CELULAR*/}
    
    <div id='MENUDESPLEGABLE' className='mt-10 flex justify-center'>

<ul className="flex grid grid-cols-1 p-2">

          <li className='p-2'><a href="tab1" target='_blank' className="text-zinc-200 p-2 text-l">Empresas</a></li>
          <li className='p-2'><a href="tab2" target='_blank' className="text-zinc-200 p-2 text-l">Particulares</a></li>
          <li className='p-2'><a href="tab3" target='_blank' className="text-zinc-200 p-2 text-l">Contacto</a></li>
          <li className='p-2'><a href="tab4" target='_blank' className="text-zinc-200 p-2 text-l">Acerca de nosotros </a></li>
          <li className='bg-blue-400 rounded-xl mt-20'><a href="tab5" target='_blank' className="text-center text-zinc-300"><p className=''>Portal clientes</p></a></li>

      </ul>
</div>



</div>


</div>


{/**ACA ESTA EL MENU PARA PANTALLAS NORMALES */}

<div id="NAVMD" className="hidden md:grid grid-cols-1 justify-items-end p-2 mr-8 ">
     
<ul className="flex gap-2">

<li className='p-2'><a href="tab1" target='_blank' className="text-white text-l font-bold">Research</a></li>
<li className='p-2'><a href="tab2" target='_blank' className="text-white text-l font-bold">Publications</a></li>
<li className='p-2'><a href="tab3" target='_blank' className="text-white text-l font-bold">People</a></li>
<li className='p-2'><a href="tab4" target='_blank' className="text-white text-l font-bold">Resources </a></li>
<li className='p-2'><a href="tab5" target='_blank' className="text-white text-l font-bold">Contact </a></li>

</ul>
  </div>

      
    



     
      </nav>

);
}


export default Navbar;         
