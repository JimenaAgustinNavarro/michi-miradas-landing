import React from 'react';
import WhatsAppButton from './ui/WhatsAppButton';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-michi-cream/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <h1 className="text-2xl sm:text-3xl font-title font-bold text-michi-brown-dark tracking-tight">
            🐱 Michi Miradas
          </h1>
        </a>

        {/* Enlaces internos */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-body font-medium text-michi-brown-dark">
            <li>
              <a 
                href="#inicio" 
                className="hover:text-michi-sand-warm transition-colors duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#proceso" 
                className="hover:text-michi-sand-warm transition-colors duration-200"
              >
                Proceso
              </a>
            </li>
            <li>
              <a 
                href="#galeria" 
                className="hover:text-michi-sand-warm transition-colors duration-200"
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="hover:text-michi-sand-warm transition-colors duration-200"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón CTA */}
        <div>
          <WhatsAppButton className="inline-flex items-center justify-center px-5 py-2.5 bg-michi-sand-warm text-white font-body font-medium text-sm rounded-lg shadow-sm hover:bg-michi-hover transition-colors duration-200">
            Consultar
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
