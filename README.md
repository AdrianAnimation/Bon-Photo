# Bon Photo - README

Bienvenue sur Bon Photo, une application que j'ai conçue pour offrir une plateforme intuitive et conviviale aux photographes et aux amateurs de photographie. Voici une vue d'ensemble des fonctionnalités principales et de la logique derrière le projet.

## Description générale

Bon Photo est une plateforme qui permet aux photographes de publier et de gérer leurs photos tout en offrant aux utilisateurs la possibilité d’interagir avec ces contenus par le biais de likes et de commentaires. Avec des fonctionnalités sociales et une gestion basée sur les rôles (photographes, utilisateurs, administrateurs), l’application répond à des besoins variés.

---

## Fonctionnalités principales

### 1. Pour les photographes

En tant que photographe, voici ce que je peux faire :

- **Créer un compte photographe :** Lors de l’inscription, je suis automatiquement assigné à ce rôle, ce qui me donne accès à des fonctionnalités exclusives.
- **Gérer mes photos :**
  - Ajouter des photos avec un titre, une description, un texte alternatif (alt text) et une catégorie.
  - Utiliser des fonctions CRUD :
    - Créer : Publier de nouvelles photos.
    - Lire : Voir mes propres photos et celles des autres.
    - Mettre à jour : Modifier les titres, descriptions, etc.
    - Supprimer : Effacer mes photos.
- **Suivre mes statistiques :**
  - Visualiser des données comme le nombre de vues, de likes et de commentaires via un tableau de bord.
- **Interagir avec les photos :** Liker et commenter mes propres photos ou celles des autres.

---

### 2. Pour les utilisateurs classiques

En tant qu’utilisateur, voici mes possibilités :

- **Créer un compte utilisateur :** Mon rôle par défaut est « utilisateur ».
- **Explorer les photos et les profils des photographes :**
  - Parcourir les photos publiées.
  - Accéder aux informations publiques des photographes.
- **Interagir avec les photos :**
  - Liker et retirer mes likes.
  - Ajouter, modifier et supprimer mes propres commentaires.
  - Répondre à des commentaires pour engager des discussions.

---

### 3. Fonctionnalités communes (photographes et utilisateurs)

Ces fonctionnalités sont partagées par tous :

- **Gestion de profil :** Mettre à jour mon nom, mes informations et mon avatar.
- **Historique d’activité :** Consulter mes interactions passées (photos publiées, likes et commentaires).
- **Connexion sécurisée :** Me connecter et rester authentifié tant que je navigue dans l’application.
- **Gestion des rôles :** Les actions accessibles dépendent de mon rôle.

---

### 4. Fonctionnalités sociales

L’aspect social de l’application inclut :

- **Système de commentaires avec réponses :** Interagir avec les autres utilisateurs via des discussions structurées.
- **Système de likes :** Montrer mon intérêt pour des photos.
- **Fil d’activité :** Accéder à mon historique d’interactions.
- **Exploration :** Découvrir des photos par catégories ou grâce à une barre de recherche.

---

### 5. Pour les administrateurs

En tant qu’administrateur, je bénéficie de privilèges supplémentaires :

- **Gestion des rôles :** Modifier les rôles des utilisateurs (exemple : promouvoir quelqu’un en photographe).
- **Modération :** Supprimer les commentaires offensants ou les contenus inappropriés.

---

## Mesures de sécurité

Pour assurer la sécurité de l’application et des utilisateurs, j’ai mis en place :

- **Chiffrement des mots de passe :** Stockage sécurisé grâce à bcrypt.
- **Authentification par sessions :** Les utilisateurs restent authentifiés de manière sécurisée.
- **Contrôle des rôles :** Accès aux fonctions basé sur le rôle assigné.
- **Validation des entrées :** Contrôle des données envoyées par les utilisateurs pour éviter les erreurs ou abus.
- **Restrictions sur les fichiers :** Gestion des types et tailles de fichiers acceptés.

---

## Résumé rapide

- **Photographes :**
  - Publier, gérer leurs photos et accéder à des statistiques.
  - Interagir socialement avec likes et commentaires.
- **Utilisateurs classiques :**
  - Interagir avec les photos via des likes et des commentaires.
  - Participer à des discussions.
- **Administrateurs :**
  - Gérer les rôles et modérer le contenu.
- **Sécurité :**
  - Protection des données et contrôle d’accès robuste.

Merci d’avoir pris le temps de lire ce document. N’hésitez pas à explorer toutes les possibilités offertes par Bon Photo !
