# Diagramme d'architecture

Ce diagramme présente l'architecture fonctionnelle du projet Sonia Line — cours particuliers de grec.

```mermaid
flowchart LR
  Browser["Navigateur utilisateur"]
  Frontend["Frontend HTML / CSS / JavaScript"]
  Backend["Backend Node.js + Express"]
  Database["Base SQLite<br>data/app.sqlite"]

  Browser -->|"Charge les pages"| Frontend
  Frontend -->|"Requêtes fetch JSON"| Backend
  Backend -->|"Requêtes préparées"| Database
  Database -->|"Données persistées"| Backend
  Backend -->|"Réponses JSON"| Frontend
  Frontend -->|"Affichage utilisateur / admin"| Browser
```

## Rôle des blocs

- **Navigateur** : affiche les pages publiques, le formulaire et le tableau de bord admin.
- **Frontend** : pages HTML, styles CSS, interactions JavaScript.
- **Backend Express** : routes API, validation serveur, réponses JSON.
- **SQLite** : stockage local des réservations et messages de contact.
