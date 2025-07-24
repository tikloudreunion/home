import React from 'react';
import { Code2, Server, Database, Shield, Cpu, HardDrive } from 'lucide-react';

const technologies = [
  {
    icon: Server,
    name: 'Proxmox VE',
    description: 'Plateforme de virtualisation open source pour la gestion des machines virtuelles et conteneurs.',
    category: 'Virtualisation',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Database,
    name: 'PostgreSQL',
    description: 'Base de données relationnelle avancée, fiable et performante pour vos applications.',
    category: 'Base de données',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Shield,
    name: 'pfSense',
    description: 'Firewall et routeur open source pour sécuriser votre infrastructure cloud.',
    category: 'Sécurité',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Code2,
    name: 'Docker',
    description: 'Conteneurisation pour déployer vos applications rapidement et efficacement.',
    category: 'Conteneurs',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Cpu,
    name: 'KVM',
    description: 'Hyperviseur intégré au noyau Linux pour une virtualisation haute performance.',
    category: 'Hyperviseur',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: HardDrive,
    name: 'ZFS',
    description: 'Système de fichiers avancé avec protection des données et snapshots automatiques.',
    category: 'Stockage',
    color: 'bg-green-100 text-green-600'
  }
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Code2 className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">100% Open Source</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Construit sur des technologies open source
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ti Kloud Réunion s'appuie sur les meilleures technologies open source 
            pour vous offrir une infrastructure fiable, transparente et économique. 
            Découvrez les outils qui alimentent notre cloud.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${tech.color}`}>
                <tech.icon className="h-7 w-7" />
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full mb-2">
                  {tech.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tech.name}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pourquoi l'open source ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparence totale</h4>
                    <p className="text-gray-600">Code source ouvert, pas de boîte noire dans votre infrastructure.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coûts maîtrisés</h4>
                    <p className="text-gray-600">Pas de licences propriétaires, des économies répercutées sur vos tarifs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sécurité renforcée</h4>
                    <p className="text-gray-600">Code audité par la communauté mondiale, mises à jour rapides.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation continue</h4>
                    <p className="text-gray-600">Bénéficiez des dernières innovations de la communauté open source.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Notre engagement</h4>
              <p className="mb-4">
                En tant qu'entreprise réunionnaise, nous croyons aux valeurs de partage 
                et de collaboration de l'open source. C'est pourquoi nous contribuons 
                également aux projets que nous utilisons.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-100 text-sm">Projets soutenus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-100 text-sm">Open source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}