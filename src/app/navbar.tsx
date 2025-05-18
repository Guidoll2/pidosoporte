import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md bg-gradient-to-tr from-black to-[#102955] shadow-xl z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white transform transition-transform duration-300 hover:scale-105">
          pido<span className="text-blue-500">soporte</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#containerservicios" className="uppercase text-gray-100 font-semibold hover:text-white transition-colors duration-200">
            Servicios
          </Link>
          <Link href="#nosotros" className="uppercase text-gray-100 font-semibold hover:text-white transition-colors duration-200">
            Nosotros
          </Link>
          <Link href="#partners" className="uppercase text-gray-100 font-semibold hover:text-white transition-colors duration-200">
            Partners
          </Link>
          <a
            href="https://stci.freshdesk.com/support/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 font-semibold hover:text-white transition-colors duration-200"
          >
            Genere su ticket
          </a>
          <a
            href="https://wa.me/+5491130265216"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-l from-blue-500 to-emerald-500 rounded-3xl p-0.5 hover:scale-105 transition-all duration-300"
          >
            <span className="block bg-gray-900 text-white rounded-3xl px-6 py-2 font-medium">
              Contáctenos
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNav}
          className="md:hidden flex flex-col justify-between w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-blue-500 transform transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 bg-blue-500 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 bg-blue-500 transform transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-black to-[#102955] p-8"
          >
            <div className="flex justify-end">
              <button onClick={handleNav} aria-label="Close menu" className="text-white text-3xl">
                &times;
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center space-y-6">
              <Link href="#containerservicios" onClick={handleNav} className="text-2xl text-gray-100 hover:text-white transition-colors duration-200">
                Servicios
              </Link>
              <Link href="#nosotros" onClick={handleNav} className="text-2xl text-gray-100 hover:text-white transition-colors duration-200">
                Nosotros
              </Link>
              <Link href="#partners" onClick={handleNav} className="text-2xl text-gray-100 hover:text-white transition-colors duration-200">
                Partners
              </Link>
              <a
                href="https://wa.me/+5491130265216"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNav}
                className="text-2xl text-gray-100 hover:text-white transition-colors duration-200"
              >
                Contáctenos
              </a>
              <a
                href="https://stci.freshdesk.com/support/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNav}
                className="px-6 py-3 bg-gradient-to-br from-emerald-600 to-blue-700 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Genere su ticket
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
