import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  popular: boolean;
  cpu: number;
  ram: number;
  storage: number;
}

const plans: PricingPlan[] = [
  {
    name: 'TekTek',
    price: 5,
    period: 'monthly',
    description: 'Parfait pour débuter et apprendre',
    cpu: 1,
    ram: 1,
    storage: 20,
    popular: false
  },
  {
    name: 'Cobra',
    price: 10,
    period: 'monthly',
    description: 'Idéal pour vos projets étudiants',
    cpu: 2,
    ram: 4,
    storage: 50,
    popular: true
  },
  {
    name: 'AER',
    price: 20,
    period: 'monthly',
    description: 'Pour vos projets professionnels',
    cpu: 4,
    ram: 8,
    storage: 80,
    popular: false
  }
];

export default function Pricing(): JSX.Element {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: PricingPlan, index: number) => (
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
                  <span className="text-gray-600">/{plan.period}</span>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                  Choisir ce plan
                </button>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{plan.cpu} vCPU, {plan.ram} GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{plan.storage} GB SSD</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bande passante illimitée</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">SSL gratuit</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Support communautaire</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Templates de base</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}