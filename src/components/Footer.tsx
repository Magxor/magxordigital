import React, { useEffect, useState } from 'react';
import { Globe2, MessageCircle } from 'lucide-react';

export function Footer() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the current global visit count
    const currentCount = parseInt(localStorage.getItem('globalVisitCount') || '0');
    
    // Increment the count for every visit
    const newCount = currentCount + 1;
    
    // Store the updated count
    localStorage.setItem('globalVisitCount', newCount.toString());
    
    // Update the state to display the new count
    setVisitCount(newCount);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me comunico desde tu web: MagxorDigital, quiero conocer más sobre las web personalizadas para aumentar mis ventas.');
    window.open(`https://wa.me/5493584835320?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe2 className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Magxor</span>
            </div>
            <p className="text-sm">
              Diseño web profesional y optimización SEO para impulsar tu presencia online.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#nosotros" className="hover:text-blue-500 transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <p className="text-sm mb-4">
              ¿Tienes alguna pregunta? No dudes en contactarnos.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2025 Magxor. Todos los Derechos Reservados por Magxor.</p>
          <p className="text-xs text-gray-600 mt-2">Visitas Totales: {visitCount}</p>
        </div>
      </div>
    </footer>
  );
}