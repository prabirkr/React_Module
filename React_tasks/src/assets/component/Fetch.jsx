import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function Axios() {
  const [posts, setPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const [postsPerPage] = useState(1); 
  const [totalPosts, setTotalPosts] = useState(0); 
  const [searchQuery, setSearchQuery] = useState(''); 

  // Calculate total pages 
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data); 
        setTotalPosts(response.data.length); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on search query
    const result = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when search query changes
  }, [searchQuery, posts]);

  // Get current posts for the current page
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  // Handle page change
  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (filteredPosts.length === 0) return <div className="text-center">No Posts Found</div>;

  return (
    <div className="relative min-h-screen flex flex-col p-4">
      <h1 className='items-center p-8'>pOst</h1>

      {/* Main content */}
      <div className="flex-grow p-2 max-w-4xl mx-auto">

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Post Card */}
        <div className="flex flex-col items-center">
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
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< Previous"
          containerClassName="flex"
          pageClassName="px-3 py-2 border rounded-md mx-1"
          activeClassName="bg-blue-200 text-white"
          previousClassName="px-3 py-2 border rounded-md mx-1"
          nextClassName="px-3 py-2 border rounded-md mx-1"
          disabledClassName="bg-gray-300 text-gray-400 cursor-not-allowed"
        />
      </div>
    </div>
  );
}

export default Axios;
