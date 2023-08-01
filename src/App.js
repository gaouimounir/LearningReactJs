import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  // -----------------STATE (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // ----------------COMPORTEMENT
  const handleDelete = (id) => {
    console.log(id);
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };
  const handleAdd = (fruitAAjouter) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipulation de la copie
    fruitsCopy.push(fruitAAjouter);

    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };
  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit: ${fruitNom}`);
  };

  // -------------AFFICHAGE (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            deleteClick={() => handleDelete(fruit.id)}
            favoriteClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

// Gestion du formulaire
//1. creation du formulaire
//2. soumission du formulaire ( onSubmit/ handleSubmit)
//3. collecte des donnees du formulaire
//3a. methode 1: documentGetElementById "React" (useRef)
//3b. methode 2: synchro ascendente / descendente ( onChange / handleChange)
