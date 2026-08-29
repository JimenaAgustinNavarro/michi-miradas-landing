import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../data/constants';

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl text-white drop-shadow-sm" />
    </a>
  );
}

export default WhatsAppFloat;
