"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [artic, setArtic] = useState("");
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");

  const handleSaveBlog = () => {
    const data = {
      title,
      content,
      artic,
      img,
    };
    setLoading(true);
    axios
      .post("http://localhost:5500/blog", data, {})
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  };

  return (
    <div className="p-4 h-screen text-black">
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <div>Loading......</div> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Content</label>
          <input
            type="text"
            value={artic}
            onChange={(e) => setArtic(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBlog}>
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default CreateBlogs;
