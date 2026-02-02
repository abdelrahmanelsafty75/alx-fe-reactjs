import useRecipeStore from "./recipeStore"
import {useNavigate} from 'react-router-dom'
function DeleteRecipeButton({recipeID}) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const navigate = useNavigate();

    const handleDelete = (event) => {
      event.preventDefault();
      deleteRecipe(recipeID);
      navigate('/');
    }
  return(
        <button onClick={handleDelete}>Delete Recipe</button>
  )
}

export default DeleteRecipeButton