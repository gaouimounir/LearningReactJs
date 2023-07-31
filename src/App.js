import { useRef, useState } from "react";

function App() {
  // state (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

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
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputref.current.value);

    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state

    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id: id, nom: nom });

    //3. modifier mon state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };
  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.nom}{" "}
              <button onClick={() => handleDelete(fruit.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          /*ref={inputref}*/ type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
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
