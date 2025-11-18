'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Plug } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes-nous', href: '/about' },
    { name: 'Équipements', href: '/equipments' },
    { name: 'Événements', href: '/events' },
    { name: 'HumanLab', href: '/humanlab' },
    { name: 'Formations', href: '/formations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Plug className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-dark tracking-tight">
                LA <span className="text-primary">MULTIPRISE</span>
              </h1>
              <p className="text-xs text-gray-light">Fab Lab · Paron (89)</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-dark hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              <Plug className="w-5 h-5" />
              Nous rejoindre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-plug-in">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-dark hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-2"
                >
                  <Plug className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary mt-4 flex items-center justify-center gap-2"
              >
                <Plug className="w-5 h-5" />
                Nous rejoindre
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
