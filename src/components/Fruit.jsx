export default function Fruit({fruitInfo, onFruitDelete}){
    //------------STATE------------

    // const fruitInfo = props.fruitInfo;
    //const onFruitDelete = props.onFruitDelete;

    //----------COMPRTEMENT------------

    //----------AFFICHAGE-------------
    return (
        <li key={fruitInfo.id}>
        {fruitInfo.nom}{""}
        <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
        </li>
    )
}