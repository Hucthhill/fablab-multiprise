import { Plug, Target, Users, Heart, Lightbulb, Award } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
                  Notre histoire
                </span>
              </div>
            </div>
            <h1 className="section-title">Qui sommes-nous ?</h1>
            <p className="section-subtitle">
              Un espace collaboratif au service de l'innovation et du partage
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-gray-dark">Notre mission</h2>
            </div>
            <p className="text-lg text-gray-light mb-6 leading-relaxed">
              Le Fab Lab La Multiprise est un espace collaboratif de 180m² dédié à la fabrication 
              numérique et au partage de compétences, situé à Paron dans l'Yonne (89).
            </p>
            <p className="text-lg text-gray-light mb-6 leading-relaxed">
              Notre mission est de démocratiser l'accès aux outils de fabrication numérique et de 
              créer un lieu d'apprentissage, d'expérimentation et d'innovation accessible à tous.
            </p>
            <p className="text-lg text-gray-light leading-relaxed">
              Nous croyons fermement que chacun peut devenir créateur, inventeur et maker, 
              quel que soit son âge, son parcours ou ses capacités.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-subtitle">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Nous favorisons le partage de connaissances et l\'entraide entre membres.',
              },
              {
                icon: Heart,
                title: 'Solidarité',
                description: 'Nous développons des solutions innovantes pour les personnes en situation de handicap.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Nous encourageons la créativité et l\'expérimentation sans crainte de l\'échec.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Nous mettons à disposition des équipements professionnels et un accompagnement de qualité.',
              },
              {
                icon: Plug,
                title: 'Accessibilité',
                description: 'Nous rendons la fabrication numérique accessible à tous, sans prérequis technique.',
              },
              {
                icon: Target,
                title: 'Durabilité',
                description: 'Nous promouvons l\'économie circulaire et la réparation via nos Repair Cafés.',
              },
            ].map((value, index) => (
              <div key={index} className="card text-center group hover:border-primary transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre HumanLab */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-dark">Notre HumanLab</h2>
                </div>
                <p className="text-lg text-gray-light mb-6 leading-relaxed">
                  Le HumanLab La Multiprise est un projet qui nous tient particulièrement à cœur. 
                  Nous développons des solutions techniques personnalisées pour les personnes en 
                  situation de handicap.
                </p>
                <p className="text-lg text-gray-light mb-6 leading-relaxed">
                  Grâce à nos outils de fabrication numérique, nous pouvons créer des aides techniques 
                  sur mesure à des coûts très accessibles : prothèses, adaptations de fauteuils roulants, 
                  outils du quotidien adaptés...
                </p>
                <Link href="/humanlab" className="btn-primary inline-flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Découvrir le HumanLab
                </Link>
              </div>
              <div className="card bg-blue-50 border-none">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold text-primary mb-4">75€</div>
                  <p className="text-xl text-gray-dark mb-2">au lieu de 6000€</p>
                  <p className="text-gray-light">
                    Prix moyen d'une aide technique créée dans notre HumanLab, 
                    contre plusieurs milliers d'euros pour une solution commerciale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">L'équipe</h2>
            <p className="section-subtitle">
              Des passionnés au service de vos projets
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-2">Guillaume GATOUILLAT</h3>
              <p className="text-primary font-semibold mb-4">Fabmanager</p>
              <p className="text-gray-light max-w-2xl mx-auto">
                Guillaume accompagne les adhérents dans leurs projets, de l'idée au prototype. 
                Avec son expertise technique et sa passion pour l'innovation sociale, il assure 
                la bonne marche du Fab Lab et le développement du HumanLab.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <a href="tel:0695458576" className="btn-secondary inline-flex items-center gap-2">
                  <Plug className="w-5 h-5" />
                  06 95 45 85 76
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez notre communauté !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Que vous soyez débutant ou expert, venez partager votre passion pour 
            la fabrication numérique et l'innovation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            <Plug className="w-5 h-5" />
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  );
}
