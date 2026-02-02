import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom'; 
const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
       {recipes.length === 0 ? <p>No recipes yet.</p> : null}
       
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          
          <Link to={`/recipes/${recipe.id}`}>
             View Details
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default RecipeList;