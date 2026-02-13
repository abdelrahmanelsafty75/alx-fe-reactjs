import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import data from '../data.json'
function HomePage() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(data)
    }, [])

  return (
    <div className=" container mx-auto p-4">

     <h1 className="text-3xl font-bold mb-8 ">Recipe Sharing Platform</h1>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 ">
      {recipes.map(recipe => (
        <div key={recipe.id}
         className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">

          <img src={recipe.image} alt={recipe.title}
           className="w-full h-48 object-cover " />
            <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>

          <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>

           <Link to={`/recipe/${recipe.id}`} className="p-4 text-orange-500 font-medium hover:text-orange-700 transition-colors">
            View Recipe
           </Link>
           </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomePage