'use client'

import React, { useState } from "react";
import Image from "next/image";

const ServiciosContainer = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };

  return (
    <div id="containerservicios" className={`relative ease-in-out mt-8 bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-l p-0.5 mr-8 ml-8 ${expanded ?  'h-auto' : 'h-auto overflow-hidden'}`}>
      <div className="flex flex-col justify-center items-center p-2 bg-gray-900 rounded-l">
        <span className="flex text-white rounded-3xl p-5 text-4xl md:text-6xl">
          Nuestros servicios
        </span>

        <div className="flex flex-col items-center gap-5 md:gap-8 p-10 -translate-y-5 md:flex-row md:items-start md:justify-center">
        <div className="flex flex-col items-center translate-y-5">
    <Image src='/disco-duroblanco.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 hover:animate-pulse" />
    <p className="mt-4 text-center">Soporte IT Online 24hs</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src='/rj45blanco.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">Instalación de fibra óptica - cable IPV6 - Wireless</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src='/redblanco.png' alt="itsupporticons" width={1000} height={1000} className="w-12 h-12 mt-5 hover:animate-pulse" />
    <p className="mt-4 text-center">Monitorización y gestión de redes</p>
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
          <div className="flex grid grid-cols-4 items-center gap-5 md:gap-8 p-10 md:flex-row md:items-start md:justify-center expandable-container">
            
            <p>Brindamos soporte y asistencia mediante un sistema de ticket el cual funciona vía Email manteniendo su empresa en correcto funcionamiento 24×7 los 365 días del año.

Brindamos servicio tanto en infraestructura de redes como también en los sistemas operativos de sus equipos y estaciones de trabajo.</p>
            
            
            <p>Contamos con una amplia variedad de Partners Tecnológicos que nos permiten poder brindarle lo ultimo en Software y Hardware para estar actualizado a las necesidades de su empresa o comercio</p>
            
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis sed obcaecati odio, exercitationem minima quis dolores rerum maxime sint! Blanditiis dolorum doloribus repellendus nostrum magni eos ipsam iusto corrupti?
</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores quis laboriosam eius voluptatum atque quasi totam nesciunt, numquam, dolore quo ipsa sint sequi ratione perferendis repellat odit cumque eos.</p>
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