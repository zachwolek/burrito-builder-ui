import { useState } from "react";

function OrderForm({addOrder}) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function submitOrder(e) {
    e.preventDefault();
  if (ingredients.length > 0 && name.length > 0){
      const newOrder = {
        id: Date.now(),
        ingredients,
        name
      }
    
    addOrder(newOrder)
    clearInputs();
  } else {
    alert("Please have at least one ingredient and name with the order")
  }
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  function handleIngredients(ingredient){
    setIngredients([...ingredients, ingredient])
  }

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        value={ingredient}
        onClick={() => handleIngredients(ingredient)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => submitOrder(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;


// Add functionality to enable form submission ONLY when:

// New orders should only be displayed on the page IF the POST request is successful. The user should see the new order displayed without the page refreshing. The new order should persist on the DOM after refreshing as well.