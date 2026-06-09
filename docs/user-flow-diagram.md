# Parcours utilisateur

Ce diagramme montre le parcours principal de réservation ou de contact.

```mermaid
flowchart LR
  Visitor["Visiteur"]
  Form["Formulaire<br>contact.html"]
  API["API Express<br>/api/bookings ou /api/contacts"]
  SQLite["SQLite<br>bookings / contacts"]
  Admin["Admin Dashboard<br>admin.html"]

  Visitor -->|"Remplit le formulaire"| Form
  Form -->|"Soumission fetch JSON"| API
  API -->|"Validation serveur"| API
  API -->|"Insertion"| SQLite
  SQLite -->|"Lecture des données"| API
  API -->|"Liste JSON"| Admin
  Admin -->|"Affiche les demandes"| Visitor
```

## Étapes

1. Le visiteur remplit le formulaire de demande.
2. Le frontend envoie les données à l'API Express.
3. Le backend valide les champs et l'email.
4. Les données sont enregistrées dans SQLite.
5. Le tableau de bord admin récupère les données via l'API.
6. L'administrateur peut consulter les réservations et messages.
