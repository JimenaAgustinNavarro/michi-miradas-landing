import React from 'react';
import { galleryData } from '../data/galleryData';

function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-michi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de Galería */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-michi-sand text-michi-brown-medium font-body text-sm font-semibold tracking-wide mb-3">
            Nuestros Trabajos ✨
          </span>
          <h2 className="text-4xl sm:text-5xl font-title font-bold text-michi-brown-dark mb-4">
            Galería de Miradas Únicas
          </h2>
          <p className="text-lg font-body text-michi-brown-medium">
            Cada collar es una obra de arte personalizada, esculpida y pintada con devoción.
          </p>
        </div>

        {/* Grid Interactivo */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-michi-sand shadow-md hover:shadow-2xl transition-all duration-300 border border-michi-sand"
            >
              {/* Imagen con zoom al hover y optimizaciones de rendimiento */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Overlay Suave al Hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white font-body">
                <span className="text-2xl mb-1">✨</span>
                <p className="font-title font-bold text-lg sm:text-xl text-michi-cream drop-shadow-sm mb-1">
                  {item.title}
                </p>
                <span className="text-xs sm:text-sm font-medium tracking-wide uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Ver detalle
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
