import { useState } from "react"
import IngredientsList from "./IngredientsList"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }
    
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
           {ingredients.length > 0 ? 
           <section>
                <h2>Ingredients on hand:</h2>
                <IngredientsList ingredientsListItems={ingredientsListItems}/>
                {
                ingredients.length >= 4 && <div className="get-recipe-container">
                    
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
                }
            </section> : null}
        </main>
    )
}