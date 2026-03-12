// navbar.jsx : c'est la barre de navigation de notre application
// pour l'instant c'est une version basique, on va l'améliorer avec react-router plus tard
export default function NavBar() {
  return (
    <div>
      {/* une liste non ordonnée pour les liens de navigation
          en vrai on utiliserait des balises <a> ou <Link> de react-router
          pour naviguer entre les pages sans recharger */}
      <ul>
        <li>item1</li>
        <li>item 2</li>
      </ul>
    </div>
  );
}

// ce composant ne reçoit pas de props et n'a pas de state
// c'est ce qu'on appelle un composant "stateless" ou purement présentationnel