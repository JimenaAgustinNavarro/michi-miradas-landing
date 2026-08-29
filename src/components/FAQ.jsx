import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { FaChevronDown } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-michi-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-michi-cream text-michi-brown-medium font-body text-sm font-semibold tracking-wide mb-3">
            Resolvemos tus dudas ✨
          </span>
          <h2 className="text-4xl sm:text-5xl font-title font-bold text-michi-brown-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg font-body text-michi-brown-medium">
            Todo lo que necesitas saber antes de pedir tu pieza artesanal.
          </p>
        </div>

        {/* Lista Acordeón */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-white/80 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="font-title font-bold text-lg sm:text-xl text-michi-brown-dark pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-michi-cream flex items-center justify-center text-michi-brown-dark shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-michi-sand-warm text-white' : ''
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {/* Contenedor colapsable animado */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-michi-brown-medium font-body text-base leading-relaxed border-t border-michi-sand/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
