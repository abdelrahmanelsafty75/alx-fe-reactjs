function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 sm:max-w-xs md:max-w-sm md:p-8  mx-auto my-20 rounded-lg shadow-lg">
      
      <img className="md:w-36 md:h-36 sm:w-26 sm:h-26 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="User" />
      
      <h1 className="md:text-xl sm:text-lg font-bold my-4 text-blue-800">John Doe</h1>
      
      <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;