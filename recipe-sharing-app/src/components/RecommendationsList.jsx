import { useEffect } from 'react';
import useRecipeStore from "./recipeStore"
function RecommendationsList() {
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

  return (
    <div>
        <h3>Recommended for you</h3>
        {recommendations.length === 0 ? (<p>No recommendations available.</p>) :null }
                {recommendations.map(recipe => (
                    <div key={recipe.id}>
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p>
                    </div>
                ))}
    </div>
  )
}

export default RecommendationsList