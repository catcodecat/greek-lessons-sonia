# Cas d’utilisation

## Acteurs

### Visiteur

Le visiteur consulte le site pour découvrir Sonia Line, comprendre les cours proposés et envoyer une demande de contact.

Cas d’utilisation :

- Consulter la page d’accueil.
- Découvrir Sonia Line.
- Consulter les offres de cours.
- Lire les avantages.
- Envoyer une demande de contact.
- Consulter les coordonnées.

### Administrateur / Sonia Line

Sonia Line est l’administratrice du contenu. Il n’y a pas de vraie interface d’administration dans ce projet, mais elle peut faire modifier les textes, recevoir les demandes et utiliser le site comme présentation de ses services.

Cas d’utilisation :

- Recevoir les demandes.
- Modifier les informations du site.
- Gérer les contenus.

## PlantUML

```plantuml
@startuml
left to right direction

actor "Visiteur" as Visiteur
actor "Administrateur\nSonia Line" as Admin

rectangle "Site Sonia Line - Cours de grec" {
  usecase "Consulter la page d'accueil" as UC1
  usecase "Découvrir Sonia Line" as UC2
  usecase "Consulter les offres de cours" as UC3
  usecase "Lire les avantages" as UC4
  usecase "Envoyer une demande de contact" as UC5
  usecase "Consulter les coordonnées" as UC6
  usecase "Recevoir les demandes" as UC7
  usecase "Modifier les informations du site" as UC8
  usecase "Gérer les contenus" as UC9
}

Visiteur --> UC1
Visiteur --> UC2
Visiteur --> UC3
Visiteur --> UC4
Visiteur --> UC5
Visiteur --> UC6

Admin --> UC7
Admin --> UC8
Admin --> UC9

UC5 --> UC7 : transmet
@enduml
```
