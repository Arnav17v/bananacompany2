"use client";
import Navbar from "@/app/navbar";
import blogs from "@/app/blogs.json";
import Footer from "@/app/footer";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogs = () => {
  type BlogType = {
    _id: string;
    id: string;
    title: string;
    content: string;
    artic: string;
    img: string;
  };

  const [Blogs, setBlogs] = useState<BlogType[]>([
    {
      _id: "",
      id: "",
      title: "",
      content: "",
      artic: "",
      img: "",
    },
  ]);

  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5500/blog")
      .then((res) => {
        setBlogs(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (Loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-4xl">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <div>
        <ul className="max-w-[66rem] m-auto">
          {Blogs.map((blog) => (
            <a key={blog.id} href={`./article/${blog._id}`}>
              <div>
                <div className="relative overflow-hidden w-[600px] flex justify-center">
                  <img
                    key={blog.id}
                    className={`w-[597px] hover:scale-110 transition-all duration-700`}
                    src={`${blog.img}`}
                  />
                </div>
                <div className="p-4 mb-4 text-yellow-400 bg-black z-10  flex flex-col w-[597px] ">
                  <span key={blog.id} className="text-4xl">
                    {blog.title}
                  </span>
                  <span key={blog.id} className="text-white">
                    {blog.content}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AllBlogs;
