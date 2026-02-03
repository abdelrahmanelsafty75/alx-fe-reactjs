import useRecipeStore from "./recipeStore"
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const { recipeID } = useParams();
    const recipe = useRecipeStore(state => state.recipes.find(r => r.id === Number(recipeID)));

    const favorites = useRecipeStore(state => state.favorites);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    
    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    
    const isFavorite = favorites.includes(recipe?.id);

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <hr />
            <button onClick={() => {
                if (isFavorite) {
                    removeFavorite(recipe.id);
                } else {
                    addFavorite(recipe.id);
                }
            }}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <EditRecipeForm recipeID={recipe.id} />
            <DeleteRecipeButton recipeID={recipe.id} />
        </div>
    );
}

export default RecipeDetails