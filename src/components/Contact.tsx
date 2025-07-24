import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Besoin d'aide ? Notre équipe est là pour vous accompagner 
            dans votre parcours cloud.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Parlons de votre projet
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">contact@tikloud-reunion.re</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-gray-600">+262 692 XX XX XX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-gray-600">Saint-Denis, La Réunion 974</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Chat en direct</div>
                  <div className="text-gray-600">Disponible 24/7 sur notre site</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Support en créole réunionnais
              </h4>
              <p className="text-gray-600">
                Notre équipe parle votre langue ! N'hésitez pas à nous contacter 
                en créole pour un support plus personnalisé.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email étudiant
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="votre.email@etudiant.univ-reunion.fr"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Établissement
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Université de La Réunion</option>
                  <option>IUT de La Réunion</option>
                  <option>Lycée Leconte de Lisle</option>
                  <option>Lycée Roland Garros</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}