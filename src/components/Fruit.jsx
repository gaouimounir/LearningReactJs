export default function Fruit({fruitInfo, deleteClick, favoriteClick}){
    //------------STATE------------

    // const fruitInfo = props.fruitInfo;
    //const onFruitDelete = props.onFruitDelete;

    //----------COMPRTEMENT------------

    //----------AFFICHAGE-------------
    return (
        <li>
        {fruitInfo.nom}{""}
        <button onClick={deleteClick}>X</button>
        <button onClick={favoriteClick}>O</button>
        </li>
    )
}