import useRecipeStore from "./recipeStore"
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const { recipeID } = useParams();
    const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeID));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <hr />
            <EditRecipeForm recipeID={recipe.id} />
            <DeleteRecipeButton recipeID={recipe.id} />
        </div>
    );
}

export default RecipeDetails