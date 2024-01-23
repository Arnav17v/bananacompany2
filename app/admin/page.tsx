"use client";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import { useState } from "react";
import blogs from "@/app/blogs.json";

const ADMINPAGE = () => {
  const [isauth, setisauth] = useState(false);
  const [password, setPassword] = useState(""); // State to store the entered password
  const [clickedpost, setclickedpost] = useState(false);
  const [submitted, setsubmitted] = useState(false);

  const handledivClick = () => {
    setclickedpost(true);
  };

  const All = blogs;

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Check if the entered password is correct (for example, "98156")
    if (password === "98156") {
      setisauth(true);
    }
  };

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    content: "",
    img:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e) {
      // Handle the case where the event object is null or undefined
      console.error('Event object is null or undefined');
      return;
    }
    onsubmit(item);
    setItem('');
  };

  const handleblogFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const content = formData.get('content');
    const artic = formData.get('artic');
    const img = formData.get('img');
  
    const response = await fetch('/api/addBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, artic, img }),
    });
  
    if (response.ok) {
      // Blog added successfully
      // You can redirect or update the UI as needed
    } else {
      // Handle error
    }
  };
  
  return (
    <>
      <Navbar />
      <div className={isauth ? "hidden" : ""}>
        <div className="flex justify-center items-center my-[250px]">
          <div className="bg-yellow-400 p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Verification
            </h2>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 mt-2 border text-black rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Display confidential content only if isauth is true */}
      {isauth && (
        <div className="max-w-[66rem] m-auto">
          <a onClick={handledivClick}>
            <div
              className={
                clickedpost
                  ? "isthisit max-w-[64rem] min-h-[80rem] hover:bg-black transition duration-700 text-yellow-400 border-yellow-400 text-6xl rounded-lg border-4"
                  : "isthisit w-[350px] h-[350px] hover:bg-black transition-all duration-700 text-yellow-400 border-yellow-400 text-6xl rounded-lg border-4"
              }
            >
              {clickedpost ? (
                <>
                <div className={submitted ? "hidden p-4 relative text-3xl":"p-4 relative text-3xl"}>
                  <form onSubmit={handleblogFormSubmit}>
                    <div>
                      <label htmlFor="title">Title:</label>
                    </div>
                    <div>
                      <input
                        className=" p-1 bg-slate-700 max-h-[500px] focus:outline-none text-white text-xl rounded-lg"
                        type="text"
                        id="title"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <br />

                    <div>
                      <label htmlFor="description">Short Description:</label>
                    </div>
                    <div>
                      <textarea
                        className="p-1 w-full bg-slate-700 focus:outline-none text-white text-xl rounded-lg"
                        id="description"
                        name="description"
                        value={blogData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <br />

                    <div>
                      <label htmlFor="content">Content:</label>
                    </div>

                    <div>
                      <textarea
                        className="p-1 w-full h-full bg-slate-700 focus:outline-none text-white text-xl rounded-lg"
                        id="content"
                        name="content"
                        value={blogData.content}
                        onChange={handleChange}
                        rows="60"
                        required
                      ></textarea>
                    </div>
                    <br />
                    <div>
                      <label htmlFor="title">Img URL:</label>
                    </div>
                    <div>
                      <input
                        className=" p-1 bg-slate-800 max-h-[500px] focus:outline-none text-white text-xl rounded-lg"
                        type="text"
                        id="img"
                        name="img"
                        value={blogData.img}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input className="mt-6 p-2 rounded-lg hover:text-black hover:bg-yellow-400 hover:-translate-y-2 transform-all duration-75 border-2 border-yellow-400 " type="submit" value="Submit" />
                  </form>
                </div>
                <div className={submitted ? "":"hidden"}>Successfully Submitted</div>
                </>
              ) : (
                "Create blog"
              )}
            </div>
          </a>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ADMINPAGE;
