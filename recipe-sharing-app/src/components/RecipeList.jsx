import React from 'react'
import useRecipeStore from './RecipeStore'
function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);
  return (
    <div>
        <h2>Recipe List</h2>
        <ul>
            {recipes.map((recipe, id) => (
                <li key={id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default RecipeList