// pages/api/addBlog.js

import { addBlog } from "@/app/utils/blogfunctions";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, artic, img } = req.body;
    const newBlog = { title, content, artic, img };
    addBlog(newBlog);
    res.status(200).json({ message: 'Blog added successfully.' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
