import { Calendar, Clock, MapPin, Users, Wrench, Recycle, Heart, Plug, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: {
        day: '30',
        month: 'Nov',
        year: '2025',
      },
      title: 'Repair Café',
      description: 'Venez réparer vos objets du quotidien avec l\'aide de nos experts bénévoles. Prolongez la vie de vos appareils et apprenez à les réparer.',
      time: '9h00 - 17h00',
      location: 'Fab Lab La Multiprise',
      capacity: '50 personnes',
      category: 'repair',
      icon: Recycle,
      color: 'green',
    },
    {
      date: {
        day: '04',
        month: 'Déc',
        year: '2025',
      },
      title: 'Portes Ouvertes',
      description: 'Découverte du Fab Lab, démonstrations des machines, rencontre avec l\'équipe. Entrée libre et gratuite.',
      time: '14h00 - 18h00',
      location: 'Fab Lab La Multiprise',
      capacity: 'Accès libre',
      category: 'open-house',
      icon: Users,
      color: 'blue',
    },
    {
      date: {
        day: '14',
        month: 'Déc',
        year: '2025',
      },
      title: 'Formation Impression 3D',
      description: 'Initiation complète à l\'impression 3D : modélisation, préparation fichiers, utilisation des imprimantes.',
      time: '10h00 - 16h00',
      location: 'Fab Lab La Multiprise',
      capacity: '8 places',
      category: 'formation',
      icon: Wrench,
      color: 'purple',
    },
    {
      date: {
        day: '18',
        month: 'Déc',
        year: '2025',
      },
      title: 'Atelier Déco de Noël',
      description: 'Créez vos décorations de Noël avec la découpe laser et l\'impression 3D. Atelier familial.',
      time: '14h00 - 17h00',
      location: 'Fab Lab La Multiprise',
      capacity: '12 places',
      category: 'workshop',
      icon: Wrench,
      color: 'red',
    },
  ];

  const recurringEvents = [
    {
      title: 'Repair Café Mensuel',
      frequency: 'Dernier samedi du mois',
      description: 'Atelier de réparation collaboratif',
      icon: Recycle,
    },
    {
      title: 'Portes Ouvertes',
      frequency: 'Premier mercredi du mois',
      description: 'Découverte du Fab Lab',
      icon: Users,
    },
    {
      title: 'Formations',
      frequency: 'Sur inscription',
      description: 'Formations aux machines',
      icon: Wrench,
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
                <Calendar className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Nos événements
                </span>
              </div>
            </div>
            <h1 className="section-title">Événements à venir</h1>
            <p className="section-subtitle">
              Ateliers, formations et rencontres au Fab Lab
            </p>
          </div>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-8 flex items-center gap-3">
              <Plug className="w-8 h-8 text-primary" />
              Prochains événements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="card group hover:border-primary transition-all"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-lg px-4 py-3 text-center min-w-[80px]">
                        <div className="text-3xl font-bold">{event.date.day}</div>
                        <div className="text-sm">{event.date.month}</div>
                        <div className="text-xs opacity-80">{event.date.year}</div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <event.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-gray-dark group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-light text-sm mb-4">{event.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-light">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          {event.capacity}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="/contact"
                          className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          S'inscrire
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Événements récurrents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Événements réguliers</h2>
              <p className="section-subtitle">
                Des rendez-vous à ne pas manquer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recurringEvents.map((event, index) => (
                <div key={index} className="card text-center group hover:border-primary transition-all">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <event.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{event.frequency}</p>
                  <p className="text-gray-light text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Événement spécial HumanLab */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-red-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-2">
                    Journée des Solutions face au Handicap
                  </h2>
                  <p className="text-xl text-red-600 font-semibold mb-4">
                    Mercredi 26 novembre 2025 • 10h - 17h
                  </p>
                </div>
              </div>

              <p className="text-gray-light mb-6">
                Le Fablab & HumanLab La Multiprise organisent la 2ème journée des solutions 
                face au handicap au Foyer Saint Bond à Paron. Cet événement permet de réunir 
                des acteurs institutionnels et associatifs du handicap de l'Yonne et de faire 
                connaître les solutions techniques disponibles localement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-dark mb-2">Pour les professionnels</h4>
                  <p className="text-sm text-gray-light">
                    Échanges inter-professionnels et exposition des activités
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-dark mb-2">Pour le public</h4>
                  <p className="text-sm text-gray-light">
                    Découverte des solutions techniques et aides disponibles
                  </p>
                </div>
              </div>

              <Link href="/humanlab" className="btn-primary inline-flex items-center gap-2">
                <Heart className="w-5 h-5" />
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Participez à nos événements !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscrivez-vous dès maintenant à nos ateliers et formations
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            S'inscrire à un événement
          </Link>
        </div>
      </section>
    </div>
  );
}
