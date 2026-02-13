import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import data from '../data.json'
function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  const navigate = useNavigate()
  useEffect(() => {
    const foundRecipe = data.find(r => r.id === parseInt(id))
    setRecipe(foundRecipe)
  }, [id])

  if (!recipe) {
    return <div className="text-center mt-20">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 text-orange-600 hover:underline flex items-center gap-2"
      >
        ← Back to Home
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg mb-8 italic">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-orange-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4 text-orange-800 border-b border-orange-200 pb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients?.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </section>

            <section className="p-6 bg-green-50 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-green-200 pb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail