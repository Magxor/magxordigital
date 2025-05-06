import React from 'react';
import { Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe2 className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Magxor
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#nosotros">Nosotros</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}