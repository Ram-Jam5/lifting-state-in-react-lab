// `src/components/BurgerStack.jsx`
import React from "react";

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
          <li style= {{ backgroundColor:ingredient.color,
            color:"white"
        }}
          key={index}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    ); 
  };
  
  export default BurgerStack;
  