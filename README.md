
## structure du projet

```
src/
├── components/          => composants réutilisables (NavBar, Card,...)
├── pages/
│   └── home/            => pages de l'app (Home, Test, User, Pricing...)
├── App.jsx              => composant racine, point d'entrée de react
├── main.jsx             => branchement de react sur le html
└── index.css            => styles globaux
index.html               => la seule vraie page html, contient la div#root
```

---

## rfc — react functional component (raccourci vscode)

au lieu d'écrire un composant à la main à chaque fois, utilise le snippet **rfc** dans vscode :

1. crée un nouveau fichier `.jsx`
2. tape `rfc` puis appuie sur `tab`
3. vscode génère automatiquement cette structure :

```jsx
import React from 'react'

export default function MonComposant() {
  return (
    <div>MonComposant</div>
  )
}
```

> le nom de la fonction s'adapte automatiquement au nom du fichier. c'est pour ça qu'on nomme toujours les fichiers avec une majuscule : `Card.jsx`, `NavBar.jsx`, etc.

---

## les commentaires en jsx

en jsx, on ne peut pas utiliser `<!-- -->` comme en html classique. voici les deux façons de commenter :

```jsx
// commentaire en dehors du return() — commentaire javascript normal

function MonComposant() {
  // ici c'est du javascript donc on commente avec //
  const name = "soundous"

  return (
    <div>
      {/* commentaire à l'intérieur du jsx
          on utilise les accolades {} + slash étoile
          ça peut être sur plusieurs lignes */}
      <h1>{name}</h1>
      {/*<h2> test comment </h2> */}
    </div>
  )
}
```

> si tu essaies de mettre `// commentaire` directement dans le return() sans `{}`, ça plantera. toujours utiliser `{/* */}` à l'intérieur du jsx.

---

## les props — 3 façons de les déclarer

les props c'est ce qu'un composant parent envoie à son enfant. voici les trois façons de les recevoir :

### 1. avec l'objet props (façon classique)
```jsx
export default function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  )
}
```

### 2. avec la destructuration (façon recommandée)
```jsx
export default function Card({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}

```

### 3. avec destructuration depuis props dans le corps de la fonction
```jsx
export default function Card(props) {
  const { name, age } = props  // on destructure props ici, dans le corps
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}
```

### on peut mettre des valeurs par défaut
```jsx
export default function Card({ name = "soundous" }) {
  return (
    <div>
      <h1>{name}</h1>  {/* affiche "soundous" si pas de prop name */}
    </div>
  )
}
```

**comment on passe les props depuis le parent :**
```jsx
// dans Home.jsx :
<Card name="soundous" age="23" />
```

---

## useEffect — les 3 types

`useEffect` permet d'exécuter du code en réponse à des événements du cycle de vie du composant. il y a 3 façons de l'utiliser selon ce qu'on veut faire :

### type 1 — s'exécute à chaque rendu (à éviter en général)
```jsx
useEffect(() => {
  console.log("je s'exécute à chaque fois que le composant se re-affiche")
  // pas de tableau de dépendances => s'exécute TOUJOURS
})
```

### type 2 — s'exécute une seule fois au montage  (le plus utilisé)
```jsx
useEffect(() => {
  console.log("je m'exécute une seule fois quand le composant apparaît")
  // parfait pour : appels api, récupérer des données, initialiser quelque chose
  fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => setUsers(data.users))
}, []) // <- tableau vide = une seule fois
```

### type 3 — s'exécute quand une variable change
```jsx
useEffect(() => {
  console.log("search a changé, je relance la recherche")
  // s'exécute quand search change (et au premier rendu aussi)
}, [search]) // <- search dans le tableau = surveille search
```

**on peut surveiller plusieurs variables :**
```jsx
useEffect(() => {
  console.log("userId ou page a changé")
}, [userId, page]) // s'exécute si userId OU page change
```

> résumé :
> - `[]` => une seule fois au départ
> - `[variable]` => chaque fois que la variable change
> - rien => à chaque rendu (rarement utile)

---

## rappels importants

### le rendu conditionnel
```jsx
// avec le ternaire (si/sinon)
{isLoggedIn ? <Dashboard /> : <LoginForm />}

```

### les listes avec .map()
```jsx
// toujours mettre une key unique sur l'élément parent
{users.map((user) => (
  <div key={user.id}>
    <p>{user.firstName}</p>
  </div>
))}
```
---

##  lancer le projet

```bash
npm install      # installer les dépendances
npm run dev      # lancer le serveur de développement
```

le projet tourne sur `http://localhost:5173` par défaut.

---
