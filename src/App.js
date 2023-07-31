import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/fruitForm";

function App() {
  // state (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // methode 1 : const inputref = useRef();

  // comportements
  const handleDelete = (id) => {
    console.log(id);
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {};

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />
        ))}
      </ul>
      <FruitForm fruits />
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
