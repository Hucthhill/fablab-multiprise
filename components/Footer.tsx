'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Plug, MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plug className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-dark">LA MULTIPRISE</h3>
            </div>
            <p className="text-gray-light text-sm mb-4">
              Espace collaboratif de partage de compétences et de matériels à Paron. 
              Fabrication numérique, solutions handicap, économie circulaire.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/FabLab.La.Multiprise.89"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
              <Plug className="w-5 h-5 text-primary" />
              Liens rapides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-light hover:text-primary transition-colors text-sm">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/equipments" className="text-gray-light hover:text-primary transition-colors text-sm">
                  Nos équipements
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-light hover:text-primary transition-colors text-sm">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/humanlab" className="text-gray-light hover:text-primary transition-colors text-sm">
                  HumanLab
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-light hover:text-primary transition-colors text-sm">
                  Formations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
              <Plug className="w-5 h-5 text-primary" />
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-light">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1 Place de la Fraternité<br />89100 PARON</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-light">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:0695458576" className="hover:text-primary transition-colors">
                  06 95 45 85 76
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-light">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:fablab@lamultiprise.fr" className="hover:text-primary transition-colors">
                  fablab@lamultiprise.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horaires
            </h4>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>
                <span className="font-medium">Jeudi</span>
                <br />14h - 20h
              </li>
              <li>
                <span className="font-medium">3ème samedi du mois</span>
                <br />14h - 18h
              </li>
              <li>
                <span className="font-medium">Lun, Mar, Ven</span>
                <br />Sur rendez-vous
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="btn-secondary text-sm py-2 px-4 inline-block">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-center text-lg font-bold text-gray-dark mb-6">Nos partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/Fondation_Orange_Couleur-noir-Droite_0.png"
                alt="Fondation Orange"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/logo-ville-paron.png"
                alt="Ville de Paron"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/logo-footerRFFlabs.png"
                alt="Réseau des FabLabs français"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/logo-campus-fablab.png"
                alt="Campus EPNAK"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/logo-epnak-couleur.png"
                alt="EPNAK"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/prefet_de_la_region_bourgogne-franche-comte.png"
                alt="Préfet Bourgogne Franche-Comté"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="h-16 w-32 relative">
              <Image
                src="/images/logos/partenaires/REGION BFC logo fond blanc CMJN.jpg"
                alt="Région Bourgogne Franche-Comté"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-light">
            <p>© {currentYear} Fab Lab La Multiprise. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
