import { GraduationCap, Plug, Printer, Zap, Scissors, Cpu, Clock, Users, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function FormationsPage() {
  const formations = [
    {
      title: 'Impression 3D',
      icon: Printer,
      level: 'Débutant',
      duration: '6 heures',
      participants: '8 max',
      price: 'Inclus dans l\'adhésion',
      description: 'Apprenez les bases de la modélisation 3D et l\'utilisation des imprimantes',
      content: [
        'Introduction à l\'impression 3D',
        'Modélisation avec TinkerCAD',
        'Préparation des fichiers (slicing)',
        'Utilisation des imprimantes',
        'Post-traitement et finition',
      ],
      prérequis: 'Aucun',
      color: 'blue',
    },
    {
      title: 'Découpe Laser',
      icon: Zap,
      level: 'Débutant',
      duration: '4 heures',
      participants: '6 max',
      price: 'Inclus dans l\'adhésion',
      description: 'Maîtrisez la découpe et gravure laser sur différents matériaux',
      content: [
        'Fonctionnement de la découpe laser',
        'Création de fichiers vectoriels',
        'Paramètres de découpe et gravure',
        'Utilisation de la machine',
        'Sécurité et entretien',
      ],
      prérequis: 'Aucun',
      color: 'yellow',
    },
    {
      title: 'Brodeuse Numérique',
      icon: Scissors,
      level: 'Débutant',
      duration: '3 heures',
      participants: '6 max',
      price: 'Inclus dans l\'adhésion',
      description: 'Créez des broderies personnalisées sur textile',
      content: [
        'Introduction à la broderie numérique',
        'Création et import de motifs',
        'Préparation du textile',
        'Utilisation de la brodeuse',
        'Finitions et astuces',
      ],
      prérequis: 'Aucun',
      color: 'pink',
    },
    {
      title: 'Électronique & Arduino',
      icon: Cpu,
      level: 'Intermédiaire',
      duration: '8 heures',
      participants: '8 max',
      price: 'Inclus dans l\'adhésion',
      description: 'Initiation à l\'électronique et à la programmation Arduino',
      content: [
        'Bases de l\'électronique',
        'Découverte d\'Arduino',
        'Programmation simple',
        'Montages et capteurs',
        'Projet personnel guidé',
      ],
      prérequis: 'Bases informatiques',
      color: 'green',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Adhésion',
      description: 'Devenez membre du Fab Lab',
    },
    {
      step: '2',
      title: 'Tutoriels en ligne',
      description: 'Suivez les tutoriels de préparation',
    },
    {
      step: '3',
      title: 'Formation pratique',
      description: 'Session en présentiel au Fab Lab',
    },
    {
      step: '4',
      title: 'Autonomie',
      description: 'Accès libre aux machines',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <GraduationCap className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Nos formations
                </span>
              </div>
            </div>
            <h1 className="section-title">Formations</h1>
            <p className="section-subtitle">
              Apprenez à maîtriser nos machines avec des formations complètes et pratiques
            </p>
          </div>
        </div>
      </section>

      {/* Liste des formations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className="card group hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <formation.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                        {formation.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {formation.level}
                        </span>
                        <span className="bg-gray-100 text-gray-dark px-3 py-1 rounded-full text-xs font-semibold">
                          {formation.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-light mb-6">{formation.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-light">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Durée : {formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-light">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Groupe : {formation.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-light">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Prérequis : {formation.prérequis}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-gray-dark mb-3 text-sm">Programme :</h4>
                    <ul className="space-y-2">
                      {formation.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-light">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-primary">
                      {formation.price}
                    </div>
                    <Link href="/contact" className="btn-secondary text-sm py-2 px-4">
                      S'inscrire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus de formation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Comment se déroule une formation ?</h2>
              <p className="section-subtitle">
                Un parcours simple et progressif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

      {/* Modalités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Modalités pratiques</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">Petits groupes</h3>
                <p className="text-gray-light text-sm">
                  Maximum 8 personnes pour un apprentissage optimal
                </p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">Pratique</h3>
                <p className="text-gray-light text-sm">
                  80% de pratique avec les machines réelles
                </p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">Validation</h3>
                <p className="text-gray-light text-sm">
                  Accès autonome après validation des acquis
                </p>
              </div>
            </div>

            <div className="card mt-12 bg-blue-50 border-none">
              <div className="flex items-start gap-4">
                <Plug className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-dark mb-2">Bon à savoir</h3>
                  <ul className="space-y-2 text-sm text-gray-light">
                    <li>• Toutes les formations sont incluses dans l'adhésion annuelle (30€)</li>
                    <li>• Les tutoriels en ligne sont accessibles gratuitement avant la formation</li>
                    <li>• Possibilité de refaire une formation si besoin</li>
                    <li>• Support pédagogique fourni</li>
                    <li>• Accès Discord pour questions entre membres</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à vous former ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscrivez-vous dès maintenant et commencez votre apprentissage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              S'inscrire aux formations
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              <Plug className="w-5 h-5" />
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
