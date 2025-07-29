import { Heart, MapPin, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Ti Kloud Réunion ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Né de la passion pour la technologie et l'amour de notre île, 
              Ti Kloud Réunion est le premier fournisseur cloud spécialement 
              conçu pour les étudiants réunionnais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Made in 974</h3>
                  <p className="text-gray-600">
                    Entreprise locale qui comprend les défis spécifiques 
                    des étudiants de La Réunion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Communauté étudiante</h3>
                  <p className="text-gray-600">
                    Rejoignez une communauté active d'étudiants développeurs 
                    et partagez vos projets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Pédagogique</h3>
                  <p className="text-gray-600">
                    Ressources éducatives, tutoriels et accompagnement 
                    pour vos projets académiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 mr-3" />
                <span className="text-2xl font-bold">La Réunion</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-100">Étudiants actifs</div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-blue-100">Établissements partenaires</div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-blue-100">Disponibilité garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}