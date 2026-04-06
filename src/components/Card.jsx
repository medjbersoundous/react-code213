// les props sont les données qu'on reçoit du composant parent
// ici on destructure directement dans les paramètres : { name, prenom, age }
// c'est la même chose que d'écrire (props) puis d'utiliser props.name, props.prenom, props.age
// mais la destructuration c'est plus propre et plus lisible
export default function Card({ name, prenom, age }) {
  return (
    <div>
      {/* on affiche chaque prop dans une balise html
          les {} permettent d'injecter la valeur de la variable dans le jsx */}
      <h1>{name}</h1>
      <h2>{prenom}</h2>
      <h3>{age}</h3>
    </div>
  );
}

// pourquoi utiliser un composant Card ?
// parce qu'on a plusieurs coaches à afficher avec la même structure
// au lieu de répéter le même html 3 fois, on crée un composant réutilisable
// et on l'appelle avec des données différentes à chaque fois