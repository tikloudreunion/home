import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Étudiant',
    price: '5',
    period: '/mois',
    description: 'Parfait pour débuter et apprendre',
    features: [
      '1 vCPU, 1 GB RAM',
      '20 GB SSD',
      '1 TB de bande passante',
      'Support communautaire',
      'Templates de base',
      'SSL gratuit'
    ],
    popular: false
  },
  {
    name: 'Projet',
    price: '15',
    period: '/mois',
    description: 'Idéal pour vos projets étudiants',
    features: [
      '2 vCPU, 4 GB RAM',
      '80 GB SSD',
      '3 TB de bande passante',
      'Support prioritaire',
      'Tous les templates',
      'SSL gratuit',
      'Sauvegardes automatiques',
      'Monitoring avancé'
    ],
    popular: true
  },
  {
    name: 'Stage/Alternance',
    price: '35',
    period: '/mois',
    description: 'Pour vos projets professionnels',
    features: [
      '4 vCPU, 8 GB RAM',
      '160 GB SSD',
      'Bande passante illimitée',
      'Support dédié 24/7',
      'Templates premium',
      'SSL gratuit',
      'Sauvegardes quotidiennes',
      'CDN inclus',
      'Load balancer',
      'Environnements multiples'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarifs Étudiants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix adaptés aux budgets étudiants avec des remises spéciales 
            pour les établissements de La Réunion.
          </p>
          <div className="mt-6 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">-50% avec votre carte étudiant réunionnaise</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Le plus populaire
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choisir ce plan
                </button>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Besoin d'une solution sur mesure ? Contactez-nous pour un devis personnalisé.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Demander un devis →
          </button>
        </div>
      </div>
    </section>
  );
}