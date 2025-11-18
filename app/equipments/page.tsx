import { Plug, Printer, Zap, Scissors, Cpu, Wrench, Box, Paintbrush } from 'lucide-react';
import Link from 'next/link';

export default function EquipmentsPage() {
  const equipments = [
    {
      category: 'Impression 3D',
      icon: Printer,
      items: [
        {
          name: 'Imprimantes 3D FDM',
          description: 'Plusieurs imprimantes pour prototypage rapide en PLA, ABS, PETG',
          specs: 'Volume max: 300x300x400mm',
        },
        {
          name: 'Imprimante résine',
          description: 'Impression haute résolution pour détails fins',
          specs: 'Résolution: 50 microns',
        },
      ],
    },
    {
      category: 'Découpe & Gravure',
      icon: Zap,
      items: [
        {
          name: 'Découpeuse laser CO2',
          description: 'Découpe et gravure bois, acrylique, carton, cuir',
          specs: 'Surface: 600x400mm, Puissance: 60W',
        },
        {
          name: 'Découpeuse vinyle',
          description: 'Découpe de vinyle adhésif pour stickers et marquage',
          specs: 'Largeur max: 600mm',
        },
      ],
    },
    {
      category: 'Textile',
      icon: Scissors,
      items: [
        {
          name: 'Brodeuse numérique',
          description: 'Broderie personnalisée sur textile',
          specs: 'Zone de broderie: 200x300mm',
        },
        {
          name: 'Presse à chaud',
          description: 'Transfert sur textile et objets',
          specs: 'Surface: 400x500mm',
        },
        {
          name: 'Machines à coudre',
          description: 'Machines électriques pour tous projets textiles',
          specs: 'Plusieurs modèles disponibles',
        },
      ],
    },
    {
      category: 'Électronique',
      icon: Cpu,
      items: [
        {
          name: 'Stations de soudure',
          description: 'Soudage et dessoudage de composants',
          specs: 'Température réglable',
        },
        {
          name: 'Oscilloscope',
          description: 'Mesure et analyse de signaux électriques',
          specs: 'Bande passante: 100MHz',
        },
        {
          name: 'Cartes de développement',
          description: 'Arduino, Raspberry Pi, ESP32 disponibles',
          specs: 'Stock de composants',
        },
      ],
    },
    {
      category: 'Outillage classique',
      icon: Wrench,
      items: [
        {
          name: 'Perceuse à colonne',
          description: 'Perçage précis de tous matériaux',
          specs: 'Capacité: 16mm',
        },
        {
          name: 'Scie à chantourner',
          description: 'Découpe de formes complexes dans le bois',
          specs: 'Épaisseur max: 50mm',
        },
        {
          name: 'Outillage manuel',
          description: 'Ensemble complet d\'outils à main',
          specs: 'Perceuses, scies, limes, etc.',
        },
      ],
    },
    {
      category: 'Finition',
      icon: Paintbrush,
      items: [
        {
          name: 'Cabine de peinture',
          description: 'Espace ventilé pour peinture et vernissage',
          specs: 'Extraction des vapeurs',
        },
        {
          name: 'Ponceuses',
          description: 'Ponçage orbital et bande',
          specs: 'Plusieurs modèles',
        },
      ],
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
                <Plug className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Nos machines
                </span>
              </div>
            </div>
            <h1 className="section-title">Nos équipements</h1>
            <p className="section-subtitle">
              Plus de 10 machines professionnelles pour donner vie à vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Liste des équipements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {equipments.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-dark">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="card group hover:border-primary transition-all">
                      <div className="flex items-start gap-3 mb-4">
                        <Plug className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform" />
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-gray-light text-sm mb-3">{item.description}</p>
                          <div className="bg-blue-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-gray-dark font-medium">{item.specs}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accès aux machines */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Comment accéder aux machines ?</h2>
              <p className="section-subtitle">Un processus simple en 3 étapes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Adhésion',
                  description: 'Devenez membre du Fab Lab avec une cotisation annuelle',
                },
                {
                  step: '2',
                  title: 'Formation',
                  description: 'Suivez la formation obligatoire sur la machine souhaitée',
                },
                {
                  step: '3',
                  title: 'Autonomie',
                  description: 'Utilisez les machines en autonomie ou avec accompagnement',
                },
              ].map((item, index) => (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">{item.title}</h3>
                  <p className="text-gray-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Tarifs</h2>
              <p className="section-subtitle">Des prix accessibles à tous</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Adhésion annuelle',
                  price: '30€',
                  description: 'Accès à toutes les machines après formation',
                  features: ['Formations incluses', 'Accompagnement', 'Espace de travail'],
                },
                {
                  name: 'Tarif étudiant',
                  price: '15€',
                  description: 'Tarif réduit pour les étudiants',
                  features: ['Sur présentation carte étudiant', 'Tous les avantages', 'Support pédagogique'],
                  popular: true,
                },
                {
                  name: 'Consommables',
                  price: 'Variable',
                  description: 'Matériaux selon utilisation',
                  features: ['PLA 3D: 2€/10g', 'Découpe laser: 5€/h', 'Vinyle: prix au m²'],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`card ${plan.popular ? 'border-2 border-primary' : ''} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <p className="text-gray-light text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-light text-sm">
                        <Plug className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à utiliser nos machines ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour planifier une visite et découvrir nos équipements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              <Plug className="w-5 h-5" />
              Prendre rendez-vous
            </Link>
            <Link
              href="/formations"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              <Box className="w-5 h-5" />
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
