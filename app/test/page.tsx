"use client"
import { useState } from 'react';

const IndexPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('/blogs.json');
      console.log("here")
      const data = await response.json();
      console.log("There")
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div>
      <h1>Next.js JSON Fetch Example</h1>
      <button onClick={handleButtonClick}>Fetch JSON</button>

      {selectedBlog && (
        <div>
          <h2>Selected Blog:</h2>
          <h3>{selectedBlog.title}</h3>
          <p>{selectedBlog.content}</p>
          <img src={selectedBlog.img} alt={selectedBlog.title} />
        </div>
      )}

      <div>
        <h2>Blog List:</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} onClick={() => handleBlogClick(blog)}>
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
