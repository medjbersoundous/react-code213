// main.jsx : c'est le tout premier fichier qui s'exécute dans notre app
// son rôle est de "brancher" react sur notre page html
// on importe StrictMode depuis react
// StrictMode est un outil de développement qui nous aide à détecter les erreurs
import { StrictMode } from 'react'
// createRoot est la fonction qui permet à react de prendre le contrôle d'un élément html
import { createRoot } from 'react-dom/client'
// on importe les styles globaux de notre application
import './index.css'
// on importe notre composant principal App
import App from './App.jsx'
// document.getElementById('root') va chercher la div avec l'id "root" dans index.html
// c'est là que react va injecter toute notre application
// createRoot() dit à react "cette div est à toi, gère-la"
createRoot(document.getElementById('root')).render(
  // StrictMode entoure notre App pour activer les vérifications supplémentaires
  // en production ça n'a aucun effet, c'est juste utile pendant le développement
  <StrictMode>
    <App />
  </StrictMode>,
)