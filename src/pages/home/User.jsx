// on importe useState et useEffect, ce sont des "hooks" react
// useState : permet de créer des variables réactives (quand elles changent, la page se met à jour)
// useEffect : permet d'exécuter du code quand le composant se charge (ou quand quelque chose change)
import { useState, useEffect } from "react";

export default function Users() {
  // on crée 3 variables d'état avec useState :
  // users : la liste de tous les utilisateurs récupérés depuis l'api
  // au départ c'est un tableau vide []
  const [users, setUsers] = useState([]);
  // loading : un booléen pour savoir si les données sont encore en train de charger
  // au départ c'est true parce qu'on n'a pas encore les données
  const [loading, setLoading] = useState(true);
  // search : le texte que l'utilisateur tape dans le champ de recherche
  // au départ c'est une chaîne vide ""
  const [search, setSearch] = useState("");

  // useEffect s'exécute une seule fois quand le composant apparaît dans la page
  // le [] à la fin signifie "exécute ça seulement au premier rendu"
  // si on mettait [search] par exemple, ça s'exécuterait à chaque fois que search change
  useEffect(() => {
    // fetch() est une fonction javascript native pour faire des appels api (requêtes http)
    fetch("https://dummyjson.com/users")
      // .then() s'exécute quand la requête reçoit une réponse
      // response.json() convertit la réponse en objet javascript qu'on peut utiliser
      .then((response) => response.json())
      // deuxième .then() : maintenant qu'on a les données, on les met dans notre state
      .then((data) => {
        // data.users est le tableau d'utilisateurs renvoyé par l'api
        setUsers(data.users);
        // on met loading à false pour dire "les données sont arrivées"
        setLoading(false);
      });
  }, []); // <- le tableau vide ici est important, ça veut dire "faire ça une seule fois"

  // ici on filtre les utilisateurs selon ce que l'utilisateur a tapé dans la recherche
  // .filter() crée un nouveau tableau avec seulement les éléments qui passent la condition
  const filtred = users.filter((user) =>
    // on convertit tout en minuscules pour que la recherche ne soit pas sensible à la casse
    // exemple : "Soundous" et "soundous" donnent le même résultat
    user.firstName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* le champ de recherche
          onChange se déclenche à chaque fois que l'utilisateur tape un caractère
          on met à jour le state search (avec setSearch) avec la valeur du champ */}
      <input
        type="text"
        placeholder="search with firstname"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* on parcourt le tableau filtred pour afficher seulement les résultats filtrés
          .map() transforme chaque élément du tableau 
          key est obligatoire en react quand on fait un .map(), elle aide react à suivre les éléments */}
      {filtred.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}