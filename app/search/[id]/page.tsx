"use client";
import Navbar from "@/app/navbar";
import blogs from "@/app/blogs.json";
import Footer from "@/app/footer";

const DocsIdPage = ({ params}:{params:any}) => {
    const searchRes = params.id ? decodeURIComponent(params.id) : '';
  console.log(searchRes);
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchRes.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchRes.toLowerCase())
  );
  return (
    <>
      <Navbar />
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
                <span key={blog.id} className="text-4xl">{blog.title}</span>
                <span key={blog.id} className="text-white">{blog.content}</span>
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
