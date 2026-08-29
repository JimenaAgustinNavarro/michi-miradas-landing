// src/data/galleryData.js
// -------------------------------------------------------------------------------------------------
// GUÍA DE IMÁGENES:
// 1. Recomendado: Usar formato WebP para máxima compresión, rendimiento y calidad.
// 2. Dimensión recomendada: Ancho máximo de 1200px (proporción 1:1 cuadrada o similar).
// 3. Coloca tus fotos en 'src/assets/images/' y actualiza los imports aquí.
// -------------------------------------------------------------------------------------------------

import img1 from '../assets/images/collar-1.svg';
import img2 from '../assets/images/collar-2.svg';
import img3 from '../assets/images/collar-3.svg';
import img4 from '../assets/images/collar-4.svg';
import img5 from '../assets/images/collar-5.svg';
import img6 from '../assets/images/collar-6.svg';

export const galleryData = [
  {
    id: 1,
    title: 'Milo - Gato Siamés',
    image: img1,
    alt: 'Collar artesanal con ojos de gato siamés modelado en cerámica',
  },
  {
    id: 2,
    title: 'Luna - Gata Carey',
    image: img2,
    alt: 'Collar de cerámica con mirada de gata carey pintada a mano',
  },
  {
    id: 3,
    title: 'Simba - Gato Atigrado',
    image: img3,
    alt: 'Collar personalizado de gato atigrado naranja hecho a mano',
  },
  {
    id: 4,
    title: 'Oliver - Gato Persa',
    image: img4,
    alt: 'Collar artesanal con ojos de gato persa en cerámica',
  },
  {
    id: 5,
    title: 'Nala - Gata Bombay',
    image: img5,
    alt: 'Collar artesanal personalizado de gata bombay con mirada brillante',
  },
  {
    id: 6,
    title: 'Coco - Perro Golden',
    image: img6,
    alt: 'Collar hecho a mano con ojos de perrito golden retriever',
  },
];
