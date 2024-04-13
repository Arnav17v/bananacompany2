"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";

const Tarticle = ({ params }: { params: any }) => {
  const [selectedBlog, setSelectedBlog] = useState({
    id: "",
    title: "",
    content: "",
    artic: "",
    img: "",
  });
  const [blogFound, setBlogFound] = useState(false);
  const [blogs, setBlogs] = useState([]);

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
    const foundBlog = blogs.find((blog: any) => blog._id === params.idd);
    if (foundBlog) {
      setSelectedBlog(foundBlog);
      setBlogFound(true);
    }
  }, [params.idd, blogs]);

  if (!blogFound) {
    return (
      <div className="text-center mt-8">
        <div className="text-6xl text-yellow-400 animate-bounce">🍌</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-6xl text-yellow-400 border-b-2 border-yellow-400 pb-4">
            {selectedBlog.title}
          </div>
          <img
            src={selectedBlog.img}
            alt=""
            className="mx-auto py-6 w-full max-w-6xl"
          />
          <div className="text-2xl pt-8 max-w-2xl mx-auto text-yellow-400">
            &quot;{selectedBlog.content}&quot;
          </div>
          <div className="text-xl max-w-2xl mx-auto py-6 mt-6 text-justify">
            {selectedBlog.artic}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Tarticle;
