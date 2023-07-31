import { useState } from "react";

export default function FruitForm(){

    //state
    const [nouveauFruit, setNouveauFruit] = useState("");

    //comportement
const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputref.current.value);
    
        //1. copie du state
        const fruitsCopy = [...fruits];
    
        //2. manipuler mon state
    
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = { id, nom };
        fruitsCopy.push(fruitAAjouter);
    
        //3. modifier mon state avec le setter
        setFruits(fruitsCopy);
        setNouveauFruit("");
      };
      const handleChange = (event) => {
        setNouveauFruit(event.target.value);
      };

    //affichage (render)



    
    return ( <form action="submit" onSubmit={handleSubmit}>
    <input
      value={nouveauFruit}
      type="text"
      placeholder="Ajouter un fruit"
      onChange={handleChange}
    />
    <button>Ajouter + </button>
  </form>)
}