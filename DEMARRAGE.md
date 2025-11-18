# 🚀 Guide de démarrage rapide

## Étape 1 : Installation (5 minutes)

```bash
# Ouvrir un terminal dans le dossier du projet
cd fablab-multiprise

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir http://localhost:3000 dans votre navigateur !

## Étape 2 : Créer votre repo GitHub (5 minutes)

```bash
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Fab Lab La Multiprise"

# Créer le repo sur GitHub et le lier
git remote add origin https://github.com/votre-username/fablab-multiprise.git
git branch -M main
git push -u origin main
```

## Étape 3 : Déployer sur Vercel (2 minutes)

1. Aller sur https://vercel.com
2. Se connecter avec GitHub
3. Cliquer sur "New Project"
4. Sélectionner votre repo `fablab-multiprise`
5. Cliquer sur "Deploy"

C'est tout ! Votre site est en ligne en quelques minutes 🎉

## Étape 4 : Personnalisation

### Ajouter vos photos
Placer vos images dans `/public/images/`

### Modifier le contenu
Éditer les fichiers dans `/app/`
- `page.tsx` = Page d'accueil
- `about/page.tsx` = À propos
- etc.

### Changer les couleurs (si besoin)
Modifier `tailwind.config.ts`

## ⚡ Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Vérifier les erreurs
npm run lint
```

## 🆘 Aide

Si vous rencontrez un problème :
1. Vérifier que Node.js 18+ est installé
2. Supprimer `node_modules` et relancer `npm install`
3. Regarder les erreurs dans le terminal

## 📞 Contact

fablab@lamultiprise.fr
06 95 45 85 76

---

**Bon développement ! 🔌**
