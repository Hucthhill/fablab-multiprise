# 🔌 Fab Lab La Multiprise - Site Web

Site web moderne du Fab Lab La Multiprise à Paron (89), construit avec Next.js 14, TypeScript et Tailwind CSS.

## 🎨 Design

Le site respecte la charte graphique officielle de La Multiprise :
- **Couleur principale** : Bleu #0000FE
- **Gris foncé** : #666666
- **Gris clair** : #999999
- **Fil conducteur** : Icônes de prises électriques (plugs) partout

## ✨ Fonctionnalités

### Pages principales
- 🏠 **Accueil** : Présentation, navigation par profils, événements, équipements
- 👥 **Qui sommes-nous** : Histoire, mission, valeurs, équipe
- 🔧 **Équipements** : Liste détaillée des machines et tarifs
- 📅 **Événements** : Prochains événements et Repair Café
- ❤️ **HumanLab** : Solutions pour le handicap
- 🎓 **Formations** : Catalogue des formations disponibles
- 📞 **Contact** : Formulaire de contact et informations

### Caractéristiques techniques
- ⚡ Next.js 14 avec App Router
- 🎯 TypeScript pour la sécurité du code
- 🎨 Tailwind CSS pour le design
- 📱 100% Responsive
- ♿ Accessible
- 🚀 Optimisé pour le SEO
- 🔌 Thème "plugs" unique

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Cloner ou extraire le projet**
```bash
cd fablab-multiprise
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer en développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir le navigateur**
```
http://localhost:3000
```

## 📦 Déploiement

### Option 1 : Vercel (Recommandé - Gratuit)

Vercel est la plateforme créée par l'équipe Next.js, offrant un déploiement automatique et gratuit.

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Installer Vercel CLI** (optionnel)
```bash
npm install -g vercel
```

3. **Déployer via GitHub** (méthode recommandée)
   - Pushez votre code sur GitHub
   - Connectez votre repo sur Vercel.com
   - Vercel déploie automatiquement à chaque push !

4. **Ou déployer via CLI**
```bash
vercel login
vercel --prod
```

Votre site sera accessible sur : `https://votre-projet.vercel.app`

### Option 2 : Netlify

1. **Créer un compte sur [Netlify](https://netlify.com)**

2. **Installer Netlify CLI**
```bash
npm install -g netlify-cli
```

3. **Build du projet**
```bash
npm run build
```

4. **Déployer**
```bash
netlify deploy --prod
```

### Option 3 : Hébergement classique

Pour un hébergement traditionnel (OVH, O2Switch, etc.) :

1. **Build du projet**
```bash
npm run build
npm run start
```

2. **Utiliser un serveur Node.js** ou configurer un reverse proxy (nginx)

## 🔧 Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env.local` pour les configurations :

```env
# Supabase (si vous ajoutez une base de données)
NEXT_PUBLIC_SUPABASE_URL=votre_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle

# Email (si vous ajoutez l'envoi d'emails)
SMTP_HOST=smtp.exemple.com
SMTP_PORT=587
SMTP_USER=contact@lamultiprise.fr
SMTP_PASS=votre_mot_de_passe
```

### Personnalisation

1. **Couleurs** : Modifiez `tailwind.config.ts`
2. **Contenu** : Éditez les pages dans `/app`
3. **Composants** : Dans `/components`
4. **Styles** : Dans `/app/globals.css`

## 📁 Structure du projet

```
fablab-multiprise/
├── app/                      # Pages Next.js (App Router)
│   ├── about/               # Page À propos
│   ├── contact/             # Page Contact
│   ├── equipments/          # Page Équipements
│   ├── events/              # Page Événements
│   ├── formations/          # Page Formations
│   ├── humanlab/            # Page HumanLab
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/              # Composants réutilisables
│   ├── Header.tsx           # En-tête/Navigation
│   └── Footer.tsx           # Pied de page
├── public/                  # Fichiers statiques
├── tailwind.config.ts       # Config Tailwind
├── tsconfig.json           # Config TypeScript
├── next.config.mjs         # Config Next.js
└── package.json            # Dépendances
```

## 🎯 Prochaines étapes suggérées

### Phase 1 - Immédiate
- [ ] Ajouter de vraies photos du Fab Lab
- [ ] Remplacer le placeholder de la carte par Google Maps
- [ ] Configurer l'envoi d'emails pour le formulaire de contact

### Phase 2 - Court terme
- [ ] Ajouter un système de réservation de machines
- [ ] Créer un blog pour les actualités
- [ ] Galerie de projets réalisés

### Phase 3 - Moyen terme
- [ ] Espace membre avec authentification
- [ ] Système de gestion des adhésions
- [ ] Calendrier de réservation des machines

## 🔌 Intégrations recommandées

### Email
- **Resend** : Service moderne et gratuit jusqu'à 3000 emails/mois
- **SendGrid** : Alternative populaire

### Base de données
- **Supabase** : PostgreSQL gratuit avec authentification intégrée
- Déjà configuré dans le projet !

### Paiements (pour adhésions futures)
- **Stripe** : Solution de paiement moderne
- **Hello Asso** : Spécialisé pour les associations

### Réservations
- **Cal.com** : Open-source et intégrable
- **Calendly** : Solution simple

## 🆘 Support

### Ressources
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

### Contact
- **Email** : fablab@lamultiprise.fr
- **Téléphone** : 06 95 45 85 76
- **Facebook** : [FabLab La Multiprise](https://www.facebook.com/FabLab.La.Multiprise.89)

## 📝 Utilisation avec Claude Code

Ce projet est parfait pour être développé avec Claude Code !

```bash
# Dans votre terminal avec Claude Code
cd fablab-multiprise
npm install
npm run dev

# Claude Code peut vous aider à :
# - Ajouter de nouvelles pages
# - Modifier le design
# - Corriger des bugs
# - Ajouter des fonctionnalités
# - Optimiser les performances
```

## 📄 Licence

Ce projet est créé pour le Fab Lab La Multiprise à Paron.

---

**Développé avec ❤️ et Claude**

Pour toute question technique, n'hésitez pas à contacter le Fab Lab !
