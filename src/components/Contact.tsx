import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';

export function Contact() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5493584835320?text=Hola!%20Quiero%20saber%20más%20sobre%20la%20web%20con%20Seo%20en%20Google%20de%20Magxor.',
      '_blank'
    );
  };

  return (
    <section id="contacto" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contactanos
        </h2>
        
        <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Zap className="w-8 h-8 text-white animate-pulse" />
              <div>
                <h3 className="text-2xl font-bold text-white">¡Tu Primer Mes, Gratis!</h3>
                <p className="text-white/80">Comienza tu presencia digital sin riesgo</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all hover:scale-105 flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Contactar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}