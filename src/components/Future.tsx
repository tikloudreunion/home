import React from 'react';
import { Rocket, Code, Database, Globe, Zap, Shield } from 'lucide-react';

export default function Future() {
  return (
    <section id="future" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Bientôt disponible</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            L'application Ti Kloud arrive !
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous travaillons dur pour vous offrir la meilleure expérience cloud. 
            Notre application sera bientôt prête pour révolutionner votre façon 
            de gérer vos projets étudiants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Interface Intuitive
            </h3>
            <p className="text-gray-600">
              Dashboard moderne et facile à utiliser, conçu spécialement pour les étudiants.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Gestion Simplifiée
            </h3>
            <p className="text-gray-600">
              Créez, gérez et surveillez vos ressources cloud en quelques clics.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Déploiement Rapide
            </h3>
            <p className="text-gray-600">
              Déployez vos applications en un clic avec nos templates pré-configurés.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Performance Optimale
            </h3>
            <p className="text-gray-600">
              Infrastructure haute performance optimisée pour l'Océan Indien.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Sécurité Renforcée
            </h3>
            <p className="text-gray-600">
              Vos données sont protégées avec les dernières technologies de sécurité.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Support 24/7
            </h3>
            <p className="text-gray-600">
              Équipe de support dédiée disponible en français et créole réunionnais.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Soyez les premiers informés !
          </h3>
          <p className="text-gray-600 mb-6">
            Inscrivez-vous à notre liste d'attente pour être notifié dès le lancement 
            et bénéficier d'un accès prioritaire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="votre.email@etudiant.univ-reunion.fr"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
              Rejoindre la liste
            </button>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Gratuit pendant 3 mois</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Accès prioritaire</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Support premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}