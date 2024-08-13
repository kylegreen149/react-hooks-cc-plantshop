import React, {useState} from "react";

function PlantCard({plant}) {

  const [addPlantToCart, setAddPlantToCart] = useState(true)
  
  function handleClick() {
    setAddPlantToCart(!addPlantToCart)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button onClick={handleClick} className="primary">{addPlantToCart ? "In" : "Out of"} Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
