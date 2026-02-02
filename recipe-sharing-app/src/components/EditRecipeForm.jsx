import useRecipeStore from './recipeStore';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function EditRecipeForm({recipeID}) {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeID));
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

     const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      updateRecipe({ id: recipeID, title, description });
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}   
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Save</button>
      </form>
    );
}

export default EditRecipeForm