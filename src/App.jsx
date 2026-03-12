// app.jsx : c'est le point d'entrée de notre application react
// c'est ici qu'on décide quels composants afficher dans la page principale
// on importe les composants qu'on veut utiliser
// chaque fichier .jsx est un composant, et pour l'utiliser ailleurs il faut l'importer
import Users from "./pages/home/User";

// la fonction App() est le composant racine de notre app
// react va chercher ce composant en premier et afficher ce qu'il retourne
function App() {
  return (
    // on ne peut retourner qu'un seul élément parent en react
    // c'est pour ça qu'on entoure tout avec une <div>
    <div>
      {/* <Home  />
      <Pricing/> */}
      {/* <Test /> */}
      {/* là on affiche le composant Users, comme une balise html mais en majuscule, c'est comme ça qu'on reconnaît un composant react */}
      <Users/>
    </div>
  );
}

// on exporte App pour que main.jsx puisse l'importer et l'utiliser
export default App;