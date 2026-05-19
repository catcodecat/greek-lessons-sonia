# Lesson Grec

Lesson Grec est un projet de site vitrine pour présenter des cours particuliers de grec.

Cette version correspond à une première version de travail pour une vérification pédagogique. Le projet n'est pas encore finalisé, mais il permet déjà de montrer l'idée générale du site, sa structure, son design et les premières fonctionnalités.

## Liens du projet

- Lien GitHub : https://github.com/catcodecat/greek-lessons-sonia
- Lien Netlify : https://lesson-grec.netlify.app

## Objectif du site

Le site a pour objectif de présenter :

- la professeure ;
- les cours particuliers de grec ;
- la méthode d'apprentissage ;
- l'univers culturel autour de la Grèce ;
- les informations de contact.

Le public visé est composé de personnes qui souhaitent découvrir le grec, préparer un voyage, améliorer leur niveau ou apprendre la langue avec une approche culturelle.

## Technologies utilisées

Pour le moment, le projet est un site frontend statique.

Technologies utilisées :

- HTML ;
- CSS ;
- JavaScript.

Le projet n'utilise pas encore React, Vite ou un autre framework frontend. Cette évolution pourra être envisagée plus tard si le projet devient plus complexe.

## Structure des fichiers

```text
greek-lessons-sonia/
|-- index.html
|-- about.html
|-- lessons.html
|-- culture.html
|-- contact.html
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
|-- images/
|   |-- about-bg.jpg
|   |-- culture-bg.jpg.png
|   |-- home-bg.jpg.png
|   |-- lessons-bg.jpg
|   |-- sonia-1.jpg
|   |-- sonia-2.jpg
|   |-- sonia-3.jpg
|-- docs/
|   |-- brief-client.md
|   |-- design-system.md
|   |-- explications-examen.md
|   |-- tests.md
|   |-- use-cases.md
|   |-- wireframes.md
```

## Rôle des principaux fichiers

- `index.html` : page d'accueil du site.
- `about.html` : page de présentation de Sonia Line et de son parcours.
- `lessons.html` : page des cours proposés.
- `culture.html` : page dédiée à la culture grecque.
- `contact.html` : page avec le formulaire de contact.
- `css/style.css` : fichier principal pour le design, les couleurs, la mise en page et le responsive.
- `js/script.js` : fichier JavaScript pour le menu mobile, la validation du formulaire, la FAQ et les animations.
- `images/` : dossier contenant les photos et les fonds visuels du site.
- `docs/` : dossier contenant les documents de préparation du projet.

## Fonctionnalités déjà présentes

- Navigation entre les pages.
- Page d'accueil avec présentation du projet.
- Page À propos avec un collage de photos.
- Page Cours avec les formats proposés.
- Page Culture avec une ambiance visuelle grecque.
- Page Contact avec un formulaire simple.
- Design responsive commencé.
- Images locales intégrées au projet.
- Publication du site avec Netlify.
- Versionnement du code avec Git et GitHub.

## Améliorations prévues

Le projet est encore en cours de développement. Les prochaines améliorations possibles sont :

- améliorer certains textes en français ;
- vérifier toutes les pages sur mobile et tablette ;
- améliorer encore la lisibilité des fonds ;
- compléter la page Contact si nécessaire ;
- ajouter une page de mentions légales ou de confidentialité ;
- enrichir la documentation technique ;
- ajouter un `Dockerfile` si cela est demandé pour l'examen ;
- réfléchir à une petite partie backend si le formulaire doit vraiment enregistrer les demandes ;
- envisager React/Vite plus tard si la structure du site devient plus complexe.

## Lancer le projet en local

Comme le projet est statique, il peut être ouvert directement dans un navigateur :

```text
index.html
```

Il est aussi possible d'utiliser un petit serveur local si l'environnement le permet.

## État actuel

Cette première version permet de présenter le projet au professeur et de montrer le travail déjà commencé. Le site fonctionne en ligne sur Netlify, mais il reste une version de travail qui sera améliorée progressivement.
