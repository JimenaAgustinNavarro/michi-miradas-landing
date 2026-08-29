import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppButton from './ui/WhatsAppButton';

function Hero() {
  return (
    <section id="inicio" className="min-h-screen pt-24 sm:pt-28 pb-16 flex items-center bg-michi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda (Texto) */}
          <div className="flex flex-col items-start text-left space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-michi-sand text-michi-brown-medium font-body text-sm font-semibold tracking-wide">
              Piezas únicas hechas con amor ✨
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-title font-bold text-michi-brown-dark leading-tight">
              Collares artesanales con el alma de tu mascota
            </h1>

            <p className="text-lg sm:text-xl font-body text-michi-brown-medium max-w-xl leading-relaxed">
              Capturamos la mirada única de tu compañero en una pieza de cerámica hecha a mano.
            </p>

            <div className="pt-2">
              <WhatsAppButton className="inline-flex items-center gap-3 px-8 py-4 bg-michi-sand-warm text-white font-body font-semibold text-lg rounded-xl shadow-md hover:bg-michi-hover transition-all duration-300 transform hover:-translate-y-0.5">
                <FaWhatsapp className="text-2xl" />
                <span>Consultar por WhatsApp</span>
              </WhatsAppButton>
            </div>
          </div>

          {/* Columna Derecha (Imagen Real) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-xl bg-michi-sand border-4 border-white/60 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}img/hero1.jpg`}
                alt="Collar artesanal de cerámica para mascotas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
