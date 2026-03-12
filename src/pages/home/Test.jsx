import { useState } from "react";

export default function Test() {
  // on crée 3 variables d'état pour gérer notre formulaire de login :

  // username : ce que l'utilisateur tape dans le champ "nom d'utilisateur"
  const [username, setUsername] = useState("");

  // password : ce que l'utilisateur tape dans le champ "mot de passe"
  const [password, setPassword] = useState("");

  // isLoggedIN : un booléen qui indique si l'utilisateur est connecté ou pas
  // au départ il n'est pas connecté donc false
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  // cette fonction est appelée quand on clique sur le bouton "Login"
  function handleLogin() {
    // on vérifie si le nom d'utilisateur est "admin" et le mot de passe est "1234"
    // c'est une validation simple codée en dur, en vrai on appellerait une api
    if (username === "admin" && password === "1234") {
      // si c'est correct, on passe isLoggedIN à true
      // react va automatiquement re-afficher le composant avec le nouvel état
      setIsLoggedIN(true);
    } else {
      console.log("Wrong username or password");
    }
  }

  return (
    <div>
      {/* rendu conditionnel : on affiche soit le dashboard soit le formulaire de login
          c'est l'équivalent d'un if/else mais en jsx
          si isLoggedIN est true => on affiche le message de bienvenue
          si isLoggedIN est false => on affiche le formulaire */}
      {isLoggedIN ? (
        // cas où l'utilisateur est connecté
        <div>
          {/* on affiche le username dans le message de bienvenue
              les {} permettent d'injecter une variable javascript dans le jsx */}
          <h2>Welcome {username}</h2>
          {/* le bouton logout remet isLoggedIN à false => retour au formulaire */}
          <button onClick={() => setIsLoggedIN(false)}>Logout</button>
        </div>
      ) : (
        // cas où l'utilisateur n'est pas encore connecté
        <div>
          {/* champ pour le nom d'utilisateur
              onChange met à jour le state username à chaque frappe
              e.target.value c'est la valeur actuelle du champ */}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* champ pour le mot de passe
              type="password" masque les caractères avec des points */}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* le bouton appelle la fonction handleLogin quand on clique dessus */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}