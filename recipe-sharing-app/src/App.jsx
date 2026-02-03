import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>

        <Routes>

          <Route path="/" element={
            <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
            </>
            } />


          <Route path="/recipes/:recipeID" element={<RecipeDetails />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;