"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import IdContext from "@/app/idContext";

const DocsIdPage = ({ params }: { params: any }) => {
  const { id } = useContext(IdContext);
  const [blogs, setBlogs] = useState([
    {
      id: "",
      title: "",
      content: "",
      artic: "",
      img: "",
    },
  ]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5500/blog");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSearchRes(id);
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(id.toLowerCase()) ||
      blog.content.toLowerCase().includes(id.toLowerCase())
  );
  console.log(id);

  return (
    <>
      <div>
        <ul className="max-w-[66rem] m-auto">
          {filteredBlogs.map((blog) => (
            <a key={blog.id} href={`../article/${blog.id}`}>
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

export default DocsIdPage;
