import React from 'react';
import { FaInstagram, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-michi-brown-dark text-michi-cream pt-16 pb-8 border-t border-michi-brown-medium/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-michi-brown-medium/40">
          {/* Columna 1: Logo y Eslogan */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl sm:text-3xl font-title font-bold text-michi-cream tracking-tight">
              🐱 Michi Miradas
            </h3>
            <p className="font-body text-michi-cream/80 text-sm sm:text-base max-w-xs leading-relaxed">
              Joyas y collares de cerámica modelados a mano para inmortalizar la mirada y el alma de tu mascota.
            </p>
          </div>

          {/* Columna 2: Redes Sociales */}
          <div className="flex flex-col items-start md:items-center space-y-4">
            <h4 className="text-lg font-title font-bold text-michi-cream">
              Síguenos en Redes
            </h4>
            <a
              href="https://instagram.com/michimiradas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-michi-brown-medium/50 hover:bg-michi-sand-warm text-michi-cream font-body text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaInstagram className="text-xl" />
              <span>@michimiradas</span>
            </a>
          </div>

          {/* Columna 3: Ubicación y Contacto */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h4 className="text-lg font-title font-bold text-michi-cream">
              Ubicación
            </h4>
            <div className="flex items-center gap-2 text-michi-cream/90 font-body text-sm">
              <FaMapMarkerAlt className="text-michi-sand-warm text-base shrink-0" />
              <span>Lima - Perú</span>
            </div>
            <p className="text-xs text-michi-cream/60 font-body">
              Envíos a todo el territorio nacional 📦
            </p>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-michi-cream/60">
          <p>© 2026 Michi Miradas. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <FaHeart className="text-michi-sand-warm text-xs" /> para los amantes de las mascotas
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
