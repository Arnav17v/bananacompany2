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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const [item, setItem] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!e) {
      // Handle the case where the event object is null or undefined
      console.error('Event object is null or undefined');
      return;
    }
    onsubmit(item);
    setItem('');
  };

  const handleblogFormSubmit = async (e: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
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
      
    </>
  );
};

export default ADMINPAGE;
