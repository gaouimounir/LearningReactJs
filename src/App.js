import { useState } from "react";

function App() {
  // state (etat, données)
  const [compteur, setCompteur] = useState(1);

  // comportements
  const handlClick = () => {
    alert("handleClick");
    setCompteur(compteur + 1);
  };

  // affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handlClick}>Increment</button>
    </div>
  );
}

export default App;
