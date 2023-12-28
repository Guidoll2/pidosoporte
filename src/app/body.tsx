import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';





const Body = () => {
    return (

        <div className="flex grid grid-cols-1 py-10">

        <h1 className="uppercase text-center">Soporte técnico informático</h1>

            <img 
            className="py-10 opacity-60"
            src="soporte.jpeg"
            width={1000}
            height={1000}
            alt="red"/>

        <h1 className="text-center underline underline-offset-[20px] decoration-blue-400">Servicio a empresas y particulares</h1>  
        <h2 className="py-16 px-20 text-center">¿En que podemos ayudarte? </h2>
        <p className="text-sm text-center"></p>

        <div className="relative">
<button className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-400 px-4 py-2 rounded-full text-white">
    Empresas
  </button>
        
        <ul className="flex grid grid-cols-1 gap-2 px-10 py-10 border-[2px] border-gray-400 rounded-[50px] bg-gradient-radial from-blue-400">
            <li className='flex items-center p-2 gap-4'><a href="tab1" target='_blank' className="text-sm font-bold">Monitorizacion y gestion de redes</a>
            <img src="windows.png" width={40} height={40} alt="logowindows" className="px-2"/>
            </li> <p className="text-xs p-2">Asistencia remota a problemas de computación.</p>
            <li className='flex items-center gap-4 p-2'><a href="tab2" target='_blank' className="text- text-sm font-bold">Servidores privados en la nube </a>
            <img src="cloud.png" className="" width={40} height={40} alt="logosoftware" /></li> 
            <p className="text-xs p-2">Detalle del servicio</p>
            <li className='flex items-center p-2'><a href="tab3" target='_blank' className="text- text-sm font-bold">Networking para proveedores de servicios</a>
            <img src="red.png" width={40} height={40} alt="samrtphoneicon"/></li>
            <p className="text-xs items-center gap-4 p-2">Detalle del servicio</p>
        </ul>
       <a href="tabempresas" target="_blank"> <button className="absolute -bottom-4 animate-[pulse_10s_ease-in-out_infinite] left-1/2 transform -translate-x-1/2 bg-zinc-700 px-4 py-2 rounded-full text-white z-10">
    Detalle del servicio
  </button>        </a>
</div>



<div className="relative mt-20">
<button className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-400 px-4 py-2 rounded-full text-white z-10">
    Clientes particulares
  </button>
        
        <ul className="flex grid grid-cols-1 gap-2 px-10 py-10 border-[2px] border-gray-400 rounded-[50px] bg-gradient-radial from-blue-400 z-0">
            <li className='flex items-center p-2 gap-4'><a href="tab1" target='_blank' className="text- text-sm font-bold">Windows</a>
            <img src="windows.png" width={40} height={40} alt="logowindows" className="px-2"/>
            </li> <p className="text-xs p-2">Asistencia remota a problemas de computación.</p>
            <li className='flex items-center gap-4 p-2'><a href="tab2" target='_blank' className="text- text-sm font-bold">Software </a>
            <img src="soft.png" className="" width={40} height={40} alt="logosoftware" /></li> 
            <p className="text-xs p-2">Asistencia en la instalacion y configuracion de Software</p>
            <li className='flex items-center p-2'><a href="tab3" target='_blank' className="text- text-sm font-bold">Android</a>
            <img src="smart.png" width={40} height={40} alt="samrtphoneicon"/></li>
            <p className="text-xs items-center gap-4 p-2">Servicio tecnico de celulares</p>
         </ul>
         <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-400 px-4 py-2 rounded-full text-white z-10">
    Detalle del servicio
  </button>     
</div>



        </div>

    )
}

export default Body;