import React from 'react'
import useRecipeStore from './recipeStore';
function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterRecipes();
    }
    
  return (
     <form style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
            style={{padding: '10px'}}
          />
      </form>
      
  )
}

export default SearchBar