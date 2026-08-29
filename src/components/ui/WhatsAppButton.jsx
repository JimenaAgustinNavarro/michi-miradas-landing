import React from 'react';
import { WHATSAPP_URL } from '../../data/constants';

function WhatsAppButton({ children, className = '', ...props }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export default WhatsAppButton;
