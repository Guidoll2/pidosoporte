const Identidad = () => {

    return (

        <div className="relative mt-20 p-4 " id="container2">
<button className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-blue-400 px-4 py-2 rounded-full text-white z-10 border-[1px] border-gray-400 md:text-2xl">
    Conocenos
  </button>
        
        <ul className="flex grid grid-cols-1 gap-2 px-10 py-10 border-[2px] border-gray-400 rounded-[50px] bg-gradient-radial from-blue-400 z-0">
            <li className='flex items-center p-2 gap-4'><a href="tab1" target='_blank' className="text- text-sm font-bold md:text-2xl">Facebook</a>
            <img src="facebook.png" width={40} height={40} alt="logowindows" className="px-2 md:w-20 "/>
            </li> <p className="text-xs p-2 md:text-xl">Asistencia remota a problemas de computación.</p>
            <li className='flex items-center gap-4 p-2'><a href="tab2" target='_blank' className="text- text-sm font-bold md:text-2xl">Instagram </a>
            <img src="instagram.png" className="md:w-20" width={40} height={40} alt="logosoftware" /></li> 
            <p className="text-xs p-2 md:text-xl">Asistencia en la instalacion y configuracion de Software</p>
            <li className='flex items-center p-2'><a href="tab3" target='_blank' className="text- text-sm font-bold md:text-2xl">Google shops</a>
            <img src="maps.png" width={40} height={40} alt="samrtphoneicon" className="md:w-20"/></li>
            <p className="text-xs items-center gap-4 p-2 md:text-xl">Servicio tecnico de celulares</p>
         </ul>
         <button className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-zinc-700 px-4 py-2 rounded-full text-white z-10 md:text-2xl">
    Detalle del servicio
  </button>     
</div>




    )
}


export default Identidad;