import { Plug } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Plug className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Informations légales
                </span>
              </div>
            </div>
            <h1 className="section-title">Mentions légales</h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-dark mb-4">Éditeur du site</h2>
            <p className="text-gray-light mb-6">
              <strong>Association Fab Lab La Multiprise</strong><br />
              La Multiprise 89, enregistrée à la préfecture de l'Yonne<br />
              1 Place de la Fraternité<br />
              89100 PARON<br />
              Téléphone : 06 95 45 85 76<br />
              Email : fablab@lamultiprise.fr<br />
              Site web : www.lamultiprise.fr
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Directeur de publication</h2>
            <p className="text-gray-light mb-6">
              Guillaume GATOUILLAT<br />
              Fabmanager
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Hébergement</h2>
            <p className="text-gray-light mb-6">
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-light mb-6">
              L'ensemble de ce site relève de la législation française et internationale sur le 
              droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont 
              réservés, y compris pour les documents téléchargeables et les représentations 
              iconographiques et photographiques.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Crédits</h2>
            <p className="text-gray-light mb-6">
              Site web développé avec Next.js, React et Tailwind CSS.<br />
              Design respectant la charte graphique officielle du Fab Lab La Multiprise.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Contact</h2>
            <p className="text-gray-light">
              Pour toute question concernant ce site web, vous pouvez nous contacter :<br />
              Email : fablab@lamultiprise.fr<br />
              Téléphone : 06 95 45 85 76
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
