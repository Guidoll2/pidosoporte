import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Server, Network, Cloud, Share2, Cctv } from 'lucide-react';

const services = [
  {
    title: 'Soporte IT Online 24hs',
    icon: <Server size={64} className="mb-4 text-blue-400" />,
    desc: 'Sistema de ticket vía Email para mantener su empresa en funcionamiento 24×7, 365 días al año.',
  },
  {
    title: 'Instalación y Monitorización de Redes',
    icon: <Network size={64} className="mb-4 text-blue-400" />,
    desc: 'Implementación de cableado CAT5/CAT6, fibra óptica y organización de racks con monitoreo proactivo.',
  },
  {
    title: 'CCTV y Control de Acceso',
    icon: <Cctv size={64} className="mb-4 text-blue-400" />,
    desc: 'Instalación de cámaras IP, sistemas CCTV y soluciones avanzadas de control de acceso.',
  },
  {
    title: 'Servidores Privados en la Nube',
    icon: <Cloud size={64} className="mb-4 text-blue-400" />,
    desc: 'Infraestructura en la nube con alta disponibilidad y seguridad personalizada para su negocio.',
  },
  {
    title: 'Networking para Proveedores',
    icon: <Share2 size={64} className="mb-4 text-blue-400" />,
    desc: 'Soluciones de redes escalables diseñadas para operadores y proveedores de servicios.',
  },
];

const ServiciosContainer = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="containerservicios" className="relative mt-16 md:mt-40 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestros servicios
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            className="p-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div
              className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center text-center relative"
              onClick={() => setSelected(selected === idx ? null : idx)}
            >
              {svc.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {svc.title}
              </h3>
              <div className="absolute top-4 right-4 text-blue-400">
                <Plus size={24} className="animate-pulse cursor-pointer" />
              </div>
              <AnimatePresence>
                {selected === idx && (
                  <motion.p
                    className="text-gray-200 mt-4 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {svc.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <motion.a
          href="https://wa.me/+5491130265216"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-l from-blue-500 to-emerald-500 rounded-3xl p-0.5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="block bg-gray-900 text-white rounded-3xl px-8 py-3 text-lg font-medium flex items-center justify-center space-x-2">
            <Plus size={20} />
            <span>Contáctenos</span>
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default ServiciosContainer;