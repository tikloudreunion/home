import React from 'react';
import { Server, Database, Shield, Zap, Globe, Users } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Serveurs Virtuels',
    description: 'Machines virtuelles performantes avec SSD, parfaites pour vos projets étudiants et stages.',
    features: ['CPU haute performance', 'Stockage SSD rapide', 'Bande passante illimitée']
  },
  {
    icon: Database,
    title: 'Bases de Données',
    description: 'Solutions de bases de données managées pour vos applications web et mobiles.',
    features: ['MySQL, PostgreSQL', 'Sauvegardes automatiques', 'Haute disponibilité']
  },
  {
    icon: Shield,
    title: 'Sécurité Avancée',
    description: 'Protection complète avec firewall, SSL gratuit et monitoring 24/7.',
    features: ['Certificats SSL gratuits', 'Firewall configuré', 'Monitoring temps réel']
  },
  {
    icon: Zap,
    title: 'Déploiement Rapide',
    description: 'Lancez vos projets en quelques clics avec nos templates pré-configurés.',
    features: ['Templates prêts à l\'emploi', 'Déploiement en 1 clic', 'Git integration']
  },
  {
    icon: Globe,
    title: 'CDN Local',
    description: 'Réseau de diffusion de contenu optimisé pour l\'Océan Indien.',
    features: ['Latence réduite', 'Cache intelligent', 'Optimisation images']
  },
  {
    icon: Users,
    title: 'Support Étudiant',
    description: 'Équipe dédiée aux étudiants, support en français et créole réunionnais.',
    features: ['Support multilingue', 'Tutoriels dédiés', 'Communauté étudiante']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions cloud complètes et abordables, spécialement conçues 
            pour accompagner les étudiants dans leurs projets académiques et professionnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}