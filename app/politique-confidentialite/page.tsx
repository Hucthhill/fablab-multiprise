import { Plug, Shield } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Shield className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-dark">
                  Vos données sont protégées
                </span>
              </div>
            </div>
            <h1 className="section-title">Politique de confidentialité</h1>
            <p className="section-subtitle">
              Comment nous protégeons et utilisons vos données personnelles
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-dark mb-4">Introduction</h2>
            <p className="text-gray-light mb-6">
              Le Fab Lab La Multiprise accorde une grande importance à la protection de vos 
              données personnelles. Cette politique de confidentialité décrit comment nous 
              collectons, utilisons et protégeons vos informations.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Données collectées</h2>
            <p className="text-gray-light mb-4">
              Lorsque vous utilisez notre site web ou nos services, nous pouvons collecter :
            </p>
            <ul className="list-disc list-inside text-gray-light mb-6 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations relatives à votre adhésion</li>
              <li>Messages envoyés via le formulaire de contact</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Utilisation des données</h2>
            <p className="text-gray-light mb-4">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-gray-light mb-6 space-y-2">
              <li>Répondre à vos demandes d'information</li>
              <li>Gérer votre adhésion au Fab Lab</li>
              <li>Vous informer de nos événements et activités</li>
              <li>Améliorer nos services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Protection des données</h2>
            <p className="text-gray-light mb-6">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos 
              données personnelles contre tout accès, modification, divulgation ou destruction 
              non autorisés.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Vos droits</h2>
            <p className="text-gray-light mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-light mb-6 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Cookies</h2>
            <p className="text-gray-light mb-6">
              Notre site utilise des cookies essentiels au fonctionnement du site. Aucun cookie 
              de tracking ou publicitaire n'est utilisé sans votre consentement.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Conservation des données</h2>
            <p className="text-gray-light mb-6">
              Vos données personnelles sont conservées uniquement le temps nécessaire aux 
              finalités pour lesquelles elles ont été collectées.
            </p>

            <h2 className="text-2xl font-bold text-gray-dark mb-4">Contact</h2>
            <p className="text-gray-light mb-6">
              Pour toute question concernant cette politique de confidentialité ou pour exercer 
              vos droits, vous pouvez nous contacter :
            </p>
            <div className="card bg-blue-50 border-none">
              <div className="flex items-start gap-4">
                <Plug className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-dark">
                    <strong>Fab Lab La Multiprise</strong><br />
                    1 Place de la Fraternité<br />
                    89100 PARON<br />
                    Email : fablab@lamultiprise.fr<br />
                    Téléphone : 06 95 45 85 76
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-dark mb-4 mt-8">Mise à jour</h2>
            <p className="text-gray-light">
              Cette politique de confidentialité peut être mise à jour. La date de dernière 
              modification est indiquée en bas de cette page.<br />
              <em className="text-sm">Dernière mise à jour : Novembre 2025</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
