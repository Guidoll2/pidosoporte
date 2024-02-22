'use client'

import React, { useState } from "react";
import Image from "next/image";



const ServiciosContainer = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };

  return (
    
    
    <div id="containerservicios" className={`relative mt-16 md:mt-40 bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 mr-8 ml-8 ${expanded ?  'h-auto' : 'h-auto overflow-hidden'}`}>
      <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">
        <span className="flex text-white rounded-3xl p-5 text-4xl md:text-6xl">
          Nuestros servicios
        </span>

        <div className="flex flex-col items-center gap-5 md:gap-8 p-10 -translate-y-5 md:flex-row md:items-start md:justify-center">
        
        <div className="flex flex-col items-center translate-y-5 ">
      <Image src='/disco-duroblanco.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 hover:animate-pulse" />
        <p className="mt-4 text-center">Soporte IT Online 24hs</p>
    
         </div>


  <div className="flex flex-col items-center">
    <Image src='/redblanco.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">Instalación, gestión y monitorización de redes</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src='/cctv.png' alt="cctvicon" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">CCTV - Control de acceso.</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src='/cloudb.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">Servidores privados en la nube</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src='/network.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">Networking para proveedores de servicios</p>
  </div>
        </div>

        {expanded && (
          
          
          <div className="flex grid grid-cols-1 md:grid-cols-1 items-center gap-5 md:gap-20 p-10 md:flex-row md:items-start md:justify-center expandable-container">
            

            <div id="containerservicios" className= "relative bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 ">
            <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">

            <p className="text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">Soporte IT Online:</p>
            <ul>
              <li className="text-center p-5">Mediante un sistema de ticket vía Email mantenemos su empresa en correcto funcionamiento 24×7 los 365 días del año.</li>
            </ul></div></div>
            
            <div id="containerservicios" className= "relative bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 ">
            <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">


            <p className="text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text ">Redes:</p>
            <ul>
              <li className="text-center p-5">Llevamos a cabo la implementación y diseño de sistemas de cableado estructurado, abarcando CAT5 / CAT6 y fibra óptica. Nos encargamos de instalar u organizar racks y realizar mejoras en su disposición.</li>
            </ul></div></div>


            <div id="containerservicios" className= "relative bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 ">
            <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">
            <p className="text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text ">Videovigilancia y control de acceso:</p>
            <ul>
              <li className="text-center p-5">Instalamos cámaras IP y sistemas de CCTV así como también soluciones para el control de acceso.</li>
            </ul>

            </div></div>

            <div id="containerservicios" className= "relative bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 ">
            <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">
            <p className="text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text ">Hardware y software empresarial:</p>
            <ul>
              <li className="text-center p-5">
Disponemos de una extensa red de colaboradores tecnológicos que nos capacitan para ofrecer las últimas innovaciones en software y hardware, asegurándonos de mantenernos al día con los requisitos específicos de su empresa o comercio.</li>
            </ul>
</div></div>

<div id="containerservicios" className= "relative bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 ">
            <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l ">
            <p className="text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text ">Urgencias en el acto:</p>
            <ul>
              <li className="text-center p-5" >Contratos con diferentes opciones de SLA (tiempo de respuesta y solución de problemas). Respuesta telefónica y contacto directo en caso de urgencia o denegación de servicio.</li>
            </ul>

            </div></div>

            <div className="flex justify-center ">        
<button className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit">
<a href='https://wa.me/+5491130265216' target='_blank' > 
<span className="flex w-full bg-gray-900 text-white rounded-3xl p-2 md:text-2xl">
Contáctenos
</span></a>
</button>
</div>
          </div> 
        )}

        <button
          onClick={handleExpandClick}
          className="bg-gradient-to-l from-blue-500 to-emerald-500 text-white rounded-3xl p-0.5 w-fit h-fit mt-4"
        >
          <span className="flex w-full bg-gray-950 text-white rounded-3xl p-2 md:text-l">
            {expanded ? "Cerrar" : "Ver más"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiciosContainer;