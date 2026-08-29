import React from 'react';
import { FaCamera, FaPalette, FaTruck } from 'react-icons/fa';

function Process() {
  const steps = [
    {
      number: '01',
      icon: FaCamera,
      title: 'Envíanos su foto',
      description: 'Danos la foto nítida de tu mascota y elige el tamaño de tu collar.',
    },
    {
      number: '02',
      icon: FaPalette,
      title: 'Elaboración artesanal',
      description: 'Modelamos, pintamos y horneamos a mano cada detalle de sus ojos.',
    },
    {
      number: '03',
      icon: FaTruck,
      title: 'Envío a tu hogar',
      description: 'Empacamos con amor y te enviamos el collar a cualquier parte del Perú.',
    },
  ];

  return (
    <section id="proceso" className="py-20 bg-michi-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-michi-cream text-michi-brown-medium font-body text-sm font-semibold tracking-wide mb-3">
            Paso a paso ✨
          </span>
          <h2 className="text-4xl sm:text-5xl font-title font-bold text-michi-brown-dark mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg font-body text-michi-brown-medium">
            El proceso artesanal para inmortalizar la mirada de tu compañero favorito.
          </p>
        </div>

        {/* Grid de 3 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center border border-white/60 group overflow-hidden"
              >
                {/* Numeración estética tipo diseño editorial */}
                <span className="absolute -top-4 right-4 text-7xl font-title font-bold text-michi-brown-dark opacity-10 select-none group-hover:opacity-20 transition-opacity duration-300">
                  {step.number}
                </span>

                {/* Contenedor del Ícono */}
                <div className="w-20 h-20 rounded-2xl bg-michi-cream flex items-center justify-center mb-6 shadow-inner text-michi-sand-warm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-4xl text-michi-sand-warm" />
                </div>

                {/* Título del paso */}
                <h3 className="text-2xl font-title font-bold text-michi-brown-dark mb-3">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="text-base font-body text-michi-brown-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
