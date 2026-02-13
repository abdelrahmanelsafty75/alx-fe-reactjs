import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AddRecipeForm() {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState([''])
    const [steps, setSteps] = useState([''])
    const [errors, setErrors] = useState({})
    
    const navigate = useNavigate()

    const validateForm = () => {
        const myErrors = {}
        if (!title.trim()) myErrors.title = "Title is required"
        if (!ingredients.trim()) myErrors.ingredients = "All ingredients must be filled"
        if (!steps.trim()) myErrors.steps = "All steps must be filled"
        return myErrors
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }   

    console.log({ title, ingredients, steps });

    setErrors({});
    setTitle('');
    setIngredients(['']);
    setSteps(['']);
    alert("Recipe added successfully!");
    navigate('/');
    }
  return ( 
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-8 space-y-4">
        


        <div>
          <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>



        <div>
          <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 h-32 resize-none ${errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Separate ingredients with commas (e.g. Eggs, Cheese, Bacon)"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>



        <div>
          <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 h-32 resize-none ${errors.steps ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Describe the cooking process..."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>



        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Add Recipe
        </button> 
      </form>
    </div>
  )
}

export default AddRecipeForm