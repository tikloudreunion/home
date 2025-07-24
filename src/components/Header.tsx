import React from 'react';
import { Cloud, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Ti Kloud Réunion</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#opensource" className="text-gray-700 hover:text-blue-600 transition-colors">Open Source</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Tarifs</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a href="#future" className="text-gray-700 hover:text-blue-600 transition-colors">Future</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">Connexion</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => window.open('#future', '_blank')}>
              Accéder à l'app
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#opensource" className="text-gray-700 hover:text-blue-600 transition-colors">Open Source</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Tarifs</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#future" className="text-gray-700 hover:text-blue-600 transition-colors">Future</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <button className="text-left text-gray-700 hover:text-blue-600 transition-colors">Connexion</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left" onClick={() => window.open('#future', '_blank')}>
                  Accéder à l'app
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}