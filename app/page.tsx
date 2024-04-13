"use client";
import Link from "next/link";

import { use, useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import articleContext from "./articleContext";

export default function Home() {
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
  const [All, setAll] = useState([
    {
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
        setAll(Blogs);
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
        <div className="flex justify-center items-center h-screen">
          <div className="text-4xl">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }
  console.log(Blogs[0]._id);
  return (
    <>
      <div className="flex py-4 gap-6 max-w-[66rem] m-auto">
        <Link
          key={All.length > 0 ? All[0].id : ""}
          href={`./article/${Blogs[0]._id}`}
        >
          <div className="hover:-translate-y-10 hover:-translate-x-10 transition-all duration-700">
            <div className="relative overflow-hidden w-[700px] flex justify-center">
              <img
                key={Blogs[0].id}
                className={`w-[697px] hover:scale-110 transition-all duration-700`}
                src={`${Blogs[0].img}`}
              />
            </div>
            <div className="p-4 mb-4 text-yellow-400 bg-black z-10  flex flex-col w-[597px] ">
              <span key={Blogs[0].id} className="text-4xl">
                {Blogs[0].title}
              </span>
              <span key={Blogs[0].id} className="text-white">
                {Blogs[0].content}
              </span>
            </div>
          </div>
        </Link>
        <div>
          <a key={Blogs[1].id} href={`./article/${Blogs[1]._id}`}>
            <div>
              <img
                key={Blogs[1].id}
                className={`h-[350px] w-[5x]`}
                src={`${Blogs[1].img}`}
              />
              <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
                <span key={Blogs[1].id} className="text-4xl">
                  {Blogs[1].title}
                </span>
                <span key={Blogs[1].id} className="text-white">
                  {Blogs[1].content}
                </span>
              </div>
            </div>
          </a>
          <a key={Blogs[2].id} href={`./article/${Blogs[2]._id}`}>
            <div>
              <img
                key={Blogs[2].id}
                className={`h-[350px] w-[5x]`}
                src={`${Blogs[2].img}`}
              />
              <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
                <span key={Blogs[2].id} className="text-4xl">
                  {Blogs[2].title}
                </span>
                <span key={Blogs[2].id} className="text-white">
                  {Blogs[2].content}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex py-4 gap-6 w-[66rem] m-auto">
        <a key={Blogs[3].id} href={`./article/${Blogs[3]._id}`}>
          <div>
            <img
              key={Blogs[3].id}
              className={`h-[350px] w-[5x]`}
              src={`${Blogs[3].img}`}
            />
            <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
              <span key={Blogs[3].id} className="text-4xl">
                {Blogs[3].title}
              </span>
              <span key={Blogs[3].id} className="text-white">
                {Blogs[3].content}
              </span>
            </div>
          </div>
        </a>
        <a key={Blogs[4].id} href={`./article/${Blogs[4]._id}`}>
          <div>
            <img
              key={Blogs[4].id}
              className={`h-[350px] w-[5x]`}
              src={`${Blogs[4].img}`}
            />
            <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
              <span key={Blogs[4].id} className="text-4xl">
                {Blogs[4].title}
              </span>
              <span key={Blogs[4].id} className="text-white">
                {Blogs[4].content}
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className=" w-full h-[400px] transition-all duration-700 items-center flex bg-yellow-400 my-16 py-4 overflow-x-auto">
        <div className="flex gap-2 m-auto max-w-[66rem]">
          {Blogs.slice(5, 8).map((blogs) => (
            <a key={blogs.id} href={`./article/${blogs._id}`}>
              <div className="isthisit w-[350px] h-[350px] hover:bg-black transition-all duration-700 hover:text-yellow-400 text-black text-6xl rounded-lg border-4 border-black">
                <div key={blogs.id}>{blogs.title}</div>
                <div key={blogs.id} className="text-xl text-yellow-400 pt-6">
                  {blogs.content}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-black max-w-[66rem] m-auto">
        {Blogs.slice(8, 11).map((blogs) => (
          <div
            key={blogs.id}
            className="border-2 border-yellow-400 rounded-lg m-2 transition-all duration-300 text-yellow-400 hover:text-black hover:bg-yellow-400"
          >
            <a key={blogs.id} href={`./article/${blogs._id}`}>
              <div className="flex gap-2 p-2">
                <div className="relative overflow-hidden w-[700px] flex justify-center">
                  <img
                    key={blogs.id}
                    className={`w-[697px] hover:scale-110 transition-all duration-700`}
                    src={`${blogs.img}`}
                  />
                </div>
                <div className=" rounded-lg p-4 overflow-y-auto ">
                  <div key={blogs.id} className="text-4xl mb-6">
                    {blogs.title}
                  </div>
                  <div key={blogs.id} className="text-2xl">
                    {blogs.content}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <a href="./allblogs">
        <div className="flex justify-center p-6 mt-8">
          <button className="text-3xl border-yellow-400 text-yellow-400 border-4 p-4 rounded-lg transition-all duration-75 hover:text-black hover:bg-yellow-400 hover:-translate-y-2">
            All Blogs
          </button>
        </div>
      </a>
      <Footer />
    </>
  );
}
