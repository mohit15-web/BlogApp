import { useContext } from 'react';
import { BlogContext } from '../context/Context';

  
function ShowPost() {
    const { state } = useContext(BlogContext);
    return (
        <div className='mt-20 text-white flex flex-col w-[25%] m-auto'>
            {state.blogs.map((blog) => (
                <div key={blog?.id} className={`mb-4 p-6 bg-gray-800 rounded-xl shadow-md
                `}
                
                style={{backgroundColor: blog.bgColor}}>
                    <span className='text-sm font-bold text-white bg-black rounded-2xl px-4 py-1'>{blog?.title}</span>
                    <p className=' text-4xl text-black mt-4 text-wrap'>{blog?.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowPost;
``
