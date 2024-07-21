// src/components/IngredientList.jsx
import React from "react";
import { availableIngredients } from "../App";


const IngredientList = ({ addToBurger }) => {
    return ( 
        <ul>
            {availableIngredients.map((ingredient, index) => (
                <li style= {{ backgroundColor:ingredient.color,
                    color:"white"
                }}
                 key={index}>
                    {ingredient.name}
                <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
            ))}
        </ul>
        );
  };
  
  export default IngredientList;
  