import Link from 'next/link';
import { 
  Plug, 
  Users, 
  Wrench, 
  Calendar, 
  Heart, 
  Recycle,
  Printer,
  Zap,
  Award,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
        {/* Animated plugs background */}
        <div className="absolute inset-0 opacity-5">
          <Plug className="absolute top-10 left-10 w-20 h-20 text-primary animate-pulse" />
          <Plug className="absolute bottom-20 right-20 w-16 h-16 text-primary animate-pulse delay-100" />
          <Plug className="absolute top-1/2 left-1/4 w-12 h-12 text-primary animate-pulse delay-200" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Plug className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Connectez-vous à l'innovation
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-dark mb-6">
              Fab Lab <span className="text-gradient">La Multiprise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-light mb-8 max-w-2xl mx-auto">
              Espace collaboratif de fabrication numérique à Paron. 
              Donnez vie à vos projets avec nos machines et notre expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 text-lg electric-pulse">
                <Plug className="w-5 h-5" />
                Rejoindre le Fab Lab
              </Link>
              <Link href="/equipments" className="btn-secondary flex items-center justify-center gap-2 text-lg">
                <Wrench className="w-5 h-5" />
                Découvrir nos équipements
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { number: '180m²', label: "d'espace" },
                { number: '10+', label: 'machines' },
                { number: '50+', label: 'projets/an' },
                { number: '100%', label: 'accessible' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Je viens en tant que... */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Je viens en tant que...</h2>
            <p className="section-subtitle">
              Découvrez comment le Fab Lab peut vous accompagner selon votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Particulier',
                description: 'Réalisez vos projets personnels avec nos machines et notre accompagnement',
                link: '/particuliers',
                color: 'blue',
              },
              {
                icon: Award,
                title: 'Étudiant',
                description: 'Bénéficiez de tarifs adaptés pour vos projets scolaires et personnels',
                link: '/etudiants',
                color: 'green',
              },
              {
                icon: Wrench,
                title: 'Professionnel',
                description: 'Prototypez rapidement vos idées et développez votre activité',
                link: '/professionnels',
                color: 'purple',
              },
              {
                icon: Heart,
                title: 'Association',
                description: 'Collaborez avec nous pour des projets solidaires et innovants',
                link: '/associations',
                color: 'red',
              },
              {
                icon: Users,
                title: 'Personne en situation de handicap',
                description: 'Découvrez nos solutions personnalisées via notre HumanLab',
                link: '/humanlab',
                color: 'orange',
              },
              {
                icon: Recycle,
                title: 'Repair Café',
                description: 'Participez à nos ateliers de réparation et prolongez la vie des objets',
                link: '/repair-cafe',
                color: 'teal',
              },
            ].map((profile, index) => (
              <Link
                key={index}
                href={profile.link}
                className="card group hover:border-primary transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <profile.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Plug className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                    {profile.title}
                  </h3>
                  <p className="text-gray-light text-sm mb-4 flex-grow">
                    {profile.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nos équipements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos équipements</h2>
            <p className="section-subtitle">
              Des machines numériques et traditionnelles pour tous vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Imprimantes 3D', icon: Printer, count: '5 machines' },
              { name: 'Découpe Laser', icon: Zap, count: '2 machines' },
              { name: 'Brodeuse numérique', icon: Wrench, count: '1 machine' },
              { name: 'Électronique', icon: Plug, count: 'Atelier complet' },
            ].map((equipment, index) => (
              <div
                key={index}
                className="card text-center group hover:border-primary transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <equipment.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">
                  {equipment.name}
                </h3>
                <p className="text-sm text-gray-light">{equipment.count}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/equipments" className="btn-primary inline-flex items-center gap-2">
              Voir tous les équipements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Prochains événements</h2>
            <p className="section-subtitle">
              Rejoignez-nous lors de nos ateliers et journées découvertes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                date: 'Sam. 30 Nov',
                title: 'Repair Café',
                description: 'Atelier de réparation collaboratif',
                time: '9h - 17h',
              },
              {
                date: 'Mer. 4 Déc',
                title: 'Portes ouvertes',
                description: 'Découverte du Fab Lab et démonstrations',
                time: '14h - 18h',
              },
              {
                date: 'Sam. 14 Déc',
                title: 'Formation Impression 3D',
                description: 'Initiation à la modélisation 3D',
                time: '10h - 16h',
              },
            ].map((event, index) => (
              <div key={index} className="card group hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg text-center min-w-[80px]">
                    <div className="text-xs font-medium">{event.date.split(' ')[0]}</div>
                    <div className="text-lg font-bold">{event.date.split(' ')[1]}</div>
                    <div className="text-xs">{event.date.split(' ')[2]}</div>
                  </div>
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-light text-sm mb-3">{event.description}</p>
                <div className="flex items-center text-sm text-gray-light">
                  <Zap className="w-4 h-4 mr-1 text-primary" />
                  {event.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/events" className="btn-secondary inline-flex items-center gap-2">
              Voir tous les événements
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Plug className="absolute top-10 right-10 w-32 h-32 animate-pulse" />
          <Plug className="absolute bottom-10 left-10 w-24 h-24 animate-pulse delay-100" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à donner vie à vos idées ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez notre communauté de makers et bénéficiez de nos équipements 
            et de notre expertise pour concrétiser vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Plug className="w-5 h-5" />
              Nous contacter
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              En savoir plus
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
