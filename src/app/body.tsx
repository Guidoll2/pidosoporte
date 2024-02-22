import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import './globals.css';
import Carousel from "./carrousel";
import Carousel2 from "./carousel2";
import ServiciosContainer from "./servicios";

const images = [
  '/windowsb.png',
  '/intelb.png',
  '/amdb.png',
  '/lgg.png',
  '/samsungb.png',
  '/logitechb.png',
  '/linuxb.png',
  '/hppro.png',
  '/adobeb.png',
  '/ubiquiti.png',
  '/vertivpro.png',
  '/kg.png',
  '/mk.png',
  '/wd.png',
  

]

const images2 = [

  '/muni.png',
  '/ftrack.png',
 
]

const Body = () => {
    return (


<div className="flex grid grid-cols-1 bg-gradient-to-tr from-black to-[#102955] max-w-screen ">

<div id="navbar" className="">
<Navbar></Navbar>
</div>
 
        
<div id="SM" className="md:hidden flex grid grid-cols-1 z-[2]">

<div className="">
<h1 className="text-center text-3xl font-bold p-10 text-white md:text-5xl md:text-start md:font-normal">Soluciones en networking y soporte IT</h1>

<div>
<h1 className="text-center text-l p-10 -translate-y-10 text-gray-200 md:text-xl md:text-start">Combinamos la mejor tecnología disponible en hardware y software para crear soluciones completas y eficientes.</h1>  
</div>

<div className="flex justify-center -translate-y-10">        
<button className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
<a href='https://wa.me/+5491130265216' target='_blank' > 
<span className="flex w-full bg-gray-900 text-white rounded-3xl p-2 md:text-2xl">
Contáctenos
</span></a>
</button>
</div>
</div>


<div>
  <Image src='/itsupport.jpeg' alt="itsupporticons" width={1000} height={1000} className="absolute mx-auto opacity-60 w-screen top-[390px] right-0 -z-[5]"/>
</div>

 
</div>  


        <div id='MD' className="hidden md:flex grid grid-cols-1 md:p-5 md:grid grid-cols-2 z-[2]">

        <div className="">
        <h1 className="text-center text-3xl font-bold p-10 text-white md:text-5xl md:text-start md:font-normal">Soporte IT y networking empresarial</h1>

        <div>
        <h1 className="text-center text-l p-10 -translate-y-10 text-gray-200 md:text-xl md:text-start">Soluciones personalizadas en hardware y software para empresas.</h1>  
        </div>

        <div className="flex justify-center -translate-y-10">        
        <button className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
        <a href='https://wa.me/+5491130265216' target='_blank' > 
        <span className="flex w-full bg-gray-900 text-white rounded-3xl p-2 md:text-2xl">
        Contáctenos
        </span></a>
        </button>
        </div>
        </div>
 

        <div>
          <Image src='/itsupport.jpeg' alt="itsupporticons" width={1000} height={1000} className="absolute mx-auto opacity-70 w-1/2 top-20 h-3/4 right-0 -z-[5] p-5 rounded-[100px]"/>
        </div>

        <div>
          <Image src='/downsinfondo.png' alt="itsupporticons" width={1000} height={1000} className="absolute w-16 h-16 bottom-5 left-1/2 animate-[bounce_2s_ease-in-out_infinite] -z-[5]"/>
        </div>

         
        </div>

<div className="mt-80 md:mt-20">
<ServiciosContainer></ServiciosContainer></div>


  <div id="nosotros" className="flex grid grid-cols-1 mx-8 justify-center mx-auto mt-36 mr-8 ml-8 bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5">
  <div className="bg-gray-900 rounded-l">
    <p className="flex text-white text-center rounded-3xl p-5 text-3xl md:text-5xl justify-center">
    Nosotros
    </p>
 
    <div className="flex grid grid-cols-1 p-5 gap-8">
    <p className="text-2xl">
Desde 1992, somos una empresa especializada en proporcionar soluciones integrales de tecnologías de información para proyectos de sistemas, comunicaciones e informática. Nuestro enfoque abarca desde la consultoría inicial hasta la implementación, asegurando la mejor solución tecnológica.

Contamos con un equipo altamente capacitado que inspira confianza en la implementación de nuevos proyectos y en la prestación de soporte en situaciones críticas.

Nuestra fortaleza radica en la confianza y satisfacción de nuestros clientes. Nos comprometemos a ofrecer una visión imparcial de su infraestructura actual, adaptando planes de trabajo según su presupuesto y necesidades. Ofrecemos servicios de auditoría, gerenciamiento externo del personal de IT, implementación de nuevas tecnologías y capacitación para su equipo.</p>
  

    
  </div>

  </div>


</div>



<div id="partners" className="relative mt-10 p-0.5">
  
<p className="text-gray-300 text-center text-xl md:text-3xl">Alianzas estratégicas:</p>
  <Carousel2 images={images}/>


</div>


<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-500 rounded-l w-max-full h-max-full p-20">

<p className="text-center text-4xl md:p-5 md:text-4xl text-white">Conectesé con un experto</p>
<p className="text-center text-l p-2 md:p-5 md:text-xl text-white">Ya sea que necesite nuevas instalaciones o actualizaciones de sistemas existentes, nuestros consultores altamente experimentados pueden colaborar con usted para abordar sus necesidades específicas de tecnología, brindando soluciones de seguridad y protección informática de vanguardia. Descubra el futuro de la tecnología con nosotros.</p>

<div className="flex flex-col-1 items-center justify-center gap-4">
<button className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
<a href='https://wa.me/+5491130265216' target='_blank' > 
<span className="flex w-full bg-gray-900 text-white rounded-3xl p-2 md:text-2xl">
Contáctenos
</span></a>
</button>
<button className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
<a href="mailto:pidosoporte@soportear.com" target='_blank' > 
<span className="flex w-full bg-gray-900 text-white rounded-3xl p-2 md:text-2xl">
Correo Electrónico
</span></a>
</button>
</div>
</div>


      
      
<footer className="flex flex-col items-center justify-center bg-gray-200 w-full">
  <div className="flex flex-col items-center justify-center">
    <div>
      <p className="text-4xl text-gray-400 p-4 md:p-5 md:text-5xl text-center">
        pido<span className='text-blue-500'>soporte</span>
      </p>
    </div>

    <div className="flex gap-8">

      <Image className='w-10 h-10' src='/linkedinint.png' width={1000} height={1000} alt="logolinkedin"/>
      <a href="mailto:pidosoporte@soportear.com" target='_blank' >   <Image className='w-10 h-10' src='/sobreint.png' width={1000} height={1000} alt="logomail"/></a>
    </div>
  </div>

  <p className="text-center text-l text-gray-900 p-2 md:text-l p-10 mt-5">
    © 2024 Pidosoporte es una marca registrada de soporte<span className="text-blue-500">ar</span>. S.A.S Argentina Reservados todos los derechos. Es posible que algunos productos o servicios no estén disponibles en todos los mercados. Los nombres de productos/servicios enumerados en este documento son marcas y/o marcas registradas de sus respectivos propietarios y se utilizan bajo licencia o con permiso. Uso no autorizado estrictamente prohibido. Licencias propiedad de Soportear S.A.S
  </p>

  <a href="https://www.guidollaurado.com" target="_blank">
    <p className="text-[10px] text-gray-900 text-center p-5 text-xl mt-10">Diseño y desarrollo / Guido Llaurado</p>
  </a>
</footer>



 </div>

    )
}

export default Body;