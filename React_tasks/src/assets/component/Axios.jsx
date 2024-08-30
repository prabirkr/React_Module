import { useState, useEffect } from 'react';
import axios from 'axios';

function Axios() {
  const [posts, setPosts] = useState([]); // State for posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const [postsPerPage] = useState(1); // Number of posts per page
  const [totalPosts, setTotalPosts] = useState(0); // Total number of posts
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  // Calculate total pages dynamically
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data); // Set all posts
        setTotalPosts(response.data.length); // Set total posts for pagination
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const result = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(result);
    setCurrentPage(1); 
  }, [searchQuery, posts]);

  // Get current posts for the current page
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  // Function to handle page changes
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (filteredPosts.length === 0) return <div className="text-center">No Posts Found</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className='items-center p-8'>pOst</h1>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Post Card */}
      <div className="flex justify-center items-center mb-4">
        {currentPosts.length > 0 ? (
          currentPosts.map(post => (
            <div key={post.id} className="w-full max-w-xs h-80 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col justify-between mb-4">
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No Posts Found</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Axios;
