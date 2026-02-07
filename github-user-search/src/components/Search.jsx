import { useState } from 'react'
import { fetchUserData, fetchAdvancedSearchResults } from '../services/githubService'
function Search() {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos] = useState('')
    const [page, setPage] = useState(1)
    const [users , setUsers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError(false)
        setUserData(null)
        setUsers([])
        setPage(1)
        try {
            const myData = await fetchAdvancedSearchResults(username, location, minRepos, page)
            myData.items ? setUsers(myData.items) : setUsers([])
        }
        catch (err) {
            setError(true)
        } 
        finally {
            setLoading(false)
        } 
    }
    const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await fetchAdvancedSearchResults(username, location, minRepos, nextPage);
      if (data.items) {
        setUsers((prevUsers) => [...prevUsers, ...data.items]); 
        setPage(nextPage);
      }
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          GitHub Advanced Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Username</label>
              <input
                type="text"
                placeholder="e.g. octocat"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g. San Francisco"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Min Repositories</label>
              <input
                type="number"
                placeholder="e.g. 10"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Search GitHub
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-sm">
            <p className="font-bold">Error</p>
            <p>Looks like we cant find the user</p>
          </div>
        )}

        {/* Loading Indicator (Initial) */}
        {loading && users.length === 0 && (
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 border border-gray-100">
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-50 object-cover" 
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{user.login}</h2>
              
              <div className="flex flex-col items-center w-full mt-2 space-y-2">
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {users.length > 0 && (
          <div className="text-center mt-10">
            <button 
              onClick={loadMore} 
              disabled={loading}
              className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition duration-200 shadow-sm disabled:opacity-50"
            >
              {loading ? 'Loading more...' : 'Load More Results'}
            </button>
          </div>
        )}
      </div>
    </div>
    );
  }

export default Search