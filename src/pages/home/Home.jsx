// on importe les composants qu'on va utiliser dans cette page
import NavBar from "../../components/NavBar";   // la barre de navigation
import Card from "../../components/Card";         // une carte pour afficher un coach

// on importe le fichier css spécifique à cette page
import "./Home.css";
// on importe useState pour gérer l'état local de ce composant
import { useState } from "react";

export default function Home() {
  // c'est un tableau d'objets javascript, chaque objet représente un coach
  // on le définit directement dans le composant, mais dans une vraie app ça viendrait d'une api
  const coaches = [
    { id: 1, name: "medjber", prenom: "soundous", age: "23" },
    { id: 2, name: "ghalem", prenom: "salim", age: "23" },
  ];

  // isLoggedIN : contrôle ce qu'on affiche (les cartes ou les boutons du compteur)
  const [isLoggedIN, setIsLog] = useState(false);

  // counter : la valeur actuelle du compteur
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* on affiche la NavBar en haut de la page
          elle n'a pas besoin de données donc on ne lui passe pas de props */}
      <NavBar />

      {/* rendu conditionnel basé sur isLoggedIN
          si connecté => afficher les cartes des coaches
          sinon => afficher le compteur et le bouton login */}
      {isLoggedIN ? (
        // on entoure les cartes dans une div avec id="boxes" pour les styler dans Home.css
        <div id="boxes">
          {/* .map() parcourt le tableau coaches et crée une Card pour chaque coach
              on passe les données du coach au composant Card via les props (name, prenom, age)
              c'est comme ça qu'un composant parent envoie des données à son enfant */}
          {coaches.map((coach) => (
            <Card
              key={coach.id}    // key obligatoire pour les listes en react
              name={coach.name}
              prenom={coach.prenom}
              age={coach.age}
            />
          ))}
        </div>
      ) : (
        <div>
          {/* le bouton login change isLoggedIN à true => déclenche un nouveau rendu */}
          <button onClick={() => setIsLog(true)}>login</button>

          {/* on affiche la valeur du compteur */}
          <h1>{counter}</h1>

          {/* chaque bouton modifie le state counter avec une opération différente
              react re-affiche automatiquement le composant quand counter change */}
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <button onClick={() => setCounter(0)}>reset</button>
        </div>
      )}
    </div>
  );
}