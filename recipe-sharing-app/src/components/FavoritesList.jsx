import React from 'react'
import useRecipeStore from "./recipeStore"
function FavoritesList() {
  const favoriteIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favorites = favoriteIds
    .map(id => recipes.find(r => r.id === id))
    .filter(recipe => recipe !== undefined); 

  return (
    <div>
        <h2>Favorite Recipes</h2>
        {favorites.length === 0 ? (<p>No favorite recipes yet.</p>) :null }
            
                {favorites.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            
    </div>
  )
}   

export default FavoritesList