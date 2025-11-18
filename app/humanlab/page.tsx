import { Heart, Plug, Target, Users, Award, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function HumanLabPage() {
  const solutions = [
    {
      title: 'Prothèses de main',
      description: 'Prothèses imprimées en 3D pour enfants atteints d\'agénésie',
      cost: '50€',
      vs: '3000€+',
    },
    {
      title: 'Adaptations fauteuil roulant',
      description: 'Freins, accoudoirs et accessoires sur mesure',
      cost: '15-20€',
      vs: '220€',
    },
    {
      title: 'Aides à la mobilité',
      description: 'Sièges électriques et solutions personnalisées',
      cost: 'Variable',
      vs: '5000€+',
    },
    {
      title: 'Outils du quotidien',
      description: 'Adaptations d\'objets et outils personnalisés',
      cost: '10-50€',
      vs: '200€+',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Prise de contact',
      description: 'Contactez-nous pour expliquer votre besoin',
    },
    {
      step: '2',
      title: 'Analyse du besoin',
      description: 'Nous étudions ensemble la meilleure solution',
    },
    {
      step: '3',
      title: 'Conception',
      description: 'Modélisation 3D et validation du prototype',
    },
    {
      step: '4',
      title: 'Fabrication',
      description: 'Production de l\'aide technique personnalisée',
    },
    {
      step: '5',
      title: 'Test & ajustements',
      description: 'Essais et modifications si nécessaire',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Solutions inclusives
                </span>
              </div>
            </div>
            <h1 className="section-title">
              HumanLab <span className="text-red-500">La Multiprise</span>
            </h1>
            <p className="section-subtitle">
              Des solutions techniques innovantes et accessibles pour les personnes en situation de handicap
            </p>
          </div>
        </div>
      </section>

      {/* Mission du HumanLab */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-dark">Notre mission</h2>
                </div>
                <p className="text-lg text-gray-light mb-6 leading-relaxed">
                  Le HumanLab La Multiprise développe des aides techniques personnalisées pour les 
                  personnes en situation de handicap, à des coûts très accessibles.
                </p>
                <p className="text-lg text-gray-light mb-6 leading-relaxed">
                  Grâce à nos outils de fabrication numérique (imprimantes 3D, découpe laser...), 
                  nous pouvons créer des solutions sur mesure qui répondent exactement aux besoins 
                  de chaque personne.
                </p>
                <p className="text-lg text-gray-light leading-relaxed">
                  Notre objectif : casser les prix des aides techniques commerciales souvent 
                  surfacturées, et permettre à chacun d'accéder aux outils dont il a besoin.
                </p>
              </div>
              <div className="space-y-6">
                <div className="card bg-red-50 border-none">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-red-500 mb-2">80-95%</div>
                    <p className="text-xl text-gray-dark mb-2">moins cher</p>
                    <p className="text-gray-light">
                      qu'une solution commerciale équivalente
                    </p>
                  </div>
                </div>
                <div className="card bg-blue-50 border-none">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">100%</div>
                    <p className="text-xl text-gray-dark mb-2">personnalisé</p>
                    <p className="text-gray-light">
                      Chaque aide technique est unique et adaptée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos solutions</h2>
            <p className="section-subtitle">
              Exemples d'aides techniques que nous pouvons créer
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="card group hover:border-primary transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-light mb-4">{solution.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {solution.cost}
                      </div>
                      <div className="text-gray-400 line-through text-sm">
                        vs {solution.vs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Comment ça marche ?</h2>
              <p className="section-subtitle">
                Un processus simple et collaboratif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-light">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                      <Plug className="absolute -top-3 right-0 w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journée Solutions Handicap */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-2">
                    Journée des Solutions face au Handicap
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Mercredi 26 novembre 2025 • 10h - 17h
                  </p>
                  <p className="text-gray-light mb-4">
                    Foyer Saint Bond, Avenue du Stade, Paron (89100)
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-light">
                    Rencontre avec les acteurs institutionnels et associatifs du handicap de l'Yonne
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-light">
                    Démonstrations de solutions techniques innovantes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-light">
                    Informations sur les aides financières et techniques disponibles
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-dark font-semibold mb-2">
                  Entrée libre et gratuite
                </p>
                <p className="text-sm text-gray-light">
                  Ouvert aux personnes en situation de handicap, leurs familles, aidants et professionnels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Nos partenaires</h2>
              <p className="section-subtitle">
                Ensemble pour l'inclusion
              </p>
            </div>

            <div className="card">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Plug className="w-5 h-5 text-primary" />
                  <p className="text-gray-dark">
                    <strong>Omnisports Sensation</strong> - Club handisport partenaire
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Plug className="w-5 h-5 text-primary" />
                  <p className="text-gray-dark">
                    <strong>Établissements médico-sociaux de l'Yonne</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Plug className="w-5 h-5 text-primary" />
                  <p className="text-gray-dark">
                    <strong>MDPH de l'Yonne</strong> - Maison Départementale des Personnes Handicapées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous avez un besoin spécifique ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour discuter de votre projet. Nous étudierons ensemble 
            la meilleure solution technique adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0695458576"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              06 95 45 85 76
            </a>
            <a
              href="mailto:fablab@lamultiprise.fr"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              fablab@lamultiprise.fr
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
