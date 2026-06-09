# Documentation API

Base URL locale :

```text
http://127.0.0.1:4173
```

Les données sont échangées au format JSON.

## GET `/api/bookings`

Retourne la liste des réservations enregistrées.

### Réponse `200`

```json
{
  "bookings": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "level": "Débutant",
      "goal": "Voyage",
      "message": "Je souhaite réserver un cours.",
      "status": "new",
      "created_at": "2026-06-09 10:46:22"
    }
  ]
}
```

## POST `/api/bookings`

Enregistre une demande de réservation de cours.

### Corps attendu

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "level": "Débutant",
  "goal": "Voyage",
  "message": "Je souhaite réserver un cours."
}
```

### Réponse `201`

```json
{
  "message": "Votre demande de cours a bien été enregistrée.",
  "booking": {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "level": "Débutant",
    "goal": "Voyage",
    "message": "Je souhaite réserver un cours.",
    "status": "new",
    "created_at": "2026-06-09 10:46:22"
  }
}
```

### Réponse `400`

```json
{
  "message": "La demande est incomplète.",
  "errors": {
    "email": "Adresse email invalide."
  }
}
```

## GET `/api/contacts`

Retourne la liste des messages de contact.

### Réponse `200`

```json
{
  "contacts": [
    {
      "id": 1,
      "name": "David",
      "email": "david@example.com",
      "subject": "Question",
      "message": "Je souhaite recevoir des informations.",
      "created_at": "2026-06-09 10:46:22"
    }
  ]
}
```

## POST `/api/contacts`

Enregistre un message de contact.

### Corps attendu

```json
{
  "name": "David",
  "email": "david@example.com",
  "subject": "Question",
  "message": "Je souhaite recevoir des informations."
}
```

### Réponse `201`

```json
{
  "message": "Votre message a bien été enregistré.",
  "contact": {
    "id": 1,
    "name": "David",
    "email": "david@example.com",
    "subject": "Question",
    "message": "Je souhaite recevoir des informations.",
    "created_at": "2026-06-09 10:46:22"
  }
}
```

### Validation serveur

Le serveur vérifie :

- présence des champs obligatoires ;
- format de l'adresse email ;
- validité du JSON reçu.

Les insertions SQL utilisent des requêtes préparées.
