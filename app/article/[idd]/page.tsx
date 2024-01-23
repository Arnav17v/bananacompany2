"use client";
import blogs from "@/app/blogs.json";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { useState, useEffect } from "react";

const Tarticle = ({ params }:{params:any}) => {
  const [selectedBlog, setSelectedBlog] = useState({});
  const [blogFound, setBlogFound] = useState(false);

  useEffect(() => {
    for (const blog of blogs) {
      if (blog.id === params.idd) {
        setSelectedBlog(blog);
        setBlogFound(true);
        break;
      
    }
  }},[params.id])

  if (!blogFound) {
    return <div className="text-[500px] flex items-center justify-center transform rotate-fast">🍌</div>
  }

  // Render the selected blog title
  return (
    <>
      <Navbar />
      <div className="max-w-[66rem] m-auto">
        <div className="flex justify-center text-6xl text-yellow-400 border-b-2 border-yellow-400 pb-4">{selectedBlog.title}</div>
        <img src={`${selectedBlog.img}`} alt="" className="m-auto py-6 w-[66rem]"/>
        <div className="text-2xl pt-8 max-w-[50rem] m-auto text-yellow-400">&quot{selectedBlog.content}&quot</div>
        <div className="text-xl max-w-[50rem] m-auto py-6 mt-6 text-justify">{selectedBlog.artic}</div>
      </div>
      <Footer />
    </>
  );
};

export default Tarticle;
