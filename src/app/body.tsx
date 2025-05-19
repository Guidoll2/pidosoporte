  import React from "react";
  import Image from "next/image";
  import { motion } from "framer-motion";
  import Navbar from "./navbar";
  import './globals.css';
  import Carousel2 from "./carousel2";
  import ServiciosContainer from "./servicios";
  import { CheckCircle, Users, Award, Phone, Mail } from 'lucide-react';


  const Body = () => (
    <div className="bg-gradient-to-tr from-black to-[#102955] text-white max-w-screen min-h-screen">
      {/* Navbar */}
      <header id="navbar" className="relative z-20 mb-20">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Soluciones en networking y soporte IT
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Combinamos la mejor tecnología disponible en hardware y software para crear soluciones completas y eficientes.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://wa.me/+5491130265216"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-gradient-to-l from-blue-500 to-emerald-500 rounded-3xl p-0.5 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span className="block bg-gray-900 text-white rounded-3xl px-6 py-3 text-lg md:text-xl font-medium transition-colors duration-300 group-hover:bg-gray-800">
                Contáctenos
              </span>
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/image1.webp"
            alt="IT Support"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl"
            id="hero-image"
              unoptimized

          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20">
        <ServiciosContainer />
      </section>

      {/* About Us Section */}
  <section id="nosotros" className="mx-6 md:mx-20 mb-20">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-red-600 p-1 rounded-l-lg overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900 rounded-l-lg p-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center md:justify-start">
                <Award className="mr-3 text-blue-500 animate-pulse" size={36} />
                Nosotros
              </h2>
              <motion.p
                className="text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Desde 1992, somos una empresa especializada en proporcionar soluciones integrales de tecnologías de información para proyectos de sistemas, comunicaciones e informática. Nuestro enfoque abarca desde la consultoría inicial hasta la implementación, asegurando la mejor solución tecnológica.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <Users size={32} />, title: 'Equipo Experto', text: 'Profesionales capacitados listos para cualquier desafío.' },
                  { icon: <CheckCircle size={32} />, title: 'Calidad Garantizada', text: 'Compromiso con altos estándares y satisfaccción.' },
                  { icon: <Award size={32} />, title: 'Trayectoria', text: 'Más de 30 años liderando el sector IT.' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl shadow-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="text-blue-500 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-xl md:text-3xl text-gray-300 mb-8">
          Alianzas estratégicas
        </h3>
        <Carousel2 />
      </section>

      {/* Connect Section */}
    <motion.section
          className="px-6 md:px-20 py-20 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-500 rounded-2xl p-8 overflow-hidden"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundSize: '200% 200%' }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center space-x-3">
              <Phone className="animate-pulse text-blue-400" size={32} />
              <span>Conéctese con un experto</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Ya sea que necesite nuevas instalaciones o actualizaciones de sistemas existentes, nuestros consultores altamente experimentados pueden colaborar con usted para abordar sus necesidades específicas de tecnología, brindando soluciones de seguridad y protección informática de vanguardia. Descubra el futuro de la tecnología con nosotros.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="https://wa.me/+5491130265216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-l from-blue-500 to-emerald-500 rounded-3xl p-0.5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block bg-gray-900 text-white rounded-3xl px-8 py-3 text-lg md:text-xl font-medium flex items-center justify-center space-x-2">
                  <Phone size={20} />
                  <span>Contáctenos</span>
                </span>
              </motion.a>
              <motion.a
                href="mailto:pidosoporte@soportear.com"
                className="inline-block bg-gradient-to-l from-blue-500 to-emerald-500 rounded-3xl p-0.5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block bg-gray-900 text-white rounded-3xl px-8 py-3 text-lg md:text-xl font-medium flex items-center justify-center space-x-2">
                  <Mail size={20} />
                  <span>Correo Electrónico</span>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
        
      {/* Footer */}
  <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-[#102955] text-white py-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
      {/* Logo & Social */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="flex items-center space-x-2">
          <p className="text-4xl font-extrabold tracking-wide">
            pido<span className="text-blue-400">soporte</span>
          </p>
          <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full animate-pulse"></span>
        </div>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            {/* Ícono LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-0.8-1.8-1.7s0.8-1.7 1.8-1.7 1.8 0.8 1.8 1.7-0.8 1.7-1.8 1.7zm13.5 12.3h-3v-5.6c0-1.3-0.5-2.2-1.7-2.2s-2 0.8-2 2.2v5.6h-3v-11h3v1.5c0.8-1.3 2.3-2 3.8-2 3.3 0 4 2.2 4 5v6.5z"/>
            </svg>
          </a>
          <a
            href="mailto:pidosoporte@soportear.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            {/* Ícono Email SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.5l-11-7.5v13h22v-13l-11 7.5zm11-10.5h-22l11 7.5 11-7.5z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <a href="#containerservicios" className="hover:text-blue-400 transition-colors">Servicios</a>
        <a href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a>
        <a href="#partners" className="hover:text-blue-400 transition-colors">Partners</a>
        <a href="https://stci.freshdesk.com/support/login" className="hover:text-blue-400 transition-colors">Genere su ticket</a>
      </div>

      {/* Legal & Credits */}
      <div className="flex flex-col items-center md:items-end text-sm text-gray-400 space-y-4">
        <p className="text-center md:text-right">
          © 2024 Pidosoporte S.A.S. Todos los derechos reservados.
        </p>
        <p className="max-w-xs text-center md:text-right">
          Algunos productos o servicios pueden no estar disponibles en todos los mercados. Marcas registradas de sus respectivos propietarios.
        </p>
        <a
          href="https://guidollaurado.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Diseño & Desarrollo / Guido Llaurado
        </a>
      </div>
    </div>
  </footer>

    </div>
  );

  export default Body;
