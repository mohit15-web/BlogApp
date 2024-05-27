import { useContext, useState } from 'react';
import { BlogContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

function AddPost() {
    const {state, dispatch} = useContext(BlogContext);
    console.log("STATE", state);
    const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log('Title:', title);
    console.log('Content:', content);
    dispatch({type:"ADD_BLOG", payload:{title, content , id:Date.now()}})
    console.log("state" , state);
    navigate('/showpost')
    // Clear the form
    setTitle('');
    setContent('');
  };

  return (
    <div className="w-[30%] m-auto p-6 mt-20 bg-gray-800 text-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-300">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
