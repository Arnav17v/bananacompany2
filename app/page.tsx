"use client";
import Link from "next/link";
import blogs from "./blogs.json";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const All = blogs

export default function Home() {
  
  return (
    <>
      <Navbar/>
      <div className="flex py-4 gap-6 max-w-[66rem] m-auto">
        <Link key={All[0].id} href={`./article/${All[0].id}`}>
          <div className="hover:-translate-y-10 hover:-translate-x-10 transition-all duration-700">
            <div className="relative overflow-hidden w-[700px] flex justify-center">
              <img
                key={All[0].id}
                className={`w-[697px] hover:scale-110 transition-all duration-700`}
                src={`${All[0].img}`}
              />
            </div>
            <div className="p-4 mb-4 text-yellow-400 bg-black z-10  flex flex-col w-[597px] ">
              <span key={All[0].id} className="text-4xl">{All[0].title}</span>
              <span key={All[0].id} className="text-white">{All[0].content}</span>
            </div>
          </div>
        </Link>
        <div>
          <a key={All[1].id} href={`./article/${All[1].id}`}>
            <div>
              <img key={All[1].id} className={`h-[350px] w-[5x]`} src={`${All[1].img}`} />
              <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
                <span key={All[1].id} className="text-4xl">{All[1].title}</span>
                <span key={All[1].id} className="text-white">{All[1].content}</span>
              </div>
            </div>
          </a>
          <a key={All[2].id} href={`./article/${All[2].id}`}>
            <div>
              <img key={All[2].id} className={`h-[350px] w-[5x]`} src={`${All[2].img}`} />
              <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
                <span key={All[2].id} className="text-4xl">{All[2].title}</span>
                <span key={All[2].id} className="text-white">{All[2].content}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex py-4 gap-6 w-[66rem] m-auto">
        <a key={All[3].id} href={`./article/${All[3].id}`}>
          <div>
            <img key={All[3].id} className={`h-[350px] w-[5x]`} src={`${All[3].img}`} />
            <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
              <span key={All[3].id} className="text-4xl">{All[3].title}</span>
              <span key={All[3].id} className="text-white">{All[3].content}</span>
            </div>
          </div>
        </a>
        <a key={All[4].id} href={`./article/${All[4].id}`}>
          <div>
            <img key={All[4].id} className={`h-[350px] w-[5x]`} src={`${All[4].img}`} />
            <div className="text-yellow-400 bg-black z-10  flex flex-col w-[350px] ">
              <span key={All[4].id} className="text-4xl">{All[4].title}</span>
              <span key={All[4].id} className="text-white">{All[4].content}</span>
            </div>
          </div>
        </a>
      </div>
      <div className=" w-full h-[400px] transition-all duration-700 items-center flex bg-yellow-400 my-16 py-4 overflow-x-auto">
        <div className="flex gap-2 m-auto max-w-[66rem]">
          {All.slice(5, 8).map((blogs) => (
            <a key={blogs.id} href={`./article/${blogs.id}`}>
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
        {All.slice(8, 11).map((blogs) => (
          <div key={blogs.id} className="border-2 border-yellow-400 rounded-lg m-2 transition-all duration-300 text-yellow-400 hover:text-black hover:bg-yellow-400">
          <a key={blogs.id} href={`./article/${blogs.id}`}>
            <div className="flex gap-2 p-2">
            <div className="relative overflow-hidden w-[700px] flex justify-center">
              <img
                key={blogs.id}
                className={`w-[697px] hover:scale-110 transition-all duration-700`}
                src={`${blogs.img}`}
              />
            </div>
              <div className=" rounded-lg p-4 overflow-y-auto ">
                <div key={blogs.id} className="text-4xl mb-6">{blogs.title}</div>
                <div key={blogs.id} className="text-2xl">{blogs.content}</div>
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
