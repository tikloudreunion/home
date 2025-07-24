import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Basé à La Réunion</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Le cloud pensé pour les
            <span className="text-blue-600 block">étudiants réunionnais</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez Ti Kloud Réunion, votre partenaire cloud local. 
            Des solutions abordables, un support en créole et français, 
            et une infrastructure adaptée aux besoins des étudiants de l'île.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" onClick={() => window.open('#future', '_blank')}>
              <span>Accéder à l'app</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
              Découvrir nos offres
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">974</div>
              <div className="text-gray-600">Code postal local</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Données sécurisées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}